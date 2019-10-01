
import React from 'react';

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <svg width="118" height="20" viewBox="0 0 118 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.11208 19.7497V13.3417L0 1.85232H2.06807L5.09802 10.7134L8.58488 0H10.4846L6.01182 13.4168V19.7497H4.11208Z" fill="#FF3029"/>
                    <path d="M16.0877 16.8962C16.0877 17.4969 16.1118 18.0476 16.1599 18.5482C16.208 19.0489 16.2561 19.4494 16.3042 19.7497H14.717C14.685 19.6162 14.6529 19.4577 14.6208 19.2741C14.5888 19.0906 14.5647 18.9154 14.5487 18.7485H14.4285C14.1559 19.0989 13.8433 19.3826 13.4906 19.5995C13.1379 19.8165 12.6971 19.9249 12.168 19.9249C11.3023 19.9249 10.6009 19.5995 10.0639 18.9487C9.52683 18.2979 9.2583 17.3467 9.2583 16.0952C9.2583 15.4277 9.34647 14.8186 9.52282 14.2679C9.69917 13.7172 9.97571 13.2541 10.3525 12.8786C10.7292 12.5032 11.2141 12.2111 11.8073 12.0025C12.4005 11.794 13.1219 11.6897 13.9716 11.6897H14.2361V10.9387C14.2361 10.1043 14.1038 9.50359 13.8393 9.13646C13.5748 8.76933 13.178 8.58577 12.649 8.58577C12.168 8.58577 11.7272 8.69841 11.3264 8.9237C10.9256 9.14898 10.5649 9.40346 10.2442 9.68715L9.88353 7.95999C10.1561 7.72637 10.5528 7.50109 11.0739 7.28415C11.5949 7.06721 12.16 6.95874 12.7692 6.95874C13.2982 6.95874 13.7712 7.02549 14.188 7.15899C14.6048 7.29249 14.9535 7.5136 15.2341 7.82232C15.5146 8.13104 15.727 8.53988 15.8713 9.04885C16.0156 9.55782 16.0877 10.1961 16.0877 10.9637V16.8962ZM14.2361 13.1665H14.0197C13.4425 13.1665 12.9696 13.2291 12.6009 13.3542C12.2321 13.4794 11.9436 13.663 11.7352 13.9049C11.5268 14.1469 11.3825 14.4348 11.3023 14.7685C11.2222 15.1023 11.1821 15.4694 11.1821 15.8699C11.1821 16.6041 11.2983 17.1882 11.5308 17.6221C11.7632 18.0559 12.1199 18.2729 12.6009 18.2729C12.9215 18.2729 13.2301 18.1769 13.5267 17.985C13.8233 17.7931 14.0597 17.5553 14.2361 17.2716V13.1665Z" fill="#2B2B2B"/>
                    <path d="M20.2959 19.7497H18.4202V7.10893H20.2959V8.2103H20.4161C20.4962 8.09349 20.6125 7.95999 20.7648 7.8098C20.9171 7.65962 21.0974 7.52195 21.3058 7.39679C21.5143 7.27163 21.7427 7.16733 21.9912 7.0839C22.2397 7.00046 22.5082 6.95874 22.7968 6.95874C24.416 6.95874 25.2255 7.90992 25.2255 9.81231V19.7497H23.3258V9.98753C23.3258 9.50359 23.2296 9.16984 23.0372 8.98627C22.8449 8.80271 22.5643 8.71093 22.1956 8.71093C21.7948 8.71093 21.4341 8.84026 21.1135 9.09892C20.7928 9.35757 20.5203 9.64543 20.2959 9.9625V19.7497Z" fill="#2B2B2B"/>
                    <path d="M30.7564 19.9249C29.554 19.9249 28.6402 19.4159 28.015 18.398C27.3898 17.38 27.0771 15.8865 27.0771 13.9174C27.0771 11.5811 27.4579 9.83728 28.2194 8.68584C28.9809 7.53439 29.9708 6.95868 31.1892 6.95868C31.4778 6.95868 31.7624 7.00457 32.0429 7.09635C32.3235 7.18813 32.5519 7.30077 32.7283 7.43427V1.85229H34.6039V19.7497H33.2092L33.0649 18.7484H32.9447C32.6721 19.0989 32.3635 19.3825 32.0189 19.5995C31.6742 19.8164 31.2534 19.9249 30.7564 19.9249ZM32.7283 9.16143C32.5359 8.96118 32.3315 8.81099 32.1151 8.71087C31.8986 8.61074 31.6301 8.56068 31.3095 8.56068C30.9247 8.56068 30.5921 8.69835 30.3115 8.9737C30.031 9.24904 29.7985 9.61616 29.6141 10.0751C29.4298 10.534 29.2935 11.0596 29.2053 11.652C29.1172 12.2445 29.0731 12.8661 29.0731 13.5169C29.0731 15.0021 29.2174 16.166 29.5059 17.0087C29.7945 17.8515 30.2835 18.2728 30.9728 18.2728C31.4377 18.2728 31.8064 18.1727 32.079 17.9724C32.3515 17.7722 32.5679 17.5469 32.7283 17.2966V9.16143Z" fill="#2B2B2B"/>
                    <path d="M43.4294 18.8987C43.0446 19.2157 42.6158 19.466 42.1429 19.6496C41.6699 19.8332 41.1289 19.9249 40.5197 19.9249C39.2692 19.9249 38.2833 19.4202 37.5619 18.4106C36.8404 17.401 36.4797 15.92 36.4797 13.9675C36.4797 12.9496 36.5479 12.0151 36.6841 11.164C36.8204 10.3129 37.0368 9.57451 37.3334 8.94873C37.63 8.32294 38.0107 7.83484 38.4757 7.4844C38.9406 7.13396 39.4937 6.95874 40.1349 6.95874C40.6319 6.95874 41.0888 7.06304 41.5056 7.27163C41.9224 7.48023 42.2751 7.81815 42.5637 8.2854C42.8523 8.75265 43.0767 9.35757 43.237 10.1002C43.3973 10.8428 43.4775 11.7481 43.4775 12.8161V13.8924H38.4276C38.4276 15.3275 38.6159 16.4122 38.9927 17.1465C39.3694 17.8807 39.9345 18.2479 40.688 18.2479C41.2171 18.2479 41.6739 18.1519 42.0587 17.96C42.4435 17.7681 42.7561 17.5804 42.9965 17.3968L43.4294 18.8987ZM40.1349 8.56074C39.5578 8.56074 39.149 8.89866 38.9085 9.57451C38.668 10.2504 38.5157 11.1556 38.4516 12.2904H41.5537C41.5537 11.7564 41.5297 11.26 41.4816 10.801C41.4335 10.3421 41.3573 9.94581 41.2531 9.61206C41.1489 9.27831 41.0046 9.01965 40.8203 8.83609C40.6359 8.65252 40.4075 8.56074 40.1349 8.56074Z" fill="#2B2B2B"/>
                    <path d="M51.6296 7.13403L49.3691 13.0414L51.8941 19.7498H49.9463L48.0706 14.5433L46.243 19.7498H44.3914L46.9163 13.2166L44.6318 7.13403H46.5797L48.1427 11.7148L49.802 7.13403H51.6296Z" fill="#2B2B2B"/>
                    <path d="M62.499 14.1927H58.435L57.3288 19.7497H56.2708L59.9259 1.85229H61.1764L64.8075 19.7497H63.6292L62.499 14.1927ZM58.6274 13.1664H62.3066L60.8157 5.78221C60.7355 5.39839 60.6714 4.98121 60.6233 4.53064C60.5752 4.08008 60.5432 3.70461 60.5271 3.40424H60.479C60.447 3.70461 60.3949 4.06756 60.3227 4.4931C60.2506 4.91863 60.1744 5.33999 60.0943 5.75718L58.6274 13.1664Z" fill="#2B2B2B"/>
                    <path d="M70.6034 8.28537C69.2405 8.33543 68.2785 9.23655 67.7173 10.9887V19.7497H66.5869V7.13393H67.6211L67.6692 9.66209H67.7414C67.8376 9.36172 67.9698 9.06134 68.1382 8.76097C68.3066 8.46059 68.511 8.18942 68.7515 7.94745C68.992 7.70548 69.2686 7.50523 69.5813 7.3467C69.8939 7.18817 70.2346 7.09221 70.6034 7.05884V8.28537Z" fill="#2B2B2B"/>
                    <path d="M75.4843 18.9737C75.869 18.9737 76.2097 18.9069 76.5063 18.7734C76.8029 18.6399 77.0554 18.4814 77.2638 18.2978C77.5043 18.1142 77.7127 17.889 77.889 17.622L78.2497 18.5982C78.0734 18.8652 77.8489 19.0988 77.5764 19.2991C77.352 19.4826 77.0594 19.6453 76.6987 19.7872C76.338 19.929 75.9252 19.9999 75.4602 19.9999C74.2418 19.9999 73.3 19.4284 72.6347 18.2853C71.9694 17.1422 71.6367 15.536 71.6367 13.4668C71.6367 11.3808 71.9654 9.76215 72.6227 8.6107C73.28 7.45926 74.2338 6.88354 75.4843 6.88354C76.1095 6.88354 76.6386 6.99618 77.0714 7.22147C77.5043 7.44675 77.857 7.72626 78.1295 8.06002L77.8169 9.31158C77.5443 8.92776 77.2157 8.59402 76.8309 8.31033C76.4462 8.02664 75.9973 7.8848 75.4843 7.8848C74.5545 7.8848 73.8691 8.36873 73.4282 9.33661C72.9874 10.3045 72.7669 11.6812 72.7669 13.4668C72.7669 15.2023 72.9834 16.554 73.4162 17.5218C73.8491 18.4897 74.5384 18.9737 75.4843 18.9737Z" fill="#2B2B2B"/>
                    <path d="M85.1514 19.7496C85.1033 19.5828 85.0512 19.37 84.995 19.1113C84.9389 18.8527 84.8949 18.4981 84.8628 18.0475C84.5742 18.6483 84.2135 19.1238 83.7807 19.4743C83.3478 19.8247 82.8268 19.9999 82.2176 19.9999C81.4 19.9999 80.7347 19.6787 80.2217 19.0362C79.7087 18.3938 79.4521 17.4968 79.4521 16.3454C79.4521 14.9937 79.7968 13.9716 80.4862 13.279C81.1755 12.5865 82.1775 12.2402 83.4921 12.2402H84.8147V10.6633C84.8147 9.69539 84.6464 8.99452 84.3097 8.56064C83.973 8.12676 83.468 7.90983 82.7947 7.90983C82.2817 7.90983 81.8008 8.03081 81.3519 8.27278C80.903 8.51475 80.5343 8.85267 80.2457 9.28655L79.9331 8.16014C80.1736 7.82639 80.5383 7.53019 81.0272 7.27153C81.5162 7.01287 82.1054 6.88354 82.7947 6.88354C83.8047 6.88354 84.5782 7.17975 85.1153 7.77216C85.6523 8.36457 85.9209 9.28654 85.9209 10.5381V17.4217C85.9209 17.8556 85.9449 18.2936 85.993 18.7359C86.0411 19.1781 86.1052 19.516 86.1854 19.7496H85.1514ZM82.4581 19.0488C83.0192 19.0488 83.4961 18.8068 83.8889 18.3228C84.2816 17.8389 84.5903 17.2548 84.8147 16.5707V13.0913H83.5161C82.5062 13.0913 81.7607 13.3416 81.2797 13.8422C80.7988 14.3429 80.5583 15.1439 80.5583 16.2452C80.5583 17.1464 80.7307 17.8389 81.0753 18.3228C81.42 18.8068 81.8809 19.0488 82.4581 19.0488Z" fill="#2B2B2B"/>
                    <path d="M92.3656 7.8848C91.7564 7.8848 91.2274 8.12676 90.7785 8.6107C90.3296 9.09464 89.9529 9.73711 89.6483 10.5381V19.7496H88.5181V7.13386H89.5521L89.6002 9.21145H89.6483C89.7284 8.97783 89.8527 8.72752 90.021 8.46052C90.1894 8.19351 90.3938 7.9432 90.6342 7.70958C90.8747 7.47595 91.1552 7.27987 91.4759 7.12134C91.7965 6.96281 92.1652 6.88354 92.5821 6.88354C93.3997 6.88354 94.0289 7.1422 94.4698 7.65951C94.9106 8.17683 95.1311 8.93611 95.1311 9.93736V19.7496H94.0008V10.0876C94.0008 8.61904 93.4558 7.8848 92.3656 7.8848Z" fill="#2B2B2B"/>
                    <path d="M100.349 18.9989C100.958 18.9989 101.483 18.7569 101.924 18.273C102.365 17.789 102.738 17.1466 103.042 16.3455V7.13403H104.173V19.7498H103.139L103.091 17.6722H103.042C102.962 17.9058 102.842 18.1561 102.682 18.4231C102.521 18.6901 102.325 18.9405 102.093 19.1741C101.86 19.4077 101.584 19.6038 101.263 19.7623C100.942 19.9209 100.574 20.0001 100.157 20.0001C99.3392 20.0001 98.714 19.7039 98.2811 19.1115C97.8483 18.5191 97.6318 17.6555 97.6318 16.5208V7.13403H98.7621V16.3706C98.7621 18.1228 99.2911 18.9989 100.349 18.9989Z" fill="#2B2B2B"/>
                    <path d="M107.996 19.7496H106.866V7.13386H107.9L107.948 9.03624H107.996C108.093 8.83599 108.217 8.6107 108.369 8.36039C108.521 8.11008 108.71 7.87645 108.934 7.65951C109.159 7.44258 109.419 7.25902 109.716 7.10883C110.012 6.95864 110.345 6.88354 110.714 6.88354C111.98 6.88354 112.726 7.57607 112.95 8.96114H112.974C113.054 8.79427 113.171 8.58985 113.323 8.34788C113.475 8.1059 113.668 7.87645 113.9 7.65951C114.132 7.44258 114.397 7.25902 114.694 7.10883C114.99 6.95864 115.323 6.88354 115.692 6.88354C116.413 6.88354 116.978 7.12551 117.387 7.60945C117.796 8.09339 118 8.81095 118 9.76214V19.7496H116.87V9.91233C116.87 9.21145 116.766 8.69832 116.557 8.37291C116.349 8.0475 116.004 7.8848 115.523 7.8848C114.962 7.8848 114.473 8.1059 114.056 8.54813C113.64 8.99035 113.287 9.55355 112.998 10.2377V19.7496H111.868V9.91233C111.868 9.21145 111.768 8.69832 111.567 8.37291C111.367 8.0475 111.026 7.8848 110.545 7.8848C109.984 7.8848 109.495 8.11008 109.079 8.56064C108.662 9.01121 108.301 9.61195 107.996 10.3629V19.7496Z" fill="#2B2B2B"/>
                </svg>
            </div>
            {/* /.header__logo */}
            <div className="header__menu header__menu_collapsed">
                <div className="header__pre-name">Repository</div>
                <div className="header__name">Arc</div>
            </div>
            {/* /.header__menu */}
        </header>
    );
  }