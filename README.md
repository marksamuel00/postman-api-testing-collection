# Postman API Testing Collection

This repository houses **Postman Collections** and environment files for automated API validation.

## 🚀 Setup
1. **Manual Import:** Open Postman and import the `.json` collection and environment files.
2. **CLI Setup:** To run via terminal, install Newman:
   `npm install -g newman`

## 🏃 Running Tests
Replace the filenames with your specific exports:
`newman run your_collection.json -e your_environment.json`

## 📊 Test Reporting
To generate a professional HTML report, use the Newman HTML extra reporter:
1. `npm install -g newman-reporter-htmlextra`
2. `newman run your_collection.json -r htmlextra`
