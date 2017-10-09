export const COUNTRY_INFO = `
  [{
    "name": "Spain",
    "code": "ES",
    "flag": "es",
    "sections": [{
      "name": "payee",
      "fields": [{
        "id": "payee-name",
        "title": "Payee's full name",
        "tooltip": "Spain payee's full name placeholder",
        "type": "text",
        "maxlength": 30,
        "required": true,
        "regex": [
          "",
          "",
          ""
        ]
      }, {
        "id": "payee-address",
        "title": "Payee's address",
        "tooltip": "Spain payee's address placeholder",
        "type": "text",
        "maxlength": 50
      }]
    }, {
      "name": "payment",
      "fields": [{
        "id": "iban",
        "title": "IBAN",
        "tooltip": "Spain IBAN placeholder",
        "type": "text",
        "maxlength": 30,
        "required": true
      }]
    }]
  }, {
    "name": "India",
    "code": "IN",
    "flag": "in",
    "sections": [{
      "name": "payee",
      "fields": [{
        "id": "payee-name",
        "title": "Payee's full name",
        "tooltip": "India payee's full name placeholder",
        "type": "text",
        "maxlength": 30,
        "required": true
      }, {
        "id": "payee-address",
        "title": "Payee's address",
        "tooltip": "India payee's address placeholder",
        "type": "text",
        "maxlength": 50
      }]
    }, {
      "name": "payment",
      "fields": [{
        "id": "ifsc",
        "title": "IFSC Code",
        "tooltip": "India IFSC placeholder",
        "type": "text",
        "maxlength": 30,
        "required": true
      }, {
        "id": "swift",
        "title": "SWIFT Code",
        "tooltip": "India SWIFT placeholder",
        "type": "text",
        "maxlength": 30,
        "required": true
      }]
    }]
  }, {
    "name": "United States",
    "code": "US",
    "flag": "us",
    "sections": [{
      "name": "payee",
      "fields": [{
        "id": "payee-name",
        "title": "Payee's full name",
        "tooltip": "United States payee's full name placeholder",
        "type": "text",
        "maxlength": 30,
        "required": true
      }, {
        "id": "payee-address",
        "title": "Payee's address",
        "tooltip": "United States payee's address placeholder",
        "type": "text",
        "maxlength": 50,
        "required": true
      }]
    }, {
      "name": "payment",
      "fields": [{
        "id": "transit-number",
        "title": "Transit Number",
        "tooltip": "United States Transit Number placeholder",
        "type": "text",
        "maxlength": 30,
        "required": true
      }, {
        "id": "account-number",
        "title": "Account Number",
        "tooltip": "United States Account Number placeholder",
        "type": "text",
        "maxlength": 30,
        "required": true
      }]
    }]
  }, {
    "name": "United Kingdom",
    "code": "UK",
    "flag": "gb",
    "sections": [{
      "name": "payee",
      "fields": [{
        "id": "payee-name",
        "title": "Payee's full name",
        "tooltip": "United Kingdom payee's full name placeholder",
        "type": "text",
        "maxlength": 30,
        "required": true
      }, {
        "id": "payee-address",
        "title": "Payee's address",
        "tooltip": "United Kingdom payee's address placeholder",
        "type": "text",
        "maxlength": 50,
        "required": true
      }]
    }, {
      "name": "payment",
      "fields": [{
        "id": "sort-code",
        "title": "Sort Code",
        "tooltip": "United Kingdom Sort Code placeholder",
        "type": "text",
        "maxlength": 30,
        "required": true
      }, {
        "id": "account-number",
        "title": "Account Number",
        "tooltip": "United Kingdom Account Number placeholder",
        "type": "text",
        "maxlength": 30,
        "required": true
      }]
    }]
  }]
`;
