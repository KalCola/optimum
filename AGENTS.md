# Custom Agents in OptimAI Network Docs

This repository includes custom Copilot agents to streamline development and documentation workflows.

## Included agents

### `throughput-codespace-ai`
- Path: `.github/agents/throughput-codespace.agent.md`
- Purpose: high-throughput, concise code + docs modifications in this repository
- Behaviors:
  - patch-first, brief summaries
  - minimal diffs and safe edits only in target files
  - asks clarifying questions only when needed
- Usage example (chat):
  - `@throughput-codespace-ai fix typos in docs/optimai-agent.mdx and keep changes minimal`

## How to use locally and in Codespace
1. Ensure the agent file exists in the repo at `.github/agents/throughput-codespace.agent.md`.
2. Open in VS Code (Codespace or local clone).
3. In Copilot Chat, select the agent named `throughput-codespace-ai`.
4. Run commands and inspect output.

### Optional local user prompt fallback
If your Copilot setup does not auto-discover repo agents, copy the same content to a user-level prompt directory:
- macOS/Linux: `~/.config/Code/User/prompts/throughput-codespace.agent.md`
- Windows: `%APPDATA%\Code\User\prompts\throughput-codespace.agent.md`

Then reload VS Code and select the agent.
