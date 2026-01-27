# Example: Scrape Website

## Goal
Scrape content from a single website and save the data to a structured format in `.tmp/` for further processing.

## Inputs
- `url` (string): The URL to scrape
- `selectors` (dict): CSS selectors for the data to extract
  - Example: `{"title": "h1.title", "content": "div.content", "author": "span.author"}`

## Execution Tools
- `execution/scrape_single_site.py` - Fetches HTML and extracts data using BeautifulSoup

## Process

1. **Validate inputs**
   - Ensure URL is valid and accessible
   - Verify selectors are provided

2. **Run scraper**
   ```bash
   python execution/scrape_single_site.py --url "https://example.com" --selectors '{"title": "h1", "content": "p"}'
   ```

3. **Check output**
   - Script saves JSON to `.tmp/scraped_data_[timestamp].json`
   - Verify file was created and contains expected data

4. **Handle errors**
   - If 404/403: Log error and skip
   - If timeout: Retry once with longer timeout
   - If parsing fails: Check if selectors need updating

## Outputs
- **File**: `.tmp/scraped_data_[timestamp].json`
- **Format**: JSON with extracted fields
- **Example**:
  ```json
  {
    "url": "https://example.com",
    "scraped_at": "2026-01-26T18:30:00Z",
    "data": {
      "title": "Example Title",
      "content": "Example content..."
    }
  }
  ```

## Edge Cases

### Rate Limiting
- **Issue**: Some sites limit requests per minute
- **Solution**: Add `--delay 2` flag to wait 2 seconds between requests
- **Detection**: Look for 429 status codes

### Dynamic Content
- **Issue**: JavaScript-rendered content won't appear in HTML
- **Solution**: Use Selenium-based scraper (create `execution/scrape_dynamic_site.py`)
- **Detection**: Empty results despite valid selectors

### Changed HTML Structure
- **Issue**: Site redesign breaks selectors
- **Solution**: Update selectors dict, test on sample page first
- **Detection**: Missing fields in output JSON

## Learnings

- **2026-01-26**: Added timestamp to output filename to avoid overwriting data
- **Best practice**: Always validate URL accessibility before attempting full scrape
- **Optimization**: Batch multiple URLs in a single script run rather than calling script repeatedly
