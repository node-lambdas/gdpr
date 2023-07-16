
function getConsent(color, bgColor) {
  const uid = 'u4yrtkjyt6i5uy';
  return `<div id="${uid}" role="dialog" aria-live="polite" aria-label="cookie consent"
style="display:none;position:absolute;z-index:99999999;right:20px;bottom:20px;background-color:${bgColor};color:${color}">
<p>We use cookies to provide our services and for analytics and marketing.
To find out more about our use of cookies, please see our Privacy Policy.
By continuing to browse our website, you agree to our use of cookies.
<div style="text-align:right">
<button class="padding:0.5rem;margin-top:1rem;border-radius:0.25rem;border:1px solid ${color};color:${color};background:${bgColor}"
onclick="localStorage.__gdpr_dismiss=1;document.getElementById('${uid}').remove()">Got it!</button></div>
</div>
<script>
localStorage.__gdpr_dismiss || document.getElementById('${uid}').style.display='block'
</script>`;
}
export default {
  version: 2,
  actions: {
    getConsent: {
      default: true,
      handler(input, output) {
        const { bgColor = "#f3f4f5", color = "black" } = input.options || {};
        output.send(getConsent(color, bgColor));
      },
    },
  },
};
