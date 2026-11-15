# agency-poem-01 — local test results

Date: 2026-11-15 (WIB). Node v24.22.1. No submit, no push, no repo created (local build only).

## Determinism (two runs)
- Run 1: `mkdir -p out1 && MAKEFUN_OUTPUT_DIR=out1 node main.ts`
- Run 2: `mkdir -p out2 && MAKEFUN_OUTPUT_DIR=out2 node main.ts`
- `cmp out1/entry.txt out2/entry.txt` → IDENTICAL
- sha256 both runs: bfc39d351cb20a7f5321944f66e938ef5e629e0c1746aea349e706243d2193b7

## Gate (from RULES.txt)
- bytes: 779
- Unicode code points: 775 (limit 1–1000) — PASS
- At least one non-whitespace char: true — PASS
- UTF-8: true — PASS
- Lines: 22, no trailing newline (matches starter pattern)

## Files in this entry dir
- main.ts — entrypoint (Node, stdlib only, fixed poem, deterministic)
- poem.txt — the poem text as written to /output/entry.txt
- LICENSE — MIT, copied from starter/
- .makefun/owner.json — {"wallet": "4vJXnxMrsBrtXoHRWkDUXh2ydserPugEKeDyF7CPMB8L"}
- TESTS.md — this file

## Kit check
See CHECK.md (output of `node cli/makefun.mjs check --kit . --repo <entry>` run from the unpacked kit, without transcripts).

## Kit check (2026-11-15 13:13 WIB, no transcripts)
Full output saved in CHECK.md. Summary:
- 4 passed: competition_open, snapshot (5 files, 4,484 bytes), license_osi (MIT), entrypoint (main.ts, node22)
- 1 failed: transcripts_present — expected: no bundle created in this local-only task
- 12 skipped: all other transcript checks, strategy_note, committed_secret
- 5 checked at submission (need GitHub repo): repo_public, repo_owner, repo_created_after_open, commit_in_repo, duplicate_snapshot
- Verdict: "not ready: fix transcripts_present, then check again"
