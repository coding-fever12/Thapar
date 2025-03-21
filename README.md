# AI Phishing Detector

A powerful phishing detection system that combines machine learning with real-time threat intelligence from Google Safe Browsing and VirusTotal APIs.

## Features

- Real-time URL scanning using Google Safe Browsing API
- Malware detection using VirusTotal API
- Machine learning-based email phishing detection
- Browser extension for real-time protection
- RESTful API for integration with other systems
- Rate limiting and API key protection
- Comprehensive logging and monitoring

## Project Structure

```
ai-phishing-detector/
├── src/                      # Source code
│   ├── config/              # Configuration files
│   │   ├── logger.js        # Logging configuration
│   │   └── security.js      # Security settings
│   ├── controllers/         # Route controllers
│   ├── middleware/          # Express middleware
│   │   └── errorHandler.js  # Error handling
│   ├── models/             # Data models
│   ├── routes/             # API routes
│   │   └── threat.js       # Threat scanning endpoints
│   ├── services/           # Business logic
│   ├── utils/              # Utility functions
│   │   ├── rate_limiter.js # API rate limiting
│   │   └── threat_scanner.js # Threat scanning logic
│   └── app.js              # Main application file
├── extension/              # Browser extension
│   ├── js/                # Extension JavaScript
│   ├── css/               # Extension styles
│   └── images/            # Extension images
├── training/              # ML model training
│   └── train_email_model.py # Email model training
├── models/                # Trained ML models
├── data/                  # Training data
├── logs/                  # Application logs
├── tests/                 # Test files
├── docs/                  # Documentation
├── .env                   # Environment variables
├── .env.example          # Example environment variables
├── package.json          # Node.js dependencies
└── requirements.txt      # Python dependencies
```

## Prerequisites

- Node.js >= 18.0.0
- Python >= 3.8
- Google Safe Browsing API key
- VirusTotal API key
- TensorFlow >= 2.19.0

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-phishing-detector.git
cd ai-phishing-detector
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Install Python dependencies:
```bash
pip install -r requirements.txt
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your API keys and configuration
```

## Configuration

Update the `.env` file with your API keys and settings:

```env
# API Keys
SAFE_BROWSING_API_KEY=your_safe_browsing_api_key_here
VIRUSTOTAL_API_KEY=your_virustotal_api_key_here

# Server Configuration
PORT=3000
NODE_ENV=development

# Security
CORS_ORIGIN=http://localhost:3000
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Logging
LOG_LEVEL=info
LOG_FILE=logs/app.log
```

## Usage

1. Start the server:
```bash
npm start
```

2. Train the email model:
```bash
python training/train_email_model.py
```

3. Load the browser extension:
   - Open Chrome/Edge
   - Go to Extensions (chrome://extensions)
   - Enable Developer mode
   - Click "Load unpacked"
   - Select the `extension` directory

## API Endpoints

### URL Scanning
```http
POST /api/threat/scan-url
Content-Type: application/json
X-API-Key: your_api_key

{
    "url": "https://example.com"
}
```

### Email Scanning
```http
POST /api/threat/scan-email
Content-Type: application/json
X-API-Key: your_api_key

{
    "email": {
        "content": "email content here",
        "subject": "email subject",
        "from": "sender@example.com"
    }
}
```

### Usage Statistics
```http
GET /api/threat/stats
X-API-Key: your_api_key
```

## Development

1. Run in development mode:
```bash
npm run dev
```

2. Run tests:
```bash
npm test
```

3. Format code:
```bash
npm run format
```

## Security Features

- API key authentication
- Rate limiting
- CORS protection
- Input validation
- Error handling
- Secure logging
- HTTPS support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Safe Browsing API
- VirusTotal API
- TensorFlow
- Express.js
- Winston Logger

## Support

For support, please open an issue in the GitHub repository or contact the maintainers. 