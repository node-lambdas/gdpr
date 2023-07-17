
function getConsent(color, bgColor, url) {
  const uid = 'u4yrtkjyt6i5uy';
  return `<div id="${uid}" role="dialog" aria-live="polite" aria-label="cookie consent"
style="display:none;position:absolute;z-index:99999999;bottom:0;margin:1rem;border-radius:0.25rem;background-color:${bgColor};color:${color}">
<p>We use cookies to provide our services and for analytics and marketing.
To find out more about our use of cookies, please see our ${url ? '<a href="' + url + '">Privacy Policy</a>' : 'Privacy Policy'}.
By continuing to browse our website, you agree to our use of cookies.
<div style="text-align:center;margin-top:1rem">
<button style="padding:0.5rem 1rem;border-radius:0.25rem;font-weight:bold;border:none;color:${bgColor};background:${color}"
onclick="localStorage.__gdpr_dismiss=1;document.getElementById('${uid}').remove()">Got it!</button></div>
</div>
<script>
localStorage.__gdpr_dismiss || (document.getElementById('${uid}').style.display='block')
</script>`;
}
export default {
  version: 2,
  actions: {
    getConsent: {
      output: 'text',
      default: true,
      handler(input, output) {
        const { bgColor = "#f3f4f5", color = "#333", url = "" } = input.options || {};
        output.send(getConsent(color, bgColor, url));
      },
    },
  },
};