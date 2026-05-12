export const tools = [
  // Text Tools
  { 
    id: 'word-counter', 
    title: 'Word Counter', 
    description: 'Count words, characters and sentences.', 
    icon: '📝', 
    category: 'Text Tools', 
    path: '/word-counter',
    howToUse: 'To use the Word Counter, simply paste your text into the input area. The tool will instantly calculate the total word count, character count, and sentence count. This is useful for writers, students, and professionals who need to adhere to specific length requirements.'
  },
  { 
    id: 'character-counter', 
    title: 'Character Counter', 
    description: 'Detailed character and space analysis.', 
    icon: '🔤', 
    category: 'Text Tools', 
    path: '/character-counter',
    howToUse: 'The Character Counter provides a detailed breakdown of your text. Just type or paste your content, and it will show you the number of characters with and without spaces. It also provides a line count, making it perfect for coding or formatting tasks.'
  },
  { 
    id: 'case-converter', 
    title: 'Case Converter', 
    description: 'UPPER, lower, Title Case, etc.', 
    icon: '🔡', 
    category: 'Text Tools', 
    path: '/case-converter',
    howToUse: 'Transform your text case instantly. Paste your text, and the tool will generate UPPERCASE, lowercase, and Title Case versions. Copy the one you need with a single click. This is a huge time-saver for correcting accidentally typed caps or formatting headings.'
  },
  { 
    id: 'remove-duplicate-lines', 
    title: 'Remove Duplicate Lines', 
    description: 'Clean up your lists instantly.', 
    icon: '👯', 
    category: 'Text Tools', 
    path: '/remove-duplicate-lines',
    howToUse: 'Cleaning up large lists is easy with this tool. Paste your list of items (one per line), and it will automatically remove all redundant entries. It\'s ideal for managing email lists, code variables, or any large dataset.'
  },
  { 
    id: 'text-diff-checker', 
    title: 'Text Diff Checker', 
    description: 'Compare two texts for differences.', 
    icon: '⚖️', 
    category: 'Text Tools', 
    path: '/text-diff-checker',
    howToUse: 'The Text Diff Checker compares two pieces of text side-by-side. Paste your original text in the first box and the modified version in the second. The tool will highlight the differences, helping you track changes or find errors in code and documents.'
  },
  { 
    id: 'text-sorter', 
    title: 'Text Sorter', 
    description: 'Sort lines alphabetically or numerically.', 
    icon: '🔀', 
    category: 'Text Tools', 
    path: '/text-sorter',
    howToUse: 'Organize your lists in seconds. Paste your text, and the tool will sort the lines alphabetically (A-Z or Z-A). This is perfect for organizing glossaries, bibliography lists, or code exports.'
  },
  { 
    id: 'random-text-generator', 
    title: 'Random Text', 
    description: 'Generate random strings or gibberish.', 
    icon: '🎲', 
    category: 'Text Tools', 
    path: '/random-text-generator',
    howToUse: 'Need placeholder text? This generator creates unique random strings. You can use it to test input fields, create mock data, or generate secure-looking strings for development purposes.'
  },
  { 
    id: 'lorem-ipsum', 
    title: 'Lorem Ipsum', 
    description: 'Standard placeholder text generator.', 
    icon: '📜', 
    category: 'Text Tools', 
    path: '/lorem-ipsum',
    howToUse: 'The classic Lorem Ipsum generator for designers. It creates standard "dummy" text that mimics the rhythm of natural speech. Use it to fill your website mockups and layouts so you can focus on the visual design.'
  },
  { 
    id: 'fancy-text-generator', 
    title: 'Fancy Text', 
    description: 'Convert text to cool symbols and fonts.', 
    icon: '✨', 
    category: 'Text Tools', 
    path: '/fancy-text-generator',
    howToUse: 'Make your social media profiles stand out. Type your text, and we\'ll convert it into various stylish symbols and "fonts". Just copy and paste into your bio or posts on Instagram, TikTok, or Twitter.'
  },
  { 
    id: 'unicode-converter', 
    title: 'Unicode Converter', 
    description: 'Convert text to Unicode escape sequences.', 
    icon: 'U+', 
    category: 'Text Tools', 
    path: '/unicode-converter',
    howToUse: 'This tool converts standard characters into their Unicode escape sequences (e.g., \\uXXXX). It\'s an essential utility for developers working with internationalization or specialized encoding in JavaScript and other languages.'
  },
  { 
    id: 'slug-generator', 
    title: 'Slug Generator', 
    description: 'Make URL-friendly slugs from text.', 
    icon: '🔗', 
    category: 'Text Tools', 
    path: '/slug-generator',
    howToUse: 'Convert your blog titles or headings into clean, SEO-friendly URL slugs. It removes special characters, converts spaces to hyphens, and forces lowercase, ensuring your links are professional and readable.'
  },
  { 
    id: 'regex-tester', 
    title: 'Regex Tester', 
    description: 'Test regular expressions in real-time.', 
    icon: '.*', 
    category: 'Text Tools', 
    path: '/regex-tester',
    howToUse: 'Debug your regular expressions instantly. Paste the text you want to test in the first box and your regex pattern in the second. The tool will tell you if there\'s a match, helping you validate patterns before implementing them in your code.'
  },
  { 
    id: 'json-formatter', 
    title: 'JSON Formatter', 
    description: 'Prettify and validate JSON data.', 
    icon: '{ }', 
    category: 'Text Tools', 
    path: '/json-formatter',
    howToUse: 'Turn messy, minified JSON into a beautiful, readable format. Paste your JSON string, and we will apply proper indentation and spacing. It also helps in identifying syntax errors like missing commas or brackets.'
  },
  { 
    id: 'xml-formatter', 
    title: 'XML Formatter', 
    description: 'Format and beautify XML strings.', 
    icon: '< >', 
    category: 'Text Tools', 
    path: '/xml-formatter',
    howToUse: 'Improve the readability of your XML files. Paste your XML code, and the tool will automatically indent the tags and attributes, making it much easier to debug complex data structures.'
  },
  { 
    id: 'yaml-formatter', 
    title: 'YAML Formatter', 
    description: 'Format and validate YAML data.', 
    icon: 'YML', 
    category: 'Text Tools', 
    path: '/yaml-formatter',
    howToUse: 'YAML is sensitive to indentation. Use this tool to ensure your YAML files are correctly formatted. Paste your YAML data, and we\'ll clean it up and validate it against standard YAML rules.'
  },
  { 
    id: 'csv-to-json', 
    title: 'CSV to JSON', 
    description: 'Convert CSV data to JSON format.', 
    icon: '📑', 
    category: 'Text Tools', 
    path: '/csv-to-json',
    howToUse: 'Easily convert tabular data from Excel or Google Sheets into JSON objects. Paste your CSV content (comma-separated), and the tool will generate a structured JSON array suitable for use in your web applications.'
  },
  { 
    id: 'markdown-previewer', 
    title: 'Markdown Preview', 
    description: 'Live preview for markdown code.', 
    icon: 'M↓', 
    category: 'Text Tools', 
    path: '/markdown-previewer',
    howToUse: 'Write and preview your Markdown in real-time. Type your markdown syntax on the left, and see the rendered HTML on the right. This is the fastest way to check how your README.md or blog posts will look before publishing.'
  },

  // Developer Tools
  { 
    id: 'base64-codec', 
    title: 'Base64 Encode/Decode', 
    description: 'Convert text to/from Base64.', 
    icon: '🔗', 
    category: 'Developer Tools', 
    path: '/base64-codec',
    howToUse: 'Encode your binary data or sensitive strings into a web-safe Base64 format. You can also paste an existing Base64 string to decode it back into readable plain text.'
  },
  { 
    id: 'jwt-decoder', 
    title: 'JWT Decoder', 
    description: 'Decode JSON Web Tokens instantly.', 
    icon: '🔑', 
    category: 'Developer Tools', 
    path: '/jwt-decoder',
    howToUse: 'Unlock the contents of any JSON Web Token (JWT). Paste your token, and the tool will decode the payload and header, allowing you to see exactly what data is being passed between your client and server.'
  },
  { 
    id: 'url-codec', 
    title: 'URL Encoder/Decoder', 
    description: 'Safely encode/decode URL strings.', 
    icon: '🌐', 
    category: 'Developer Tools', 
    path: '/url-codec',
    howToUse: 'Prepare your strings for use in URL parameters. It encodes special characters (like ?, &, and =) into percent-encoded format, ensuring your URLs are valid and don\'t break when passed through a browser.'
  },
  { 
    id: 'html-codec', 
    title: 'HTML Encoder/Decoder', 
    description: 'Encode/decode HTML entities.', 
    icon: '</>', 
    category: 'Developer Tools', 
    path: '/html-codec',
    howToUse: 'Safely display HTML code on your website by encoding tags into entities like &lt; and &gt;. This prevents the browser from executing the code and helps avoid XSS vulnerabilities.'
  },
  { 
    id: 'sql-formatter', 
    title: 'SQL Formatter', 
    description: 'Format SQL queries for readability.', 
    icon: '💾', 
    category: 'Developer Tools', 
    path: '/sql-formatter',
    howToUse: 'Turn dense, single-line SQL queries into beautifully formatted blocks with keywords highlighted. It supports SELECT, INSERT, UPDATE, and DELETE statements, making it much easier to review database logic.'
  },
  { 
    id: 'code-beautifier', 
    title: 'Code Beautifier', 
    description: 'Make messy code look pretty.', 
    icon: '💅', 
    category: 'Developer Tools', 
    path: '/code-beautifier',
    howToUse: 'Restore order to your messy source code. Paste your JavaScript, CSS, or HTML, and the tool will apply standard indentation and line breaks, making the code maintainable again.'
  },
  { 
    id: 'minify-css', 
    title: 'Minify CSS', 
    description: 'Compress CSS for better performance.', 
    icon: 'CSS', 
    category: 'Developer Tools', 
    path: '/minify-css',
    howToUse: 'Optimize your website speed by removing all unnecessary whitespace, comments, and line breaks from your CSS files. Smaller files load faster, leading to a better user experience and SEO.'
  },
  { 
    id: 'minify-js', 
    title: 'Minify JS', 
    description: 'Compress JavaScript code.', 
    icon: 'JS', 
    category: 'Developer Tools', 
    path: '/minify-js',
    howToUse: 'Shrink your JavaScript files to the absolute minimum size. This process removes comments and minifies variables where possible, drastically reducing the bandwidth needed for your users to load your scripts.'
  },
  { 
    id: 'minify-html', 
    title: 'Minify HTML', 
    description: 'Compress HTML documents.', 
    icon: 'HTML', 
    category: 'Developer Tools', 
    path: '/minify-html',
    howToUse: 'Clean up your HTML documents by removing extra spaces and comments. This is a vital final step in website optimization to ensure your pages are as lean and fast as possible.'
  },
  { 
    id: 'sha256-gen', 
    title: 'SHA256 Generator', 
    description: 'Generate SHA256 hashes.', 
    icon: '🔒', 
    category: 'Developer Tools', 
    path: '/sha256-gen',
    howToUse: 'Generate a secure SHA-256 cryptographic hash of any input text. This is commonly used for verifying data integrity, creating secure signatures, or testing hashing implementations in your code.'
  },
  { 
    id: 'md5-gen', 
    title: 'MD5 Hash Generator', 
    description: 'Generate MD5 hashes.', 
    icon: '#', 
    category: 'Developer Tools', 
    path: '/md5-gen',
    howToUse: 'Quickly create an MD5 hash of your text. While not recommended for modern security, MD5 is still widely used for file integrity checksums and legacy system compatibility.'
  },
  { 
    id: 'uuid-gen', 
    title: 'UUID Generator', 
    description: 'Generate random UUIDs (v4).', 
    icon: '🆔', 
    category: 'Developer Tools', 
    path: '/uuid-gen',
    howToUse: 'Generate high-entropy, random Version 4 UUIDs. These unique identifiers are essential for database primary keys, session IDs, and any scenario where you need a globally unique string.'
  },
  { 
    id: 'cron-gen', 
    title: 'Cron Generator', 
    description: 'Build cron schedule expressions.', 
    icon: '⏰', 
    category: 'Developer Tools', 
    path: '/cron-gen',
    howToUse: 'Building cron expressions can be tricky. This tool helps you create human-readable schedules (like "every Monday at 5 PM") and converts them into the exact 5 or 6 digit cron format for your server tasks.'
  },
  { 
    id: 'api-tester', 
    title: 'API Tester', 
    description: 'Test HTTP requests (Mock).', 
    icon: '📡', 
    category: 'Developer Tools', 
    path: '/api-tester',
    howToUse: 'A browser-based API testing tool. You can input an endpoint URL, select a method (GET, POST, etc.), and see the simulated response. It\'s great for quick prototyping and testing endpoint connectivity.'
  },
  { 
    id: 'http-header-checker', 
    title: 'Header Checker', 
    description: 'Analyze HTTP response headers.', 
    icon: '📋', 
    category: 'Developer Tools', 
    path: '/http-header-checker',
    howToUse: 'Check the security and configuration of any website by analyzing its HTTP headers. Just enter a URL, and we\'ll show you headers like Content-Security-Policy, X-Frame-Options, and more.'
  },
  { 
    id: 'dns-lookup', 
    title: 'DNS Lookup', 
    description: 'Check DNS records for any domain.', 
    icon: '🔍', 
    category: 'Developer Tools', 
    path: '/dns-lookup',
    howToUse: 'Query the DNS records for any domain name. This tool provides information about A records, MX records, and TXT records, which is vital for troubleshooting email or domain configuration issues.'
  },
  { 
    id: 'ip-lookup', 
    title: 'IP Lookup', 
    description: 'Get details about an IP address.', 
    icon: '📍', 
    category: 'Developer Tools', 
    path: '/ip-lookup',
    howToUse: 'Enter any IP address to find out its geographical location, ISP, and organization details. This is helpful for security analysis or simply identifying where a server is located.'
  },
  { 
    id: 'user-agent-parser', 
    title: 'User-Agent Parser', 
    description: 'Decode browser user-agent strings.', 
    icon: '💻', 
    category: 'Developer Tools', 
    path: '/user-agent-parser',
    howToUse: 'Paste a browser\'s User-Agent string to see a detailed breakdown of the device, operating system, and browser version. It\'s an essential tool for developers debugging device-specific website issues.'
  },

  // AI Tools (Simulated/Placeholders)
  { 
    id: 'ai-summarizer', 
    title: 'AI Text Summarizer', 
    description: 'Summarize long articles instantly.', 
    icon: '🤖', 
    category: 'AI Tools', 
    path: '/ai-summarizer',
    howToUse: 'Save time by getting the gist of any long article. Paste your text, and our AI-powered logic will identify the key sentences and provide a concise summary, allowing you to consume information faster.'
  },
  { 
    id: 'ai-paraphraser', 
    title: 'AI Paraphraser', 
    description: 'Rewrite text in different tones.', 
    icon: '🔄', 
    category: 'AI Tools', 
    path: '/ai-paraphraser',
    howToUse: 'Change the tone or style of your writing without losing the meaning. Paste your sentence, and our paraphraser will suggest alternative ways to express the same idea, perfect for academic or professional editing.'
  },
  { 
    id: 'ai-grammar-fixer', 
    title: 'AI Grammar Fixer', 
    description: 'Correct grammar and spelling.', 
    icon: '✍️', 
    category: 'AI Tools', 
    path: '/ai-grammar-fixer',
    howToUse: 'Eliminate embarrassing typos and grammatical errors. This tool scans your text and suggests corrections for common mistakes, ensuring your communication is always professional and polished.'
  },
  { 
    id: 'ai-blog-title', 
    title: 'AI Blog Title Gen', 
    description: 'Catchy titles for your blog.', 
    icon: '📰', 
    category: 'AI Tools', 
    path: '/ai-blog-title',
    howToUse: 'Input your blog topic, and we\'ll generate 10+ SEO-optimized, click-worthy titles. It uses proven headline patterns to help you increase your click-through rates on search results and social media.'
  },
  { 
    id: 'ai-seo-keywords', 
    title: 'AI SEO Keywords', 
    description: 'Find high-ranking keywords.', 
    icon: '📈', 
    category: 'AI Tools', 
    path: '/ai-seo-keywords',
    howToUse: 'Get a list of related keywords for your niche. Enter a primary keyword, and our tool will generate a list of long-tail variations and related terms to help you optimize your content for Google.'
  },
  { 
    id: 'ai-prompt-gen', 
    title: 'AI Prompt Gen', 
    description: 'Better prompts for ChatGPT/Midjourney.', 
    icon: '💡', 
    category: 'AI Tools', 
    path: '/ai-prompt-gen',
    howToUse: 'Unlock the full potential of LLMs. Provide a basic idea, and we will expand it into a detailed, structured prompt that will give you much better results from AI models like GPT-4 or Midjourney.'
  },
  { 
    id: 'ai-email-writer', 
    title: 'AI Email Writer', 
    description: 'Draft professional emails in seconds.', 
    icon: '✉️', 
    category: 'AI Tools', 
    path: '/ai-email-writer',
    howToUse: 'Simply describe what you want to say (e.g., "ask for a refund"), and our AI will draft a complete, professional email. You can choose the tone—from polite to firm—to match your specific situation.'
  },
  { 
    id: 'ai-resume-builder', 
    title: 'AI Resume Builder', 
    description: 'Create a job-winning resume.', 
    icon: '💼', 
    category: 'AI Tools', 
    path: '/ai-resume-builder',
    howToUse: 'Input your experience and skills, and we\'ll format them into a modern, ATS-friendly resume template. Our AI logic helps highlight your achievements in a way that catches a recruiter\'s eye.'
  },
  { 
    id: 'ai-cover-letter', 
    title: 'AI Cover Letter', 
    description: 'Draft compelling cover letters.', 
    icon: '📄', 
    category: 'AI Tools', 
    path: '/ai-cover-letter',
    howToUse: 'Struggling to start your cover letter? Provide the job title and a few of your top skills, and we\'ll generate a customized letter that explains why you\'re the perfect fit for the role.'
  },
  { 
    id: 'ai-code-explainer', 
    title: 'AI Code Explainer', 
    description: 'Understand any piece of code.', 
    icon: '👨‍💻', 
    category: 'AI Tools', 
    path: '/ai-code-explainer',
    howToUse: 'Paste any snippet of code, and we\'ll explain what it does in plain English. This is an incredible learning tool for students or developers who are dealing with a new language or legacy codebase.'
  },
  { 
    id: 'ai-sql-gen', 
    title: 'AI SQL Generator', 
    description: 'Write SQL queries using plain English.', 
    icon: '💾', 
    category: 'AI Tools', 
    path: '/ai-sql-gen',
    howToUse: 'Don\'t memorize complex SQL syntax. Just type "find all users who joined last month," and we\'ll generate the exact SQL query you need for your database.'
  },
  { 
    id: 'ai-image-prompt', 
    title: 'AI Image Prompt', 
    description: 'Visual prompts for AI art.', 
    icon: '🖼️', 
    category: 'AI Tools', 
    path: '/ai-image-prompt',
    howToUse: 'Describe an image you want to create, and we\'ll enhance it with artistic terms, lighting details, and style keywords to ensure your AI art generator (like DALL-E) produces a stunning result.'
  },
  { 
    id: 'ai-study-notes', 
    title: 'AI Study Notes', 
    description: 'Turn lectures into structured notes.', 
    icon: '📚', 
    category: 'AI Tools', 
    path: '/ai-study-notes',
    howToUse: 'Paste your lecture transcripts or raw notes, and our AI will organize them into a clean, structured outline with key points, summaries, and action items, making studying much more efficient.'
  },

  // Image Tools
  { 
    id: 'image-compressor', 
    title: 'Image Compressor', 
    description: 'Reduce file size without losing quality.', 
    icon: '📉', 
    category: 'Image Tools', 
    path: '/image-compressor',
    howToUse: 'Upload your large images, and we\'ll compress them to the smallest possible size while maintaining visual clarity. This is essential for web performance and social media uploads.'
  },
  { 
    id: 'bg-remover', 
    title: 'Background Remover', 
    description: 'Remove backgrounds from images.', 
    icon: '✂️', 
    category: 'Image Tools', 
    path: '/bg-remover',
    howToUse: 'Create professional-looking transparent PNGs in one click. Our background removal tool uses edge detection to separate the subject from the background, perfect for product photography.'
  },
  { 
    id: 'image-resizer', 
    title: 'Image Resizer', 
    description: 'Change image dimensions easily.', 
    icon: '🖼️', 
    category: 'Image Tools', 
    path: '/image-resizer',
    howToUse: 'Adjust the width and height of your images to fit specific requirements (like Instagram posts or website banners). You can maintain the aspect ratio to ensure your images never look stretched.'
  },
  { 
    id: 'png-to-jpg', 
    title: 'PNG to JPG', 
    description: 'Convert PNG images to JPG.', 
    icon: '🔄', 
    category: 'Image Tools', 
    path: '/png-to-jpg',
    howToUse: 'Convert transparent PNGs into standard JPG format. This is useful when you need smaller file sizes or when a platform only supports JPG uploads.'
  },
  { 
    id: 'jpg-to-png', 
    title: 'JPG to PNG', 
    description: 'Convert JPG images to PNG.', 
    icon: '🔄', 
    category: 'Image Tools', 
    path: '/jpg-to-png',
    howToUse: 'Convert your JPG images into high-quality PNGs. PNG is the preferred format for graphics and screenshots because it supports lossless compression and transparency.'
  },
  { 
    id: 'webp-converter', 
    title: 'WebP Converter', 
    description: 'Convert images to WebP format.', 
    icon: '🕸️', 
    category: 'Image Tools', 
    path: '/webp-converter',
    howToUse: 'Future-proof your website images. WebP provides superior compression compared to JPG/PNG. Use this tool to convert your existing assets into the format recommended by Google for speed.'
  },
  { 
    id: 'qr-generator', 
    title: 'QR Code Generator', 
    description: 'Create custom QR codes.', 
    icon: '📱', 
    category: 'Image Tools', 
    path: '/qr-generator',
    howToUse: 'Enter any URL, text, or contact info to generate a custom QR code. You can then download the image and use it on business cards, menus, or marketing materials.'
  },
  { 
    id: 'barcode-generator', 
    title: 'Barcode Generator', 
    description: 'Generate standard barcodes.', 
    icon: '📊', 
    category: 'Image Tools', 
    path: '/barcode-generator',
    howToUse: 'Create professional barcodes for your products or internal inventory. Simply enter the alphanumeric code, and we\'ll generate a high-resolution barcode image ready for printing.'
  },
  { 
    id: 'meme-generator', 
    title: 'Meme Generator', 
    description: 'Create your own custom memes.', 
    icon: '🎭', 
    category: 'Image Tools', 
    path: '/meme-generator',
    howToUse: 'The fun way to communicate! Upload your own image or choose a popular template, add your funny captions, and download your custom meme to share with friends.'
  },
  { 
    id: 'ocr-tool', 
    title: 'Screenshot to Text', 
    description: 'Extract text from images (OCR).', 
    icon: '📝', 
    category: 'Image Tools', 
    path: '/ocr-tool',
    howToUse: 'No more manual typing from screenshots. Upload an image, and our Optical Character Recognition (OCR) tool will identify all the text and convert it into editable format in seconds.'
  },
  { 
    id: 'image-cropper', 
    title: 'Image Cropper', 
    description: 'Crop images to any size.', 
    icon: '📐', 
    category: 'Image Tools', 
    path: '/image-cropper',
    howToUse: 'Focus on what matters in your photos. Use our intuitive cropping tool to remove unwanted edges and center your subject, ensuring your images look perfect on any platform.'
  },
  { 
    id: 'color-picker', 
    title: 'Color Picker', 
    description: 'Extract colors from images.', 
    icon: '🎨', 
    category: 'Image Tools', 
    path: '/color-picker',
    howToUse: 'Find the perfect hex code. Upload an image and click anywhere to see the exact color values (HEX, RGB, HSL). This is a vital tool for designers trying to match brand colors.'
  },
  { 
    id: 'palette-gen', 
    title: 'Palette Generator', 
    description: 'Create beautiful color schemes.', 
    icon: '🌈', 
    category: 'Image Tools', 
    path: '/palette-gen',
    howToUse: 'Get inspired for your next design project. Generate harmonious color palettes with one click, or extract a palette directly from one of your favorite images.'
  },
  { 
    id: 'favicon-gen', 
    title: 'Favicon Generator', 
    description: 'Create favicons for your site.', 
    icon: '🌐', 
    category: 'Image Tools', 
    path: '/favicon-gen',
    howToUse: 'Make your website look professional in the browser tabs. Upload your logo, and we\'ll generate a set of favicons in all the standard sizes (ICO, PNG) required for modern websites.'
  },

  // PDF Tools
  { 
    id: 'merge-pdf', 
    title: 'Merge PDF', 
    description: 'Combine multiple PDFs into one.', 
    icon: '📂', 
    category: 'PDF Tools', 
    path: '/merge-pdf',
    howToUse: 'Simplify your document management. Upload multiple PDF files, and we will combine them into a single, cohesive document while preserving the original order and quality.'
  },
  { 
    id: 'split-pdf', 
    title: 'Split PDF', 
    description: 'Extract pages from a PDF.', 
    icon: '✂️', 
    category: 'PDF Tools', 
    path: '/split-pdf',
    howToUse: 'Extract exactly what you need. Upload a large PDF and select specific page ranges to save as separate files. This is perfect for sharing only relevant sections of a long report.'
  },
  { 
    id: 'compress-pdf', 
    title: 'Compress PDF', 
    description: 'Reduce PDF file size.', 
    icon: '📉', 
    category: 'PDF Tools', 
    path: '/compress-pdf',
    howToUse: 'Large PDF files can be hard to email. Use this tool to shrink your document size while ensuring the text and images remain perfectly readable for the recipient.'
  },
  { 
    id: 'pdf-to-word', 
    title: 'PDF to Word', 
    description: 'Convert PDF to editable Word.', 
    icon: '📝', 
    category: 'PDF Tools', 
    path: '/pdf-to-word',
    howToUse: 'Unlock your PDF documents for editing. This tool converts PDF pages into a Word document (DOCX), allowing you to change text, images, and formatting easily.'
  },
  { 
    id: 'word-to-pdf', 
    title: 'Word to PDF', 
    description: 'Convert Word to PDF format.', 
    icon: '📄', 
    category: 'PDF Tools', 
    path: '/word-to-pdf',
    howToUse: 'Ensure your document looks the same on every device. Convert your Word files (DOC/DOCX) into high-quality PDFs, which are ideal for sharing and professional printing.'
  },
  { 
    id: 'pdf-to-jpg', 
    title: 'PDF to JPG', 
    description: 'Convert PDF pages to images.', 
    icon: '🖼️', 
    category: 'PDF Tools', 
    path: '/pdf-to-jpg',
    howToUse: 'Turn your PDF pages into high-resolution JPG images. This is perfect when you want to share a document as a visual preview on social media or in a gallery.'
  },
  { 
    id: 'jpg-to-pdf', 
    title: 'JPG to PDF', 
    description: 'Convert images to PDF.', 
    icon: '📂', 
    category: 'PDF Tools', 
    path: '/jpg-to-pdf',
    howToUse: 'Gather your photos or scanned documents into a single PDF file. It\'s the best way to share multiple images as one easy-to-read document.'
  },
  { 
    id: 'pdf-page-extractor', 
    title: 'Page Extractor', 
    description: 'Extract specific PDF pages.', 
    icon: '📄', 
    category: 'PDF Tools', 
    path: '/pdf-page-extractor',
    howToUse: 'The ultimate tool for precise page management. Simply upload your PDF and click the pages you want to keep. We\'ll create a new document with only those selections.'
  },
  { 
    id: 'pdf-protector', 
    title: 'PDF Password', 
    description: 'Protect PDF with a password.', 
    icon: '🔒', 
    category: 'PDF Tools', 
    path: '/pdf-protector',
    howToUse: 'Secure your sensitive information. Upload your PDF and set a strong password. Only people with the password will be able to view the contents of the file.'
  },
  { 
    id: 'pdf-unlocker', 
    title: 'PDF Unlocker', 
    description: 'Remove PDF passwords.', 
    icon: '🔓', 
    category: 'PDF Tools', 
    path: '/pdf-unlocker',
    howToUse: 'Forgot your own password or need to remove protection from a file you authorized? Use this tool to strip away the password protection from your PDF files.'
  },
  { 
    id: 'pdf-watermark', 
    title: 'Add Watermark', 
    description: 'Add watermark to PDF pages.', 
    icon: '💧', 
    category: 'PDF Tools', 
    path: '/pdf-watermark',
    howToUse: 'Protect your intellectual property. Add your logo or custom text (like "Draft" or "Confidential") to every page of your PDF document in one step.'
  },

  // Calculators
  { 
    id: 'age-calc', 
    title: 'Age Calculator', 
    description: 'Calculate exact age details.', 
    icon: '🎂', 
    category: 'Calculators', 
    path: '/age-calc',
    howToUse: 'Enter your date of birth, and we\'ll calculate your exact age down to the day. It also shows you how many months and days are left until your next birthday!'
  },
  { 
    id: 'bmi-calc', 
    title: 'BMI Calculator', 
    description: 'Calculate Body Mass Index.', 
    icon: '⚖️', 
    category: 'Calculators', 
    path: '/bmi-calc',
    howToUse: 'Monitor your health with our BMI calculator. Enter your height and weight, and we\'ll tell you your Body Mass Index and which health category you fall into.'
  },
  { 
    id: 'gpa-calc', 
    title: 'GPA Calculator', 
    description: 'Calculate student GPA/CGPA.', 
    icon: '🎓', 
    category: 'Calculators', 
    path: '/gpa-calc',
    howToUse: 'Students can easily track their academic progress. Enter your grades and credit hours, and our tool will calculate your semester or cumulative GPA instantly.'
  },
  { 
    id: 'percentage-calc', 
    title: 'Percentage Calculator', 
    description: 'Solve percentage problems.', 
    icon: '%', 
    category: 'Calculators', 
    path: '/percentage-calc',
    howToUse: 'Math made easy. Use this tool to find out "what is X% of Y", "what percent is X of Y", or the percentage increase/decrease between two numbers.'
  },
  { 
    id: 'scientific-calc', 
    title: 'Scientific Calculator', 
    description: 'Advanced math calculations.', 
    icon: '🧮', 
    category: 'Calculators', 
    path: '/scientific-calc',
    howToUse: 'A full-featured scientific calculator in your browser. Perform trigonometry, logarithms, and complex functions without needing a physical calculator.'
  },
  { 
    id: 'currency-conv', 
    title: 'Currency Converter', 
    description: 'Real-time exchange rates.', 
    icon: '💱', 
    category: 'Calculators', 
    path: '/currency-conv',
    howToUse: 'Travel or shop with confidence. Enter any amount and choose your currencies to see the current market exchange rates updated in real-time.'
  },
  { 
    id: 'compound-interest', 
    title: 'Compound Interest', 
    description: 'Calculate investment growth.', 
    icon: '📈', 
    category: 'Calculators', 
    path: '/compound-interest',
    howToUse: 'Plan your financial future. Enter your principal amount, interest rate, and time period to see how your money will grow over time with the power of compounding.'
  },
  { 
    id: 'loan-emi-calc', 
    title: 'Loan EMI Calculator', 
    description: 'Calculate monthly loan EMI.', 
    icon: '🏦', 
    category: 'Calculators', 
    path: '/loan-emi-calc',
    howToUse: 'Budget for your next big purchase. Enter the loan amount, interest rate, and tenure to see your exact monthly EMI and the total interest you\'ll pay.'
  },
  { 
    id: 'gst-calc', 
    title: 'GST/VAT Calculator', 
    description: 'Calculate tax additions/removals.', 
    icon: '💰', 
    category: 'Calculators', 
    path: '/gst-calc',
    howToUse: 'Business owners and shoppers can quickly find the net price or the gross price including GST/VAT. Just enter the amount and the tax percentage.'
  },
  { 
    id: 'discount-calc', 
    title: 'Discount Calculator', 
    description: 'Calculate savings on sales.', 
    icon: '🏷️', 
    category: 'Calculators', 
    path: '/discount-calc',
    howToUse: 'Find out exactly how much you\'ll save during a sale. Enter the original price and the discount percentage to see the final price and your total savings.'
  },
  { 
    id: 'timezone-conv', 
    title: 'Time Zone Converter', 
    description: 'Convert time between zones.', 
    icon: '🌍', 
    category: 'Calculators', 
    path: '/timezone-conv',
    howToUse: 'Schedule international meetings with ease. Pick your local time and see what time it will be in any other city or time zone around the world.'
  },
  { 
    id: 'binary-calc', 
    title: 'Binary Calculator', 
    description: 'Perform binary arithmetic.', 
    icon: '01', 
    category: 'Calculators', 
    path: '/binary-calc',
    howToUse: 'Essential for computer science students. Perform addition, subtraction, multiplication, and division on binary numbers (0s and 1s) with ease.'
  },

  // Student Tools
  { 
    id: 'plagiarism-checker', 
    title: 'Plagiarism Checker', 
    description: 'Check text for originality.', 
    icon: '📝', 
    category: 'Student Tools', 
    path: '/plagiarism-checker',
    howToUse: 'Ensure your work is 100% original. Paste your essay or article, and we\'ll scan for duplicate content across the web to help you avoid accidental plagiarism.'
  },
  { 
    id: 'citation-gen', 
    title: 'Citation Generator', 
    description: 'Generate APA/MLA citations.', 
    icon: '📚', 
    category: 'Student Tools', 
    path: '/citation-gen',
    howToUse: 'Stop worrying about bibliography formatting. Enter the book or website details, and we\'ll generate perfect citations in APA, MLA, or Chicago style.'
  },
  { 
    id: 'flashcard-gen', 
    title: 'Flashcard Generator', 
    description: 'Create study flashcards.', 
    icon: '🗂️', 
    category: 'Student Tools', 
    path: '/flashcard-gen',
    howToUse: 'Master any subject. Type your questions and answers, and we\'ll generate a set of digital flashcards you can use to quiz yourself and improve retention.'
  },
  { 
    id: 'quiz-gen', 
    title: 'Quiz Generator', 
    description: 'Generate quizzes from text.', 
    icon: '❓', 
    category: 'Student Tools', 
    path: '/quiz-gen',
    howToUse: 'Test your understanding. Paste your study material, and we\'ll generate a set of multiple-choice questions based on the key facts in the text.'
  },
  { 
    id: 'study-timer', 
    title: 'Study Timer', 
    description: 'Pomodoro-style study timer.', 
    icon: '⏱️', 
    category: 'Student Tools', 
    path: '/study-timer',
    howToUse: 'Boost your focus with the Pomodoro technique. Work for 25 minutes, then take a 5-minute break. This cycle helps keep your mind fresh and productive.'
  },
  { 
    id: 'notes-formatter', 
    title: 'Notes Formatter', 
    description: 'Make study notes beautiful.', 
    icon: '📝', 
    category: 'Student Tools', 
    path: '/notes-formatter',
    howToUse: 'Turn your messy classroom notes into a beautiful, organized document. Our tool applies consistent formatting and headings to make reviewing much easier.'
  },
  { 
    id: 'formula-sheet', 
    title: 'Formula Sheet', 
    description: 'Generate math/physics sheets.', 
    icon: '🧪', 
    category: 'Student Tools', 
    path: '/formula-sheet',
    howToUse: 'Create a custom cheat sheet for your exams. Select the topics you need, and we\'ll generate a clean, printable PDF with all the relevant formulas.'
  },
  { 
    id: 'programming-cheats', 
    title: 'Coding Cheat Sheets', 
    description: 'Quick syntax references.', 
    icon: '👨‍💻', 
    category: 'Student Tools', 
    path: '/programming-cheats',
    howToUse: 'Reference syntax at a glance. We provide condensed cheat sheets for Python, JavaScript, Java, and more, covering all the essential commands and patterns.'
  },
  { 
    id: 'cnf-cfg-conv', 
    title: 'CNF/CFG Converter', 
    description: 'Automata theory converter.', 
    icon: '⚙️', 
    category: 'Student Tools', 
    path: '/cnf-cfg-conv',
    howToUse: 'Essential for computer science students studying automata. Input your context-free grammar and convert it into Chomsky Normal Form (CNF) instantly.'
  },
  { 
    id: 'math-solver', 
    title: 'Math Solver', 
    description: 'Solve complex equations.', 
    icon: '🧮', 
    category: 'Student Tools', 
    path: '/math-solver',
    howToUse: 'Stuck on a problem? Enter your algebra or calculus equation, and we\'ll provide a step-by-step solution to help you understand the process.'
  },

  // SEO & Marketing Tools
  { 
    id: 'meta-tag-gen', 
    title: 'Meta Tag Generator', 
    description: 'Create SEO meta tags.', 
    icon: '🏷️', 
    category: 'SEO Tools', 
    path: '/meta-tag-gen',
    howToUse: 'Improve your search rankings. Fill in your page title and description, and we\'ll generate the HTML meta tags you need to copy into your website\'s <head> section.'
  },
  { 
    id: 'robots-txt-gen', 
    title: 'Robots.txt Gen', 
    description: 'Generate robots.txt files.', 
    icon: '🤖', 
    category: 'SEO Tools', 
    path: '/robots-txt-gen',
    howToUse: 'Control how search engines crawl your site. Choose which directories to allow or disallow, and we\'ll generate a valid robots.txt file for your root directory.'
  },
  { 
    id: 'sitemap-gen', 
    title: 'Sitemap Generator', 
    description: 'Generate XML sitemaps.', 
    icon: '🗺️', 
    category: 'SEO Tools', 
    path: '/sitemap-gen',
    howToUse: 'Help Google find all your pages. Enter your website URL, and we\'ll generate a complete XML sitemap that you can submit to Google Search Console.'
  },
  { 
    id: 'keyword-density', 
    title: 'Keyword Density', 
    description: 'Analyze keyword frequency.', 
    icon: '📊', 
    category: 'SEO Tools', 
    path: '/keyword-density',
    howToUse: 'Avoid keyword stuffing. Paste your article, and we\'ll show you exactly how many times each word appears, helping you maintain a natural balance for SEO.'
  },
  { 
    id: 'domain-authority', 
    title: 'Domain Authority', 
    description: 'Check site authority (Mock).', 
    icon: '🏛️', 
    category: 'SEO Tools', 
    path: '/domain-authority',
    howToUse: 'Estimate the strength of any website. Enter a domain to see its authority score, which is a key metric in understanding how well a site will rank in search results.'
  },
  { 
    id: 'backlink-checker', 
    title: 'Backlink Checker', 
    description: 'Analyze site backlinks (Mock).', 
    icon: '🔗', 
    category: 'SEO Tools', 
    path: '/backlink-checker',
    howToUse: 'Discover who is linking to your site. This tool provides a report on incoming links, helping you understand your off-page SEO and find new outreach opportunities.'
  },
  { 
    id: 'og-tag-gen', 
    title: 'Open Graph Gen', 
    description: 'Generate social meta tags.', 
    icon: '📱', 
    category: 'SEO Tools', 
    path: '/og-tag-gen',
    howToUse: 'Make your links look great on social media. Generate Open Graph tags for Facebook, LinkedIn, and Twitter to control exactly what image and text appear when someone shares your link.'
  },
  { 
    id: 'utm-builder', 
    title: 'UTM Link Builder', 
    description: 'Track your marketing campaigns.', 
    icon: '🔗', 
    category: 'SEO Tools', 
    path: '/utm-builder',
    howToUse: 'Add tracking parameters to your URLs. This allows you to see exactly which social post or email newsletter drove traffic to your site in Google Analytics.'
  },
  { 
    id: 'hashtag-gen', 
    title: 'Hashtag Generator', 
    description: 'Find trending hashtags.', 
    icon: '#', 
    category: 'SEO Tools', 
    path: '/hashtag-gen',
    howToUse: 'Increase the reach of your posts. Enter a keyword related to your content, and we\'ll provide a list of trending and relevant hashtags for Instagram and TikTok.'
  },
  { 
    id: 'yt-tag-gen', 
    title: 'YouTube Tag Gen', 
    description: 'Generate video tags for SEO.', 
    icon: '📺', 
    category: 'SEO Tools', 
    path: '/yt-tag-gen',
    howToUse: 'Get more views on your videos. Provide your video title, and we\'ll generate a list of high-volume tags that help the YouTube algorithm categorize and recommend your content.'
  },

  // Social Media Tools
  { 
    id: 'yt-thumb-down', 
    title: 'YT Thumb Downloader', 
    description: 'Download video thumbnails.', 
    icon: '🖼️', 
    category: 'Social Media Tools', 
    path: '/yt-thumb-down',
    howToUse: 'Need inspiration or a reference? Paste any YouTube video URL and download the high-resolution thumbnail image in one click.'
  },
  { 
    id: 'ig-caption-gen', 
    title: 'IG Caption Generator', 
    description: 'Catchy captions for Instagram.', 
    icon: '📸', 
    category: 'Social Media Tools', 
    path: '/ig-caption-gen',
    howToUse: 'Never run out of ideas for your posts. Describe your photo, and we\'ll generate several catchy, engaging captions complete with relevant emojis.'
  },
  { 
    id: 'tiktok-hashtag', 
    title: 'TikTok Hashtags', 
    description: 'Trending TikTok tags.', 
    icon: '🎵', 
    category: 'Social Media Tools', 
    path: '/tiktok-hashtag',
    howToUse: 'Go viral by using the right tags. We provide a list of currently trending hashtags and niche-specific tags to help your videos get on the "For You" page.'
  },
  { 
    id: 'tweet-formatter', 
    title: 'Tweet Formatter', 
    description: 'Optimize your tweets.', 
    icon: '🐦', 
    category: 'Social Media Tools', 
    path: '/tweet-formatter',
    howToUse: 'Ensure your tweets fit within the character limit and look professional. This tool helps you format threads and optimize spacing for maximum engagement.'
  },
  { 
    id: 'link-bio-gen', 
    title: 'Link Bio Generator', 
    description: 'Create link-in-bio pages.', 
    icon: '🔗', 
    category: 'Social Media Tools', 
    path: '/link-bio-gen',
    howToUse: 'Create a simple landing page for your social media bios. Add all your important links in one place so your followers can easily find your store, blog, or other profiles.'
  },
  { 
    id: 'social-post-gen', 
    title: 'Social Post Gen', 
    description: 'Draft posts for all platforms.', 
    icon: '📝', 
    category: 'Social Media Tools', 
    path: '/social-post-gen',
    howToUse: 'One tool for all your content. Draft a post and we\'ll help you optimize it for LinkedIn, Twitter, and Facebook simultaneously, adjusting for each platform\'s style.'
  },
  { 
    id: 'yt-title-gen', 
    title: 'YT Title Generator', 
    description: 'Click-worthy video titles.', 
    icon: '🎬', 
    category: 'Social Media Tools', 
    path: '/yt-title-gen',
    howToUse: 'Increase your CTR with better titles. Input your video topic and we\'ll suggest click-worthy, searchable titles that will help your videos rank higher in YouTube search.'
  },

  // Security Tools
  { 
    id: 'password-gen', 
    title: 'Password Generator', 
    description: 'Create secure passwords.', 
    icon: '🔐', 
    category: 'Security Tools', 
    path: '/password-gen',
    howToUse: 'Protect your accounts with high-entropy passwords. Choose your length and character types, and we\'ll generate a random string that is virtually impossible to crack.'
  },
  { 
    id: 'pass-strength', 
    title: 'Strength Checker', 
    description: 'Check password security.', 
    icon: '💪', 
    category: 'Security Tools', 
    path: '/pass-strength',
    howToUse: 'Find out how secure your password really is. Type it in, and we\'ll analyze its length and complexity, giving you a score and tips on how to make it stronger.'
  },
  { 
    id: 'email-validator', 
    title: 'Email Validator', 
    description: 'Verify email addresses.', 
    icon: '📧', 
    category: 'Security Tools', 
    path: '/email-validator',
    howToUse: 'Check if an email address is valid and properly formatted. This tool helps you maintain a clean mailing list and avoid bounces in your marketing campaigns.'
  },
  { 
    id: 'disposable-email', 
    title: 'Disposable Detector', 
    description: 'Check for fake email providers.', 
    icon: '🕵️', 
    category: 'Security Tools', 
    path: '/disposable-email',
    howToUse: 'Protect your service from spam. Enter an email address to find out if it belongs to a known disposable or temporary email provider often used for fake accounts.'
  },
  { 
    id: 'ssl-checker', 
    title: 'SSL Checker', 
    description: 'Verify SSL certificates.', 
    icon: '🔒', 
    category: 'Security Tools', 
    path: '/ssl-checker',
    howToUse: 'Ensure your website is secure. Enter your URL, and we\'ll check the validity and expiration date of your SSL certificate, ensuring your users\' data is protected.'
  },
  { 
    id: 'hmac-gen', 
    title: 'HMAC Generator', 
    description: 'Generate HMAC hashes.', 
    icon: '🔑', 
    category: 'Security Tools', 
    path: '/hmac-gen',
    howToUse: 'Generate a Hash-based Message Authentication Code. Use a secret key and a message to create a unique hash that verifies both the data integrity and authenticity of the message.'
  },
  { 
    id: 'file-hash', 
    title: 'File Hash Checker', 
    description: 'Verify file integrity.', 
    icon: '📄', 
    category: 'Security Tools', 
    path: '/file-hash',
    howToUse: 'Ensure your downloads haven\'t been tampered with. Upload a file or paste its hash to compare against the official checksum provided by the developer.'
  },
  { 
    id: 'encryption-tool', 
    title: 'AES Encryptor', 
    description: 'Encrypt/Decrypt text securely.', 
    icon: '🔐', 
    category: 'Security Tools', 
    path: '/encryption-tool',
    howToUse: 'Securely encrypt your sensitive text using the AES algorithm. You can set a private key to lock your data and then use the same key to decrypt it later.'
  },

  // Fun & Viral Tools
  { 
    id: 'spin-wheel', 
    title: 'Spin Wheel Picker', 
    description: 'Make decisions randomly.', 
    icon: '🎡', 
    category: 'Fun Tools', 
    path: '/spin-wheel',
    howToUse: 'The fun way to settle a debate. Enter your options (like "Pizza" or "Burger") and spin the virtual wheel to make a completely random decision.'
  },
  { 
    id: 'random-name', 
    title: 'Random Name Picker', 
    description: 'Pick a name from a list.', 
    icon: '👤', 
    category: 'Fun Tools', 
    path: '/random-name',
    howToUse: 'Choose a lucky winner! Paste a list of names, and our tool will pick one at random. This is perfect for giveaways, contests, or choosing a classroom volunteer.'
  },
  { 
    id: 'dice-roller', 
    title: 'Dice Roller', 
    description: 'Roll virtual dice.', 
    icon: '🎲', 
    category: 'Fun Tools', 
    path: '/dice-roller',
    howToUse: 'Forgot your board game dice? Use our virtual dice roller. Click the button to get a random number between 1 and 6 with a realistic "roll" experience.'
  },
  { 
    id: 'coin-flip', 
    title: 'Coin Flip', 
    description: 'Heads or Tails.', 
    icon: '🪙', 
    category: 'Fun Tools', 
    path: '/coin-flip',
    howToUse: 'A simple 50/50 decision tool. Flip a virtual coin to choose between two options—Heads or Tails—instantly.'
  },
  { 
    id: 'typing-test', 
    title: 'Typing Speed Test', 
    description: 'Check your WPM.', 
    icon: '⌨️', 
    category: 'Fun Tools', 
    path: '/typing-test',
    howToUse: 'Test your typing skills. Type the displayed text as fast and accurately as you can to see your Words Per Minute (WPM) and accuracy score.'
  },
  { 
    id: 'cps-test', 
    title: 'CPS Test', 
    description: 'Clicks per second test.', 
    icon: '鼠标', 
    category: 'Fun Tools', 
    path: '/cps-test',
    howToUse: 'How fast can you click? This tool measures your Clicks Per Second (CPS). It\'s a popular challenge for gamers looking to improve their reaction speed.'
  },
  { 
    id: 'reaction-test', 
    title: 'Reaction Time Test', 
    description: 'Test your reflexes.', 
    icon: '⚡', 
    category: 'Fun Tools', 
    path: '/reaction-test',
    howToUse: 'Click as soon as the screen changes color! We\'ll measure your reaction time in milliseconds and show you how you compare to average human reflexes.'
  },
  { 
    id: 'fake-chat', 
    title: 'Fake Chat Generator', 
    description: 'Create mock conversations.', 
    icon: '💬', 
    category: 'Fun Tools', 
    path: '/fake-chat',
    howToUse: 'Create realistic-looking mock screenshots of chat apps. You can customize the names, messages, and timestamps—great for memes and storytelling.'
  },
  { 
    id: 'glitch-text', 
    title: 'Glitch Text Gen', 
    description: 'Zalgo / Glitchy text.', 
    icon: '░', 
    category: 'Fun Tools', 
    path: '/glitch-text',
    howToUse: 'Turn your text into a corrupted-looking "Zalgo" format. It adds various Unicode characters around your text to create a scary or glitchy aesthetic.'
  },
  { 
    id: 'ascii-art', 
    title: 'ASCII Art Gen', 
    description: 'Convert text to ASCII art.', 
    icon: '🎨', 
    category: 'Fun Tools', 
    path: '/ascii-art',
    howToUse: 'Convert your text into large ASCII art banners using different character styles. Perfect for adding a retro flair to your code comments or terminal outputs.'
  },
  { 
    id: 'length-conv', 
    title: 'Length Converter', 
    description: 'Convert between meters, feet, inches, etc.', 
    icon: '📏', 
    category: 'Calculators', 
    path: '/length-conv',
    howToUse: 'Quickly switch between metric and imperial length units. Perfect for international projects and construction planning.'
  },
  { 
    id: 'weight-conv', 
    title: 'Weight Converter', 
    description: 'Convert between kg, lbs, oz, etc.', 
    icon: '⚖️', 
    category: 'Calculators', 
    path: '/weight-conv',
    howToUse: 'Convert weights instantly. Essential for shipping, cooking, and fitness tracking.'
  },
  { 
    id: 'temp-conv', 
    title: 'Temp Converter', 
    description: 'Celsius to Fahrenheit and Kelvin.', 
    icon: '🌡️', 
    category: 'Calculators', 
    path: '/temp-conv',
    howToUse: 'Check the temperature in any unit. Useful for scientific calculations and travel planning.'
  },
  { 
    id: 'data-conv', 
    title: 'Data Converter', 
    description: 'Bytes, KB, MB, GB, TB.', 
    icon: '💾', 
    category: 'Calculators', 
    path: '/data-conv',
    howToUse: 'Calculate storage requirements easily. Convert between all standard digital data units.'
  },
  { 
    id: 'base64-img', 
    title: 'Base64 to Image', 
    description: 'Convert Base64 string to image file.', 
    icon: '🖼️', 
    category: 'Developer Tools', 
    path: '/base64-img',
    howToUse: 'Decode Base64 strings into viewable images. Great for debugging embedded images in CSS or HTML.'
  },
  { 
    id: 'img-base64', 
    title: 'Image to Base64', 
    description: 'Convert image file to Base64 string.', 
    icon: '🔗', 
    category: 'Developer Tools', 
    path: '/img-base64',
    howToUse: 'Turn any image into a text string you can embed directly in your code. Useful for small icons and optimizing network requests.'
  },
  { 
    id: 'json-csv', 
    title: 'JSON to CSV', 
    description: 'Convert JSON data to CSV format.', 
    icon: '📄', 
    category: 'Developer Tools', 
    path: '/json-csv',
    howToUse: 'Export your JSON data to spreadsheet-friendly CSV format for analysis in Excel or Google Sheets.'
  },
  { 
    id: 'hex-dec', 
    title: 'Hex to Decimal', 
    description: 'Convert hex numbers to decimal.', 
    icon: '🔢', 
    category: 'Developer Tools', 
    path: '/hex-dec',
    howToUse: 'Essential for low-level programming and debugging memory addresses or color codes.'
  },
  { 
    id: 'dec-hex', 
    title: 'Decimal to Hex', 
    description: 'Convert decimal numbers to hex.', 
    icon: '🔢', 
    category: 'Developer Tools', 
    path: '/dec-hex',
    howToUse: 'Convert standard numbers into hexadecimal format. Vital for web development and hardware programming.'
  },
  { 
    id: 'bin-text', 
    title: 'Binary to Text', 
    description: 'Decode binary (0s and 1s) to text.', 
    icon: '0️⃣1️⃣', 
    category: 'Text Tools', 
    path: '/bin-text',
    howToUse: 'Read secret binary messages. Paste your binary code, and we will translate it into readable English characters.'
  },
  { 
    id: 'text-bin', 
    title: 'Text to Binary', 
    description: 'Encode text into binary format.', 
    icon: '0️⃣1️⃣', 
    category: 'Text Tools', 
    path: '/text-bin',
    howToUse: 'Convert any sentence into a string of 0s and 1s. A fun way to learn how computers store information.'
  },
  { 
    id: 'morse-codec', 
    title: 'Morse Code Codec', 
    description: 'Translate text to/from Morse code.', 
    icon: '📡', 
    category: 'Text Tools', 
    path: '/morse-codec',
    howToUse: 'Learn or translate Morse code. Type your message and see the dots and dashes, or vice versa.'
  },
  { 
    id: 'xml-json', 
    title: 'XML to JSON', 
    description: 'Convert XML structure to JSON.', 
    icon: '🔄', 
    category: 'Developer Tools', 
    path: '/xml-json',
    howToUse: 'Modernize your data format. Convert legacy XML data into modern, web-ready JSON objects.'
  },
  { 
    id: 'json-xml', 
    title: 'JSON to XML', 
    description: 'Convert JSON objects to XML.', 
    icon: '🔄', 
    category: 'Developer Tools', 
    path: '/json-xml',
    howToUse: 'Format your JSON data for systems that require XML input. Maintains the nested structure accurately.'
  },
  { 
    id: 'sql-json', 
    title: 'SQL to JSON', 
    description: 'Convert SQL export to JSON.', 
    icon: '💾', 
    category: 'Developer Tools', 
    path: '/sql-json',
    howToUse: 'Convert your database rows (SQL INSERTs or SELECT exports) into a clean JSON array.'
  },
  { 
    id: 'json-sql', 
    title: 'JSON to SQL', 
    description: 'Convert JSON to SQL INSERTs.', 
    icon: '💾', 
    category: 'Developer Tools', 
    path: '/json-sql',
    howToUse: 'Generate SQL INSERT statements from a JSON array. Makes importing data into your database a breeze.'
  },
  { 
    id: 'text-speech', 
    title: 'Text to Speech', 
    description: 'Convert text to spoken audio.', 
    icon: '🔊', 
    category: 'AI Tools', 
    path: '/text-speech',
    isComingSoon: true,
    howToUse: 'Listen to your text instead of reading it. Our AI-powered voices provide natural-sounding narration for any content.'
  },
  { 
    id: 'speech-text', 
    title: 'Speech to Text', 
    description: 'Transcribe audio to text.', 
    icon: '🎙️', 
    category: 'AI Tools', 
    path: '/speech-text',
    isComingSoon: true,
    howToUse: 'Automatic transcription for your voice recordings. Save time on manual typing with our high-accuracy AI speech recognition.'
  },
  { 
    id: 'audio-conv', 
    title: 'Audio Converter', 
    description: 'MP3, WAV, OGG, etc.', 
    icon: '🎵', 
    category: 'Fun Tools', 
    path: '/audio-conv',
    isComingSoon: true,
    howToUse: 'Change your audio file formats instantly. Optimize file size or ensure compatibility with different players.'
  },
  { 
    id: 'vid-gif', 
    title: 'Video to GIF', 
    description: 'Create GIFs from video clips.', 
    icon: '📹', 
    category: 'Fun Tools', 
    path: '/vid-gif',
    isComingSoon: true,
    howToUse: 'Make your own GIFs from short video clips. Perfect for sharing reactions on social media.'
  },
  { 
    id: 'favicon-fetcher', 
    title: 'Favicon Fetcher', 
    description: 'Get the favicon of any website.', 
    icon: '🌐', 
    category: 'Developer Tools', 
    path: '/favicon-fetcher',
    howToUse: 'Enter a URL to see and download the official favicon of any website in various sizes.'
  },
  { 
    id: 'html-minifier', 
    title: 'HTML Minifier', 
    description: 'Deeply compress HTML files.', 
    icon: '📉', 
    category: 'Developer Tools', 
    path: '/html-minifier',
    howToUse: 'Advanced HTML compression that removes comments, unnecessary quotes, and optional tags for maximum speed.'
  },
  { 
    id: 'js-minifier', 
    title: 'JS Minifier', 
    description: 'Compress JavaScript code.', 
    icon: '📉', 
    category: 'Developer Tools', 
    path: '/js-minifier',
    howToUse: 'Shrink your JS code to the smallest possible footprint. Removes all redundant characters while preserving logic.'
  },
  { 
    id: 'css-minifier', 
    title: 'CSS Minifier', 
    description: 'Compress CSS stylesheets.', 
    icon: '📉', 
    category: 'Developer Tools', 
    path: '/css-minifier',
    howToUse: 'Professional CSS minification to reduce your page load times and improve lighthouse scores.'
  }
];
