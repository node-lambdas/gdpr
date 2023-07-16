# GDPR

## Usage

Add this snippet to your page

```javascript
import { getConsent } from 'https://gdpr.jsfn.run/index.js'
async f() { document.body.innerHTML += await getConsent('', { color:'black', bgColor:'white' }); }
f();
```