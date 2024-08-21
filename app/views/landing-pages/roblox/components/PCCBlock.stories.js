import PCCBlock from './PCCBlock.vue'

export default {
  title: 'Pages/Roblox/Components/PCCBlock',
  component: PCCBlock
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PCCBlock },
  template: '<PCCBlock v-bind="$props" :block="block" />'
})

const codeVector = `
<svg width="76" height="58" viewBox="0 0 76 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 7.3053C0.0436794 7.22064 0.107015 7.14033 0.124486 7.05133C0.926004 3.30261 3.80885 0.964813 7.67884 0.962643C24.8951 0.958302 42.1135 0.962643 59.3298 0.962643C60.0221 0.962643 60.7144 0.95179 61.4067 0.966984C62.1536 0.984349 62.6341 1.42499 62.6385 2.06099C62.6428 2.69917 62.1602 3.14198 61.422 3.17454C61.1992 3.18322 60.9765 3.17454 60.7537 3.17454C43.0657 3.17454 25.3799 3.17454 7.69195 3.17454C4.73267 3.17454 2.41547 5.16503 2.25386 7.92394C2.16431 9.44339 2.22983 10.9715 2.22547 12.4953C2.22547 13.1313 2.22547 13.7673 2.22547 14.4533H73.7745C73.7745 12.8123 73.7833 11.1973 73.7702 9.58232C73.7636 8.87034 73.7964 8.14534 73.6719 7.4529C73.2176 4.92192 71.145 3.20927 68.5679 3.17237C67.9499 3.16369 67.3296 3.19625 66.7138 3.155C66.0848 3.11376 65.7004 2.72304 65.672 2.10875C65.6436 1.49228 65.9974 1.02125 66.6199 0.98652C68.5811 0.873646 70.5313 0.888841 72.296 1.95897C74.2157 3.12245 75.4169 4.78083 75.8646 6.97536C75.8886 7.08823 75.9541 7.19242 76 7.30096V51.565C75.8384 52.1011 75.7074 52.646 75.5108 53.1691C74.4603 55.9605 71.8155 57.8273 68.7951 57.9228C68.5963 57.9293 68.3998 57.9358 68.201 57.9358C48.0408 57.9358 27.8828 57.9315 7.72252 57.9402C4.93577 57.9402 2.7387 56.8505 1.20337 54.5409C0.978419 54.2045 0.875772 53.6227 1.00463 53.2537C1.31038 52.3746 2.40674 52.3985 2.98986 53.2733C3.81103 54.4997 4.92049 55.3007 6.36627 55.6067C6.82054 55.7022 7.29883 55.7196 7.7662 55.7196C27.9002 55.7239 48.0364 55.7261 68.1705 55.7218C71.6233 55.7218 73.7724 53.5772 73.7724 50.154C73.7724 39.2877 73.7724 28.4193 73.7724 17.553V16.7715H2.22765V17.6311C2.22765 27.6378 2.22765 37.6446 2.22765 47.6513C2.22765 47.8228 2.2211 47.9964 2.22765 48.1679C2.25823 48.7865 2.19489 49.3704 1.51786 49.6418C0.840829 49.9109 0.404035 49.5159 0 49.0579C0 35.144 0 21.2235 0 7.3053Z" fill="#4DECF0"/>
<path d="M64.7525 35.4869C62.8525 33.6115 61.101 31.8836 59.3516 30.1536C59.1594 29.9626 58.9519 29.7824 58.7947 29.5654C58.4256 29.0574 58.4496 28.5408 58.9017 28.1045C59.3298 27.6921 59.8321 27.6964 60.3235 28.0199C60.4654 28.1132 60.5833 28.2456 60.7057 28.3672C62.7149 30.362 64.7263 32.3568 66.7312 34.3582C67.5349 35.1613 67.5371 35.6801 66.7378 36.4767C64.7329 38.4759 62.7215 40.4707 60.7122 42.4677C60.6598 42.5198 60.6096 42.5741 60.555 42.624C59.9784 43.1472 59.2992 43.1754 58.8493 42.6935C58.4037 42.2181 58.4365 41.6103 58.9847 41.059C60.6532 39.3832 62.3327 37.7183 64.0144 36.0578C64.2066 35.869 64.4424 35.7257 64.7525 35.4891V35.4869Z" fill="#4DECF0"/>
<path d="M51.616 45.4198C50.8341 45.422 50.358 44.7686 50.5808 43.9351C51.4478 40.6856 52.3301 37.4383 53.2081 34.191C53.8807 31.7013 54.5512 29.2116 55.237 26.7283C55.3331 26.381 55.4357 25.9122 55.6913 25.7624C56.0407 25.5583 56.5867 25.4607 56.9645 25.58C57.4712 25.7363 57.6546 26.253 57.5105 26.8021C57.0366 28.5821 56.5605 30.362 56.08 32.1398C54.9902 36.1685 53.8938 40.1972 52.804 44.226C52.6337 44.8533 52.4044 45.4068 51.6182 45.422L51.616 45.4198Z" fill="#4DECF0"/>
<path d="M42.9609 35.4891C43.354 35.73 43.6248 35.8342 43.8148 36.0187C45.4856 37.6576 47.1432 39.3073 48.7986 40.9613C49.4036 41.5648 49.4757 42.229 49.0127 42.7065C48.5409 43.1906 47.8552 43.1406 47.2589 42.5502C45.1754 40.4881 43.0963 38.4238 41.0237 36.3508C40.351 35.6801 40.3641 35.1396 41.0543 34.4515C43.1116 32.3981 45.1733 30.349 47.2371 28.3042C47.8486 27.6986 48.5082 27.6335 48.9908 28.1067C49.4757 28.5799 49.4211 29.2506 48.8205 29.8519C47.1672 31.5059 45.5052 33.1556 43.841 34.7988C43.6488 34.9877 43.4173 35.1353 42.9609 35.4891Z" fill="#4DECF0"/>
<path d="M22.425 44.4604C24.823 44.4604 27.221 44.4582 29.619 44.4604C30.4904 44.4604 31.0036 44.8707 31.008 45.5414C31.0124 46.2143 30.4948 46.6658 29.6387 46.668C24.7924 46.6766 19.9484 46.6766 15.1022 46.668C14.2329 46.668 13.7546 46.2295 13.7699 45.524C13.783 44.8186 14.2395 44.4626 15.1568 44.4604C17.5788 44.4561 20.003 44.4604 22.425 44.4604Z" fill="#4DECF0"/>
<path d="M14.6261 29.255C16.8996 29.255 19.1731 29.2463 21.4444 29.2593C22.3748 29.2636 22.9186 29.8758 22.6958 30.6442C22.508 31.2976 21.9904 31.469 21.3702 31.469C19.7649 31.4647 18.1575 31.469 16.5523 31.469C13.7852 31.469 11.0181 31.469 8.25104 31.469C8.07851 31.469 7.90379 31.4755 7.73126 31.4669C6.96687 31.4235 6.51915 31.011 6.51697 30.3555C6.51697 29.6956 6.95595 29.2702 7.73126 29.2637C9.48499 29.2463 11.2387 29.2571 12.9946 29.255C13.5384 29.255 14.0822 29.255 14.6261 29.255Z" fill="#4DECF0"/>
<path d="M22.8596 26.3767C20.6363 26.3767 18.4109 26.3789 16.1876 26.3767C15.255 26.3767 14.7462 25.9686 14.7615 25.2631C14.7767 24.5946 15.29 24.1713 16.1592 24.1691C20.656 24.1626 25.155 24.1648 29.6518 24.167C30.2393 24.167 30.8093 24.3319 30.9097 24.9549C30.9687 25.3217 30.7962 25.8145 30.5559 26.114C30.39 26.3202 29.9335 26.3637 29.6059 26.3658C27.3564 26.3854 25.1091 26.3767 22.8596 26.3767Z" fill="#4DECF0"/>
<path d="M24.0259 36.5245C22.1739 36.5245 20.3197 36.5288 18.4677 36.5245C17.5307 36.5223 17.0372 36.1294 17.0437 35.4088C17.0503 34.6946 17.5438 34.3126 18.4873 34.3126C22.1935 34.3104 25.8997 34.3104 29.6059 34.3126C30.4773 34.3126 30.9905 34.7163 31.0102 35.3892C31.0299 36.0426 30.5232 36.5136 29.7369 36.5201C27.8347 36.5332 25.9325 36.5245 24.0302 36.5245H24.0259Z" fill="#4DECF0"/>
<path d="M12.8483 41.5821C11.1448 41.5821 9.43912 41.5951 7.73562 41.5778C6.95595 41.5691 6.51915 41.148 6.51915 40.4881C6.51915 39.8803 6.91445 39.4006 7.58056 39.3963C11.112 39.3702 14.6435 39.3702 18.175 39.3919C18.8739 39.3963 19.3107 39.902 19.291 40.5185C19.2714 41.1263 18.8193 41.5669 18.1073 41.5756C16.3536 41.5951 14.5998 41.5821 12.8461 41.5843L12.8483 41.5821Z" fill="#4DECF0"/>
<path d="M26.5571 41.5843C25.5219 41.5843 24.4845 41.5973 23.4493 41.58C22.6478 41.5669 22.1476 41.1263 22.1498 40.4794C22.152 39.8347 22.6587 39.3832 23.458 39.3789C25.5306 39.3659 27.601 39.3659 29.6736 39.3789C30.4882 39.3832 30.9862 39.8065 31.008 40.4534C31.0299 41.1241 30.5144 41.5713 29.6649 41.5821C28.6297 41.5951 27.5923 41.5843 26.5571 41.5843Z" fill="#4DECF0"/>
<path d="M10.3149 34.3126C11.1776 34.3126 12.0402 34.3017 12.9029 34.3148C13.6629 34.3256 14.1281 34.738 14.1478 35.3806C14.1696 36.06 13.6957 36.5136 12.9029 36.5202C11.1776 36.5332 9.45223 36.5353 7.72689 36.5202C6.9756 36.5136 6.51697 36.0708 6.51697 35.4196C6.51697 34.7706 6.97779 34.3321 7.72689 34.3191C8.58956 34.3017 9.45223 34.3148 10.3149 34.3148V34.3126Z" fill="#4DECF0"/>
<path d="M9.16831 26.3658C8.62668 26.3658 8.08506 26.3897 7.54562 26.3593C6.9494 26.3268 6.58686 25.9838 6.53007 25.3934C6.47111 24.7682 6.77905 24.2711 7.39493 24.2342C8.59393 24.1604 9.80166 24.1604 11.0007 24.2342C11.6165 24.2711 11.9332 24.7639 11.8742 25.389C11.8196 25.9773 11.4615 26.3268 10.8653 26.3593C10.3018 26.3897 9.73396 26.3658 9.16831 26.3658Z" fill="#4DECF0"/>
<path d="M28.2628 31.4604C27.7452 31.4604 27.2276 31.4886 26.7121 31.4538C26.0198 31.4039 25.5983 30.9351 25.6223 30.3099C25.6464 29.7065 26.0526 29.2875 26.7274 29.2702C27.7845 29.2419 28.8437 29.2441 29.9007 29.2702C30.5472 29.2875 30.9884 29.7477 31.0037 30.3229C31.0189 30.896 30.5909 31.3931 29.9575 31.4452C29.3962 31.4907 28.8262 31.4538 28.2606 31.4538C28.2606 31.4538 28.2606 31.456 28.2606 31.4582L28.2628 31.4604Z" fill="#4DECF0"/>
<path d="M8.70312 46.6636C8.33185 46.6636 7.95839 46.694 7.59148 46.6571C6.89698 46.5877 6.48639 46.1166 6.52134 45.485C6.5541 44.8837 6.97342 44.4865 7.65263 44.4669C8.34277 44.4452 9.03727 44.4474 9.72741 44.4669C10.4219 44.4865 10.8303 44.8642 10.8696 45.4719C10.9111 46.1058 10.5049 46.5811 9.81258 46.6528C9.44567 46.6918 9.07222 46.6593 8.70094 46.6593L8.70312 46.6636Z" fill="#4DECF0"/>
<path d="M25.8429 8.85081C25.8386 11.2559 23.8533 13.2138 21.44 13.1965C19.0661 13.1791 17.1005 11.219 17.0852 8.85949C17.0721 6.46308 19.0464 4.49647 21.4684 4.4943C23.9036 4.4943 25.8473 6.42835 25.8429 8.85298V8.85081ZM23.6153 8.84429C23.6196 7.67648 22.6871 6.7279 21.5165 6.70837C20.3109 6.68883 19.3172 7.64392 19.315 8.8291C19.3107 9.99691 20.3306 10.9998 21.5012 10.9802C22.6609 10.9629 23.6109 10.0013 23.6153 8.84429Z" fill="#4DECF0"/>
<path d="M12.4639 8.80956C13.0361 9.34137 13.4948 9.74946 13.9337 10.1792C14.768 10.9976 14.8838 11.575 14.3509 12.1285C13.8092 12.6885 13.1868 12.5648 12.3394 11.7161C11.9223 11.2971 11.5226 10.8652 10.933 10.2487C10.4044 10.8565 9.94799 11.4295 9.44131 11.9527C8.83198 12.5822 8.18989 12.6321 7.69413 12.1502C7.20492 11.6748 7.25515 11.0084 7.8623 10.4072C8.36679 9.90574 8.90187 9.43254 9.6051 8.77917C8.96302 8.22349 8.39082 7.76548 7.8623 7.25971C7.25515 6.67798 7.21147 5.98554 7.69631 5.51885C8.17897 5.05433 8.84508 5.12379 9.45223 5.72723C9.95454 6.22648 10.4394 6.74527 11.0509 7.3791C11.6253 6.75395 12.1058 6.19826 12.6234 5.67948C13.1934 5.11077 13.8507 5.06735 14.3203 5.52102C14.8313 6.01159 14.792 6.64325 14.1674 7.25754C13.6433 7.77416 13.082 8.25171 12.4617 8.81173L12.4639 8.80956Z" fill="#4DECF0"/>
</svg>
`
const createVector = `
<svg width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.6181 0.440186H3.61806C1.59957 0.440186 0 2.07694 0 4.05628V66.8241C0 68.8415 1.63765 70.4402 3.61806 70.4402H45.8923C46.8444 70.4402 47.7584 70.0595 48.444 69.3744C49.1295 68.6892 49.5103 67.7757 49.5103 66.8241V39.9508L68.2481 21.2232C69.3906 20.0813 70 18.5587 70 16.96C70 15.3613 69.3526 13.8388 68.2481 12.6968C67.1056 11.5549 65.5822 10.9459 63.9826 10.9459C62.383 10.9459 60.8596 11.593 59.7171 12.6968L49.5103 22.86V11.2885C49.5103 10.984 49.3961 10.6794 49.1676 10.4511L39.494 0.820827C39.3036 0.592442 38.9608 0.440186 38.6181 0.440186ZM3.61806 2.83823C2.93254 2.83823 2.39935 3.37113 2.39935 4.05628V66.8241C2.39935 67.5092 2.93254 68.0421 3.61806 68.0421H45.8923C46.197 68.0421 46.5016 67.928 46.7301 67.6996C46.9587 67.4712 47.0729 67.1667 47.0729 66.8622V42.3869L37.7802 51.6746C37.704 51.7507 37.5898 51.8268 37.5136 51.8649L22.8509 59.7442C17.062 65.4157 10.5114 63.6648 8.60718 59.2493C7.12187 55.7855 7.88357 51.1417 11.235 48.2107C13.6344 46.1172 15.5005 45.2036 18.0522 43.4146C20.9467 41.3592 23.1556 38.3521 23.4984 31.9193H23.0794C21.8988 31.9193 20.7563 31.4625 19.9184 30.587C19.0805 29.7496 18.5854 28.6077 18.5854 27.4277C18.5854 25.9051 18.0522 24.4206 17.0239 23.2787C15.4625 21.4897 14.5103 19.1678 14.5103 16.6555C14.5103 11.0601 19.0805 6.49239 24.7552 6.49239C30.4298 6.49239 35 11.0601 35 16.6555C35 19.2058 34.0479 21.5277 32.4864 23.3167C31.6105 24.3445 31.0773 25.6006 30.963 26.9328C30.963 27.1232 30.9249 27.618 30.9249 27.6941C30.8868 28.798 30.3917 29.8638 29.63 30.6251C28.7922 31.4625 27.6496 31.9573 26.469 31.9573H25.9358C25.555 39.6082 22.8509 43.0721 19.4614 45.432C16.9859 47.1449 15.1959 48.0204 12.8727 50.0378C10.3591 52.2455 9.74973 55.7094 10.8542 58.2977C12.2252 61.4951 16.9478 62.1422 21.1752 58.0313L29.0588 43.3766C29.0968 43.2624 29.173 43.1862 29.2492 43.1101L47.111 25.258C47.111 25.22 47.111 25.1819 47.111 25.1438V12.5065H38.6562C37.9706 12.5065 37.4374 11.9736 37.4374 11.2885V2.83823H3.61806ZM31.9532 60.7719H31.3439C30.6583 60.7719 30.1251 61.3048 30.1251 61.9899C30.1251 62.6751 30.6583 63.208 31.3439 63.208H31.9532V63.817C31.9532 64.5022 32.4864 65.0351 33.1719 65.0351C33.8575 65.0351 34.3906 64.5022 34.3906 63.817V63.208H35C35.6855 63.208 36.2187 62.6751 36.2187 61.9899C36.2187 61.3048 35.6855 60.7719 35 60.7719H34.3906V60.1629C34.3906 59.4777 33.8575 58.9448 33.1719 58.9448C32.4864 58.9448 31.9532 59.4777 31.9532 60.1629V60.7719ZM25.0979 55.7855L28.4113 53.9965C27.9924 53.3874 27.4973 52.8926 26.8879 52.4739L25.0979 55.7855ZM31.0773 44.6707L28.0305 50.3042C29.0207 50.9894 29.8585 51.8268 30.5441 52.8165L36.2187 49.7713L36.79 49.2004L33.3243 48.5152C32.8292 48.401 32.4864 48.0585 32.3721 47.5636L31.6866 44.0998L31.0773 44.6707ZM60.0599 22.5555L35.9902 46.612L38.8466 47.183L61.6213 24.4206C61.1262 23.7735 60.593 23.1645 60.0599 22.5555ZM56.4799 19.2819L33.7051 42.0443L34.2764 44.8991L58.346 20.8426C57.7367 20.3097 57.1273 19.7768 56.4799 19.2819ZM9.63548 34.2031H8.41676C7.73123 34.2031 7.19804 34.736 7.19804 35.4212C7.19804 36.1063 7.73123 36.6392 8.41676 36.6392H9.63548V37.8573C9.63548 38.5424 10.1687 39.0753 10.8542 39.0753C11.5397 39.0753 12.0729 38.5424 12.0729 37.8573V36.6392H13.2916C13.9772 36.6392 14.5103 36.1063 14.5103 35.4212C14.5103 34.736 13.9772 34.2031 13.2916 34.2031H12.0729V32.9851C12.0729 32.2999 11.5397 31.767 10.8542 31.767C10.1687 31.767 9.63548 32.2999 9.63548 32.9851V34.2031ZM25.9358 29.4831H26.4309C26.9641 29.4831 27.4973 29.2548 27.9162 28.8741C28.2971 28.4935 28.5256 27.9606 28.5256 27.3896L28.5637 26.7806C28.6779 24.9154 29.4396 23.0884 30.6583 21.68C31.839 20.3097 32.5626 18.5587 32.5626 16.6175C32.5626 12.3543 29.0588 8.89043 24.7171 8.89043C20.3754 8.89043 16.8716 12.3543 16.8716 16.6175C16.8716 18.5587 17.5952 20.3097 18.7758 21.68C20.1469 23.2787 20.9086 25.3342 20.9086 27.4277C20.9086 27.9606 21.1371 28.4935 21.518 28.9122C21.8988 29.2928 22.432 29.5212 23.0033 29.5212H23.4984V19.2058L22.2416 18.3684C21.6703 17.9878 21.518 17.2645 21.8988 16.6936C22.2797 16.1226 23.0033 15.9704 23.5745 16.351L24.7552 17.1123L25.9358 16.351C26.5071 15.9704 27.2307 16.1226 27.6115 16.6936C27.9924 17.2645 27.84 17.9878 27.2688 18.3684L25.9739 19.2439L25.9358 29.4831ZM63.3351 22.7077L66.5343 19.5103C67.2198 18.8252 67.6007 17.9116 67.6007 16.96C67.6007 16.0084 67.2198 15.0949 66.5343 14.4097C65.8488 13.7246 64.9347 13.3439 63.9826 13.3439C63.0305 13.3439 62.1164 13.7246 61.4309 14.4097L58.2318 17.6071C60.0979 19.0536 61.8498 20.7665 63.3351 22.7077ZM7.84549 8.89043H7.23613C6.5506 8.89043 6.01741 9.42333 6.01741 10.1085C6.01741 10.7936 6.5506 11.3265 7.23613 11.3265H7.84549V11.9356C7.84549 12.6207 8.37867 13.1536 9.0642 13.1536C9.74973 13.1536 10.2448 12.5827 10.2448 11.8975V11.2885H10.8542C11.5397 11.2885 12.0729 10.7556 12.0729 10.0704C12.0729 9.38527 11.5397 8.85237 10.8542 8.85237H10.2448V8.24334C10.2448 7.55818 9.71164 7.02529 9.02612 7.02529C8.34059 7.02529 7.8074 7.55818 7.8074 8.24334V8.89043H7.84549ZM45.3591 10.1085L39.7987 4.55112V10.1085H45.3591Z" fill="#4DECF0"/>
</svg>
`
export const Reverse = Template.bind({})
Reverse.args = {
  block:
  {
    reverse: true,
    image: {
      src: '/images/pages/roblox/pcc/pcc-code.png',
    },
    colTwo: {
      vector: codeVector,
      title: $.i18n.t('roblox.code_title'),
      description: $.i18n.t('roblox.code_desc'),
      images: [
        {
          src: '/images/pages/roblox/pcc/pcc-code-character.png',
          style: {
            width: '40%',
          }
        }, {
          src: '/images/pages/roblox/pcc/pcc-fish.png',
          style: {
            width: '32%',
            'margin-left': '-10%',
            'margin-bottom': '5%',
            transform: 'scaleX(-1)'
          }
        }
      ]
    }
  }
}
export const Default = Template.bind({})
Default.args = {
  block: {
    reverse: false,
    image: {
      src: '/images/pages/roblox/pcc/pcc-create.png',
    },
    colTwo: {
      vector: createVector,
      title: $.i18n.t('roblox.create_title'),
      description: $.i18n.t('roblox.create_desc'),
      images: [
        {
          src: '/images/pages/roblox/pcc/pcc-create-character.png',
          style: {
            width: '61%',
          }
        }
      ]
    }
  }
}
