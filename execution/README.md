# Execution Layer

This directory contains deterministic Python scripts that perform the actual work. These scripts are called by the orchestration layer (AI) based on directives.

## Principles

1. **Deterministic**: Scripts should produce consistent results given the same inputs
2. **Well-commented**: Explain what the script does, its inputs/outputs, and any edge cases
3. **Error handling**: Handle errors gracefully and provide clear error messages
4. **Testable**: Scripts should be easy to test in isolation
5. **Fast**: Optimize for performance where possible

## Script Structure

Each script should follow this general structure:

```python
#!/usr/bin/env python3
"""
Brief description of what this script does.

Inputs:
- List inputs (command line args, env vars, files, etc.)

Outputs:
- List outputs (files created, API calls made, etc.)

Example usage:
    python script_name.py --arg1 value1 --arg2 value2
"""

import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def main():
    """Main function"""
    # Your code here
    pass

if __name__ == "__main__":
    main()
```

## Environment Variables

All API keys and sensitive configuration should be stored in `.env` at the project root. Use `python-dotenv` to load them:

```python
from dotenv import load_dotenv
load_dotenv()

api_key = os.getenv('API_KEY_NAME')
```

## Dependencies

Install required packages with:
```bash
pip install -r requirements.txt
```

## File Paths

- Use `.tmp/` for all intermediate files (scraped data, temp exports, etc.)
- Never hardcode absolute paths
- Use `os.path.join()` for cross-platform compatibility
