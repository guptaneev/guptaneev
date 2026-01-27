# Directives

This directory contains Standard Operating Procedures (SOPs) written in Markdown. Each directive defines how to accomplish a specific task using the execution layer scripts.

## Purpose

Directives are the "what to do" layer. They provide:
- Clear goals and objectives
- Required inputs
- Which execution scripts to use
- Expected outputs
- Edge cases and error handling
- Learnings from past executions

## Directive Format

Each directive should follow this structure:

```markdown
# [Task Name]

## Goal
Brief description of what this directive accomplishes.

## Inputs
- List of required inputs
- Where they come from (user, API, file, etc.)
- Format/type of each input

## Execution Tools
- `execution/script_name.py` - What it does
- Any other scripts or tools needed

## Process
1. Step-by-step instructions
2. Decision points and branching logic
3. Error handling procedures

## Outputs
- What gets created/updated
- Where it's stored (Google Sheets, Slides, etc.)
- Format and structure

## Edge Cases
- Known issues and how to handle them
- API rate limits
- Data validation requirements
- Timing considerations

## Learnings
- Insights gained from running this directive
- Optimizations discovered
- Common pitfalls to avoid
```

## Living Documents

Directives are continuously improved. When the orchestration layer (AI) discovers:
- API constraints or rate limits
- Better approaches
- Common errors
- Timing expectations

...it should update the relevant directive with these learnings.

## Best Practices

1. **Be specific**: Provide exact commands, file paths, and parameters
2. **Include examples**: Show sample inputs and outputs
3. **Document edge cases**: Capture what can go wrong and how to handle it
4. **Keep updated**: Add learnings as you discover them
5. **Link to scripts**: Reference the exact execution scripts to use
