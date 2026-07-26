#!/usr/bin/env node
// Catches import paths whose casing doesn't exactly match a file on
// disk — the exact class of bug that builds fine on Windows/Mac but
// breaks on Vercel/Linux (case-sensitive filesystems).
//
// Run manually:  node scripts/check-import-case.js
// Also wired as a "prebuild" step, so it runs automatically before
// every `npm run build`.

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.resolve(__dirname, '..', 'src')

const IMPORT_RE = /from\s+['"](\.\.?\/[^'"]+)['"]/g
const EXTENSIONS = ['', '.jsx', '.js', '/index.jsx', '/index.js']

let problems = 0

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(full)
    } else if (/\.jsx?$/.test(entry.name)) {
      checkFile(full)
    }
  }
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const dir = path.dirname(filePath)
  let match

  while ((match = IMPORT_RE.exec(content))) {
    const specifier = match[1]
    const resolvedBase = path.resolve(dir, specifier)
    const ok = EXTENSIONS.some((ext) => existsExact(resolvedBase + ext))

    if (!ok) {
      problems++
      console.log(`\x1b[31m✗\x1b[0m ${path.relative(process.cwd(), filePath)}`)
      console.log(`  imports "${specifier}" — no exact-case match found on disk\n`)
    }
  }
}

// fs.existsSync ignores case on Windows/Mac — this reads the actual
// directory listing instead, which is case-sensitive everywhere.
function existsExact(targetPath) {
  const dir = path.dirname(targetPath)
  const base = path.basename(targetPath)
  if (!fs.existsSync(dir)) return false
  return fs.readdirSync(dir).includes(base)
}

walk(SRC)

if (problems > 0) {
  console.log(`${problems} import(s) will break on case-sensitive builds (Vercel/Linux).`)
  process.exit(1)
} else {
  console.log('\x1b[32m✓\x1b[0m All relative imports match on-disk casing exactly.')
}
