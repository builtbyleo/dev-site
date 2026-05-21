---
title: Event Scanner
organization: OpenZeppelin
date: 2025-07-25
endDate: 2026-02-01
technology: ["rust", "alloy", "evm"]
link: https://github.com/OpenZeppelin/Event-Scanner
---

Led and built the development of a high-performance, multi-threaded Rust library for streaming EVM smart contract events, now used in production by infrastructure teams including Nethermind and Taiko. Benchmarked with Criterion and optimized throughput to scan 10,000 events in ~250ms, with fault-tolerant handling of chain reorganizations and eventual consistency guarantees aimed at zero missed canonical events.
