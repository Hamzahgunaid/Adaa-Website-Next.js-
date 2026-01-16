import React, { useState } from 'react';

// Adaa' Foundation Contact Page
// Brand Colors from Style Guide
const colors = {
  primaryNavy: '#1E3A5F',
  secondaryTeal: '#5BB5B0',
  accentLightBlue: '#7ECBD4',
  ctaOrange: '#F7931E',
  accentYellow: '#FFC72C',
  accentGreen: '#8DC63F',
  bodyText: '#4A4A4A',
  lightBg: '#F8FAFB',
  white: '#FFFFFF'
};

// Logo Icon
const AdaaLogoIcon = ({ size = 44 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129.2206 133.3814" width={size} height={size}>
    <path d="M124.2641,32.3462c26.0608,20.9457,29.4977,58.2052,7.6747,83.2182-19.0945,21.8871-51.2045,27.1489-76.3915,14.0879l-19.45,22.2944L17.0785,136.6614l19.45-22.2943L52.49,96.0733a36.3057,36.3057,0,0,0,8.1614,9.1876c15.8943,12.7765,39.5705,10.7649,52.8792-4.49a35.0411,35.0411,0,0,0-4.68-50.7561,38.825,38.825,0,0,0-42.0369-4.0373L47.5942,30.53a63.6,63.6,0,0,1,76.67,1.8159Z" transform="translate(-17.0785 -18.5653)" fill="#285994" fillRule="evenodd"/>
    <path d="M84.6425,53.8061A24.3972,24.3972,0,1,1,60.2453,78.2034,24.3981,24.3981,0,0,1,84.6425,53.8061Z" transform="translate(-17.0785 -18.5653)" fill="#4794af" fillRule="evenodd"/>
    <path d="M63.2926,57.4591a8.8164,8.8164,0,1,1-8.8162,8.8165,8.8157,8.8157,0,0,1,8.8162-8.8165Z" transform="translate(-17.0785 -18.5653)" fill="#f49e2b" fillRule="evenodd"/>
    <path d="M43.8956,69.8015a5.29,5.29,0,1,1-5.29,5.29,5.29,5.29,0,0,1,5.29-5.29Z" transform="translate(-17.0785 -18.5653)" fill="#fed401" fillRule="evenodd"/>
    <path d="M27.1418,76.8562a4.4067,4.4067,0,1,1-4.4074,4.4075,4.4061,4.4061,0,0,1,4.4074-4.4075Z" transform="translate(-17.0785 -18.5653)" fill="#63b66d" fillRule="evenodd"/>
    <path d="M27.1431,43.35a4.41,4.41,0,1,1-4.4087,4.41,4.41,4.41,0,0,1,4.4087-4.41Z" transform="translate(-17.0785 -18.5653)" fill="#2f82c3" fillRule="evenodd"/>
    <path d="M43.0142,96.2532a.8808.8808,0,1,1-.88.88.88.88,0,0,1,.88-.88Z" transform="translate(-17.0785 -18.5653)" fill="#db3626" fillRule="evenodd"/>
    <path d="M48.3046,55.6948a4.41,4.41,0,1,1-4.409,4.4089,4.4093,4.4093,0,0,1,4.409-4.4089Z" transform="translate(-17.0785 -18.5653)" fill="#8e65a7" fillRule="evenodd"/>
  </svg>
);

// Navigation Component
const Navigation = () => (
  <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <AdaaLogoIcon size={48} />
          <div className="border-l border-gray-200 pl-3">
            <span className="text-xl font-bold tracking-tight" style={{ color: colors.primaryNavy }}>Adaa' Consulting</span>
            <span className="block text-xs text-gray-500 tracking-wide">Driving Impact with Evidence and Innovation</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {[
            { label: 'About Us', active: false },
            { label: 'What We Do', active: false },
            { label: 'Our Work', active: false },
            { label: 'Knowledge', active: false },
            { label: 'Contact', active: true },
          ].map((item, i) => (
            <button 
              key={i}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                item.active 
                  ? 'bg-gray-100' 
                  : 'hover:bg-gray-50'
              }`}
              style={{ color: colors.primaryNavy }}
            >
              {item.label}
            </button>
          ))}
          <button 
            className="ml-4 px-4 py-2 text-sm font-medium rounded-md border-2 transition-all hover:bg-gray-50 flex items-center gap-2"
            style={{ borderColor: colors.primaryNavy, color: colors.primaryNavy }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span>EN</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-400">عربي</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
);

// Adaa' Full Logo White Version (for footer)
const AdaaFullLogoWhite = ({ width = 220 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432.3685 133.3814" width={width} style={{ height: 'auto' }}>
    <path d="M139.9168,39.91c26.0608,20.9456,29.4977,58.2052,7.6747,83.2181C128.497,145.0147,96.387,150.2765,71.2,137.2156L51.75,159.51,32.7312,144.2246l19.45-22.2942,15.9611-18.2939a36.3044,36.3044,0,0,0,8.1615,9.1876c15.8942,12.7766,39.57,10.765,52.8791-4.49a35.0411,35.0411,0,0,0-4.68-50.7561,38.8246,38.8246,0,0,0-42.0368-4.0373L63.247,38.0936a63.5992,63.5992,0,0,1,76.67,1.8159Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF" fillRule="evenodd"/>
    <path d="M100.2953,61.3694A24.3972,24.3972,0,1,1,75.898,85.7667a24.3981,24.3981,0,0,1,24.3973-24.3973Z" transform="translate(-32.7312 -26.1286)" fill="rgba(255,255,255,0.8)" fillRule="evenodd"/>
    <path d="M78.9453,65.0224a8.8164,8.8164,0,1,1-8.8162,8.8164,8.8156,8.8156,0,0,1,8.8162-8.8164Z" transform="translate(-32.7312 -26.1286)" fill="rgba(255,255,255,0.9)" fillRule="evenodd"/>
    <path d="M59.5484,77.3647a5.29,5.29,0,1,1-5.29,5.29,5.2905,5.2905,0,0,1,5.29-5.29Z" transform="translate(-32.7312 -26.1286)" fill="rgba(255,255,255,0.85)" fillRule="evenodd"/>
    <path d="M42.7945,84.42a4.4067,4.4067,0,1,1-4.4073,4.4075A4.406,4.406,0,0,1,42.7945,84.42Z" transform="translate(-32.7312 -26.1286)" fill="rgba(255,255,255,0.8)" fillRule="evenodd"/>
    <path d="M42.7958,50.9129a4.41,4.41,0,1,1-4.4086,4.41,4.41,4.41,0,0,1,4.4086-4.41Z" transform="translate(-32.7312 -26.1286)" fill="rgba(255,255,255,0.75)" fillRule="evenodd"/>
    <path d="M58.667,103.8164a.8808.8808,0,1,1-.88.88.88.88,0,0,1,.88-.88Z" transform="translate(-32.7312 -26.1286)" fill="rgba(255,255,255,0.7)" fillRule="evenodd"/>
    <path d="M63.9574,63.258a4.41,4.41,0,1,1-4.409,4.409,4.4095,4.4095,0,0,1,4.409-4.409Z" transform="translate(-32.7312 -26.1286)" fill="rgba(255,255,255,0.75)" fillRule="evenodd"/>
    <path d="M185.4078,105.7323v-.6552c0-4.9468,1.9009-7.3384,5.7852-7.3384h.8149l-.5434,3.8984c-2.5533.0987-2.7974,1.3433-2.7974,4.4883,0,2.1294.9233,3.2432,2.6616,3.2432h11.3262c1.7383,0,2.6343-1.0811,2.6343-3.1118v-5.93l3.205-2.2935v7.7969c0,5.0781-1.9282,7.5679-5.9482,7.5679H191.3287C187.336,113.3984,185.4078,110.8759,185.4078,105.7323Zm9.2886-13.4643h2.7978v3.3086h-2.7978Zm3.6943,0h2.7974v3.3086h-2.7974Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M215.0387,91.1864v22.212h-3.232V93.5126Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M220.58,112.8739V100.3925l3.2319-2.3262V112.71c0,5.0781-1.9282,7.5678-5.9209,7.5678h-1.2221l.706-4.292h.5435C219.6564,115.9862,220.58,114.9052,220.58,112.8739Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M227.1251,105.8305V91.1864l3.1777,2.2935v12.7769c0,2.0307.9234,3.1118,2.6617,3.1118h1.8471v4.03H233.046C229.0533,113.3984,227.1251,110.9086,227.1251,105.8305Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M237.69,109.3686v-8.9434l3.1778-1.9658v10.9092h2.9062a1.9268,1.9268,0,0,0,1.711-2.0635v-6.88l3.1508-1.9658v10.9092h1.9825c1.7114,0,2.6074-1.1465,2.6074-3.2759v-5.6675l3.1777-1.9658v7.3711a13.1789,13.1789,0,0,1-.2988,3.08l-.1084.4585h3.9111v4.03H233.9962v-4.03Zm6.274-17.0025h2.7978v3.3086H243.964Zm1.82-4.4555h2.77V91.22h-2.77Zm1.874,4.4555h2.7974v3.3086h-2.7974Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M263.7091,106.2568v-5.93l3.1777-2.2935v7.7969a13.59,13.59,0,0,1-.4072,3.5381h4.0469v4.03H259.0919v-4.03h1.9556C262.7858,109.3686,263.7091,108.2875,263.7091,106.2568ZM261.8624,92.268h2.7969v3.3086h-2.7969Zm3.6934,0h2.7978v3.3086h-2.7978Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M273.4054,109.3686v-8.9434l3.1777-1.9658v10.9092h2.9063a1.9268,1.9268,0,0,0,1.7109-2.0635v-6.88l3.15-1.9658v10.9092h1.9834c1.7109,0,2.6074-1.1465,2.6074-3.2759v-5.6675l3.1777-1.9658v7.3711c0,5.0781-1.9287,7.5351-5.8945,7.5679H269.711v-4.03Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M299.1534,109.3686l-2.4717-13.3335,3.0694-2.4571,2.9062,15.7906c1.6016-.229,2.4444-1.0152,2.4444-3.1118V93.7421l3.1777-2.2935v14.3819a13.1433,13.1433,0,0,1-.3262,3.08l-.1084.4585h3.0957v4.03H295.4317l.9239-4.03Zm-2.2275,10.6474h1.1133a4.5192,4.5192,0,0,1-.2989-1.6054c0-1.7691,1.168-3.21,2.6075-3.21a2.4053,2.4053,0,0,1,1.956,1.0811l-.8144,1.1469a1.26,1.26,0,0,0-.9786-.4589,1.5374,1.5374,0,0,0,0,3.0468h2.0645v2.0313h-5.6494Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M313.52,106.2568V93.48l3.1787-2.2935v14.6441c0,5.0781-1.9287,7.5679-5.9218,7.5679h-.6514v-4.03h.7334C312.5968,109.3686,313.52,108.2875,313.52,106.2568Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M324.9816,106.3549c0-3.4727,2.2822-6.29,5.0791-6.29a4.7831,4.7831,0,0,1,3.8027,2.1294l-1.6026,2.2275a2.4369,2.4369,0,0,0-1.874-.917,3.008,3.008,0,0,0,0,5.9624H334.38v3.9312H323.4064v-3.9639h2.1464A9.0153,9.0153,0,0,1,324.9816,106.3549Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M340.9239,91.1864v22.212h-3.2324V93.5126Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M352.3858,109.3686v-4.1275c0-2.8506-1.874-5.0454-3.8837-5.0454a4.5872,4.5872,0,0,0-2.336.8194l-1.331-3.8331a7.2258,7.2258,0,0,1,3.5859-1.18c4.5078,0,7.2246,4.39,7.2246,8.8125v8.5835H344.2374l.9238-4.03Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M357.546,87.9433h1.1133a4.5173,4.5173,0,0,1-.2988-1.605c0-1.769,1.1679-3.2109,2.6074-3.2109a2.4052,2.4052,0,0,1,1.956,1.081l-.8144,1.147a1.26,1.26,0,0,0-.9785-.459,1.5375,1.5375,0,0,0,0,3.0469h2.0644v2.0312H357.546Zm4.6445,3.2431v22.212h-3.2324V93.5126Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M379.4376,111.4652a5.022,5.022,0,0,1-3.2324.983h-2.01c-3.667,0-5.3232-2.9156-5.2969-7.2071l.0274-3.1777c.0273-4.0952,2.4443-5.8315,5.2695-5.8315h4.1006v-.6553l3.26-.9175v11.27c0,2.85,1.4121,3.4395,2.58,3.4395h1.168v4.03H383.43A4.2121,4.2121,0,0,1,379.4376,111.4652Zm-5.4326-3.0463h2.2c1.3584,0,2.0908-.9175,2.0908-2.6211v-5.5367h-4.1006c-1.4121,0-2.1455.8848-2.1455,2.5884v2.9156C372.05,107.96,373.1085,108.4189,374.005,108.4189Zm-1.9287-18.0513h2.7978v3.3091h-2.7978Zm3.6943,0h2.7979v3.3091h-2.7979Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M388.1817,109.3686v-8.9434l3.1778-1.9658v10.9092h2.9062a1.9268,1.9268,0,0,0,1.7119-2.0635v-6.88l3.15-1.9658v10.9092h1.9825c1.7109,0,2.6074-1.1465,2.6074-3.2759v-5.6675l3.1777-1.9658v7.3711a13.1789,13.1789,0,0,1-.2988,3.08l-.1084.4585H410.4v4.03H384.4884v-4.03Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M413.2774,109.3686v-8.9434l3.1778-1.9658v10.9092h2.9062a1.9268,1.9268,0,0,0,1.7119-2.0635v-6.88l3.15-1.9658v10.9092h1.9825c1.7109,0,2.6074-1.1465,2.6074-3.2759v-5.6675l3.1777-1.9658v7.3711c0,5.0781-1.9277,7.5351-5.8935,7.5679H409.5841v-4.03Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M440.4649,116.2157h.7061c2.1729,0,2.4717-1.4414,2.6621-2.8173H440.628c-3.5586,0-5.3242-2.2276-5.3242-6.7159.0274-3.5053.1358-5.3071,1.3311-7.0761,1.1679-1.6709,2.5537-1.9331,5.1064-1.9331,3.5313,0,5.2959,2.2275,5.2959,6.7158v4.98h2.499v4.03h-2.4716c-.38,4.5537-1.9551,6.88-5.9756,6.88h-1.6016Zm-2.5537-23.227h1.1143a4.5,4.5,0,0,1-.2988-1.6055c0-1.769,1.1679-3.21,2.6074-3.21a2.4025,2.4025,0,0,1,1.9551,1.081L442.4747,90.4a1.2578,1.2578,0,0,0-.9775-.4585,1.5373,1.5373,0,0,0,0,3.0469h2.0635v2.0307h-5.6495Zm2.5811,16.38h3.3408v-5.045c0-1.7036-.707-2.5878-2.0918-2.5878H440.628c-1.3857,0-2.1191.8188-2.1191,2.457v2.457C438.5089,108.8774,439.6232,109.3686,440.4923,109.3686Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M453.6378,112.5468a2.2872,2.2872,0,0,1-1.0869.5566,6.6909,6.6909,0,0,1-1.9277.295h-1.9014v-4.03h1.1133c2.0371,0,2.6621-1.2774,2.6621-3.8658,0-4.2587,1.6836-7.1743,5.3232-7.1743h1.9824c3.5313,0,5.2969,2.49,5.2969,6.8467v9.37H457.82A4.8538,4.8538,0,0,1,453.6378,112.5468Zm2.0645-4.4229c.1357,1.9327,1.1679,2.3916,1.9824,2.3916h4.2373v-5.34c0-2.3257-1.0869-2.7847-1.9561-2.7847H457.82c-1.7656,0-2.1455,1.2779-2.1455,2.4244C455.6749,106.7807,455.7023,107.5668,455.7023,108.1239Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M193.0382,65.1781l-2.3042,5.8677-4.417.5757,9.832-24.4048h3.4566l9.5635,24.4048-4.57-.5757-2.2275-5.6875Zm8.2959-3.1674-3.5718-9.5386-3.687,9.5386Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M211.8531,61.9027c0-6.1191,3.0723-9.9345,8.2574-9.9345a9.054,9.054,0,0,1,4.8388,1.3677V45.849l4.3018.6836V71.55h-4.1865l-.0381-1.2241a9.5017,9.5017,0,0,1-5.07,1.4761C214.964,71.8017,211.8531,68.1659,211.8531,61.9027Zm9.1407,6.3711a6.7965,6.7965,0,0,0,3.9555-1.2959V56.7914a6.7631,6.7631,0,0,0-3.9555-1.332c-3.1495,0-4.7242,2.4121-4.7242,6.4433C216.27,65.8622,217.8443,68.2738,220.9938,68.2738Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M233.1261,66.5463c0-4.2837,4.6474-7.5229,11.2529-7.1992l.7686.0361c0-2.9516-.8833-4.2114-3.8409-4.2114a18.2382,18.2382,0,0,0-6.5293,1.5478l.1153-3.2036a19.3343,19.3343,0,0,1,7.4126-1.6919c4.3784,0,7.0669,2.34,7.0669,6.8389V71.5136H245.109V69.75a9.7141,9.7141,0,0,1-6.0684,2.0156C235.5074,71.7655,233.1261,69.6777,233.1261,66.5463Zm7.0669,1.8a7.07,7.07,0,0,0,4.9546-1.9438v-4.14h-.9219c-4.0713,0-6.99,1.8721-6.99,3.9595C237.2355,67.5541,238.3111,68.3461,240.193,68.3461Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M253.2472,66.5463c0-4.2837,4.6474-7.5229,11.2529-7.1992l.7686.0361c0-2.9516-.8829-4.2114-3.8409-4.2114a18.2382,18.2382,0,0,0-6.5293,1.5478l.1153-3.2036a19.3343,19.3343,0,0,1,7.4126-1.6919c4.3784,0,7.0669,2.34,7.0669,6.8389V71.5136h-4.2627V69.75a9.7165,9.7165,0,0,1-6.0689,2.0156C255.6285,71.7655,253.2472,69.6777,253.2472,66.5463Zm7.0669,1.8a7.0694,7.0694,0,0,0,4.9546-1.9438v-4.14h-.9219c-4.0713,0-6.99,1.8721-6.99,3.9595C257.3566,67.5541,258.4322,68.3461,260.3141,68.3461Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M274.9435,45.2367l.0381-.8637h2.6123l-.0772.8281a19.5977,19.5977,0,0,1-1.46,5.147h-2.15A26.51,26.51,0,0,0,274.9435,45.2367Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M287.0011,59.6713c0-7.6675,3.5722-12.2026,10.9072-12.2026a20.0384,20.0384,0,0,1,8.1426,1.5478l.6142,3.6353c-3.8408-1.1875-6.0293-1.6914-8.4492-1.6914-4.4941,0-6.99,2.7715-6.99,8.7109,0,5.9751,2.4961,8.6748,6.99,8.6748,2.4961,0,4.6475-.5039,8.4492-1.62l-.6142,3.6a20.0384,20.0384,0,0,1-8.1426,1.5479C290.5733,71.8735,287.0011,67.3383,287.0011,59.6713Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M310.5011,61.9027c0-6.1552,3.5332-9.9345,9.1406-9.9345s9.1406,3.7793,9.1406,9.9345c0,6.1192-3.5722,9.899-9.1406,9.899C314.0343,71.8017,310.5011,68.0219,310.5011,61.9027Zm9.1406,6.6231c3.3027,0,4.9932-2.5913,4.9932-6.6231,0-4.0673-1.6905-6.6591-4.9932-6.6591-3.1494,0-5.0693,2.4116-5.0693,6.6591S316.4923,68.5258,319.6417,68.5258Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M342.1437,56.0717a8.8457,8.8457,0,0,0-5.07,2.0156V71.5136h-4.2626V52.4l4.2626.6841v.9717a11.3085,11.3085,0,0,1,6.2227-1.9077c4.07,0,6.375,2.0879,6.375,6.3715V71.5136h-4.2627v-12.13C345.4083,57.1156,344.4093,56.0717,342.1437,56.0717Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M353.547,70.6855V67.23a21.329,21.329,0,0,0,7.2588,1.4761c3.8789,0,4.0713-1.98,4.0713-2.3755,0-1.44-1.6514-1.98-4.34-2.8438-2.7656-.8642-6.5674-2.0161-6.5674-5.9033,0-3.5635,3.11-5.8672,8.3721-5.8672a18.01,18.01,0,0,1,6.875,1.3316v3.4555c-3.2646-1.2236-4.7627-1.4394-6.1445-1.4394-2.8037,0-4.417,1.0078-4.417,2.3037,0,1.4394,1.6894,2.0156,4.5312,2.9155a17.6766,17.6766,0,0,1,4.2256,1.8355,4.6734,4.6734,0,0,1,2.1885,3.9594c0,3.6358-3.2647,6.0113-8.2568,6.0113A21.5926,21.5926,0,0,1,353.547,70.6855Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M373.4757,65.61V52.4l4.2627.6841V64.7465c0,2.3037,1.0371,3.3115,3.3037,3.3115a8.865,8.865,0,0,0,5.0312-1.98V52.4l4.2627.6841V71.6215h-4.2627V70.0736a11.1372,11.1372,0,0,1-6.2216,1.9078C375.8185,71.9814,373.4757,69.8578,373.4757,65.61Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M399.7413,46.7128V71.5136h-4.3008V45.9926Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M405.8468,67.1581V56.1073h-2.0352L403.005,52.76h2.8418V47.4325l4.2637.6841V52.76h4.455l-.8066,3.3471h-3.6484V66.9062c0,1.188.499,1.728,1.6894,1.728a10.2993,10.2993,0,0,0,1.5752-.144l.8828-.4322v3.5635a20.1132,20.1132,0,0,1-3.61.36C407.422,71.9814,405.8468,70.3979,405.8468,67.1581Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M419.4776,45.0927a2.2,2.2,0,1,1-2.3427,2.16A2.3124,2.3124,0,0,1,419.4776,45.0927Zm2.19,8.2432V71.5136h-4.2637V52.6518Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M436.1066,56.0717a8.8457,8.8457,0,0,0-5.07,2.0156V71.5136h-4.2627V52.4l4.2627.6841v.9717a11.3085,11.3085,0,0,1,6.2227-1.9077c4.07,0,6.375,2.0879,6.375,6.3715V71.5136h-4.2627v-12.13C439.3712,57.1156,438.3722,56.0717,436.1066,56.0717Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
    <path d="M448.8927,77.4887l.8056-3.2754a14.66,14.66,0,0,0,5.6465,1.2236c3.38,0,5.377-1.4394,5.377-3.8872V70.5419a9.0562,9.0562,0,0,1-4.84,1.3677c-5.0312,0-8.2568-3.7075-8.2568-9.9346,0-6.2993,3.11-9.935,8.1035-9.935a8.7554,8.7554,0,0,1,4.9932,1.5478V52.2919l4.3008.6841V71.5854c0,4.4638-3.4942,7.3071-9.0635,7.3071A19.3115,19.3115,0,0,1,448.8927,77.4887Zm7.873-9.1069a7.076,7.076,0,0,0,3.9561-1.2955v-9.935a6.8049,6.8049,0,0,0-3.9561-1.2959c-2.957,0-4.7246,2.0879-4.7246,6.12C452.0411,65.97,453.6163,68.3818,456.7657,68.3818Z" transform="translate(-32.7312 -26.1286)" fill="#FFFFFF"/>
  </svg>
);

// Social Media Icons for Footer
const FooterSocialIcons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
};

// Footer Component
const FooterComponent = () => (
  <footer style={{ backgroundColor: colors.primaryNavy }}>
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="grid grid-cols-4 gap-12">
        <div className="col-span-1">
          <div className="mb-6">
            <AdaaFullLogoWhite width={200} />
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Driving Impact with Evidence and Innovation
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['About Us', 'What We Do', 'Our Work', 'Knowledge Products'].map((link, i) => (
              <li key={i}>
                <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            {['Strategic Advisory', 'M&E Systems', 'Digital Innovation', 'Capacity Building'].map((link, i) => (
              <li key={i}>
                <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>Aden, Republic of Yemen</li>
            <li>info@adaa-foundation.org</li>
            <li>www.adaa-foundation.org</li>
          </ul>
          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all">
              <FooterSocialIcons.Facebook />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all">
              <FooterSocialIcons.LinkedIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-8 flex items-center justify-between">
        <span className="text-white/40 text-sm">© 2025 Adaa' Consulting. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

// Icons
const Icons = {
  mapPin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  send: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  linkedin: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  youtube: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
  check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  clock: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  messageCircle: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  arrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
};

// Contact Info Card Component
const ContactInfoCard = ({ icon, title, content, link, linkText }) => {
  const IconComponent = Icons[icon];
  
  return (
    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
      <div 
        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ 
          backgroundColor: `${colors.secondaryTeal}15`,
          color: colors.secondaryTeal
        }}
      >
        <IconComponent />
      </div>
      <div>
        <h3 
          className="font-semibold mb-1"
          style={{ color: colors.primaryNavy }}
        >
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-1">{content}</p>
        {link && (
          <a 
            href={link}
            className="text-sm font-medium inline-flex items-center gap-1 hover:underline"
            style={{ color: colors.ctaOrange }}
          >
            {linkText}
            <Icons.arrowRight />
          </a>
        )}
      </div>
    </div>
  );
};

// Social Media Button Component
const SocialButton = ({ icon, label, href }) => {
  const IconComponent = Icons[icon];
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
      title={label}
    >
      <span style={{ color: colors.primaryNavy }}>
        <IconComponent />
      </span>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </a>
  );
};

// Quick Link Card Component
const QuickLinkCard = ({ icon, title, description, linkText, href }) => {
  const IconComponent = Icons[icon];
  
  return (
    <div 
      className="p-6 rounded-xl border-2 border-transparent hover:border-gray-200 transition-all duration-300"
      style={{ backgroundColor: colors.white }}
    >
      <div 
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ 
          backgroundColor: `${colors.accentYellow}20`,
          color: colors.primaryNavy
        }}
      >
        <IconComponent />
      </div>
      <h3 
        className="font-semibold mb-2"
        style={{ color: colors.primaryNavy }}
      >
        {title}
      </h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <a 
        href={href}
        className="text-sm font-medium inline-flex items-center gap-1"
        style={{ color: colors.ctaOrange }}
      >
        {linkText}
        <Icons.arrowRight />
      </a>
    </div>
  );
};

// Main Contact Page Component
const AdaaContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
  };

  const inquiryTypes = [
    { value: '', label: 'Select inquiry type' },
    { value: 'partnership', label: 'Partnership Inquiry' },
    { value: 'services', label: 'Services & Consulting' },
    { value: 'careers', label: 'Careers & Employment' },
    { value: 'media', label: 'Media & Press' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.lightBg }}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative py-20 px-4"
        style={{ backgroundColor: colors.primaryNavy }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full" 
               style={{ backgroundColor: colors.secondaryTeal }} />
          <div className="absolute bottom-5 left-20 w-48 h-48 rounded-full" 
               style={{ backgroundColor: colors.accentLightBlue }} />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm mb-6 opacity-80">
            <span className="text-white">Home</span>
            <span className="text-white">/</span>
            <span style={{ color: colors.accentLightBlue }}>Contact</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Contact Us
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: colors.accentLightBlue }}
          >
            Ready to discuss how Adaa' can support your work in Yemen? Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div 
                className="p-6 border-b border-gray-100"
                style={{ backgroundColor: `${colors.accentLightBlue}10` }}
              >
                <h2 
                  className="text-xl font-semibold"
                  style={{ color: colors.primaryNavy }}
                >
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mt-1">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                        style={{ focusRing: colors.secondaryTeal }}
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    {/* Organization */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization
                      </label>
                      <input 
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                        placeholder="Your organization name"
                      />
                    </div>
                    
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    {/* Subject / Inquiry Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all text-gray-700"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
                      placeholder="How can we help you? Please provide details about your inquiry..."
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 rounded-lg font-medium text-white transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg"
                    style={{ backgroundColor: colors.ctaOrange }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e8850f'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.ctaOrange}
                  >
                    <Icons.send />
                    Send Message
                  </button>
                </form>
              ) : (
                /* Success State */
                <div className="p-12 text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${colors.accentGreen}15` }}
                  >
                    <span style={{ color: colors.accentGreen }}>
                      <Icons.check />
                    </span>
                  </div>
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{ color: colors.primaryNavy }}
                  >
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. Our team will review your message and get back to you within 1-2 business days.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', organization: '', email: '', subject: '', message: '' });
                    }}
                    className="text-sm font-medium"
                    style={{ color: colors.secondaryTeal }}
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div>
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: colors.primaryNavy }}
              >
                Contact Information
              </h3>
              <div className="space-y-4">
                <ContactInfoCard 
                  icon="mapPin"
                  title="Our Location"
                  content="Aden, Republic of Yemen"
                />
                <ContactInfoCard 
                  icon="mail"
                  title="Email Us"
                  content="info@adaa-foundation.org"
                  link="mailto:info@adaa-foundation.org"
                  linkText="Send Email"
                />
                <ContactInfoCard 
                  icon="globe"
                  title="Website"
                  content="www.adaa-foundation.org"
                  link="https://www.adaa-foundation.org"
                  linkText="Visit Website"
                />
              </div>
            </div>
            
            {/* Response Time */}
            <div 
              className="p-5 rounded-xl"
              style={{ backgroundColor: `${colors.accentYellow}15` }}
            >
              <div className="flex items-start gap-3">
                <span style={{ color: colors.ctaOrange }}>
                  <Icons.clock />
                </span>
                <div>
                  <h4 
                    className="font-semibold text-sm mb-1"
                    style={{ color: colors.primaryNavy }}
                  >
                    Response Time
                  </h4>
                  <p className="text-sm text-gray-600">
                    We typically respond within 1-2 business days. For urgent matters, please indicate in your message.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: colors.primaryNavy }}
              >
                Connect With Us
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <SocialButton 
                  icon="linkedin"
                  label="LinkedIn"
                  href="https://linkedin.com/company/adaafoundation"
                />
                <SocialButton 
                  icon="twitter"
                  label="X (Twitter)"
                  href="https://twitter.com/adaafoundation"
                />
                <SocialButton 
                  icon="facebook"
                  label="Facebook"
                  href="https://facebook.com/adaafoundation"
                />
                <SocialButton 
                  icon="youtube"
                  label="YouTube"
                  href="https://youtube.com/@adaafoundation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section 
        className="py-12 px-4"
        style={{ backgroundColor: `${colors.primaryNavy}05` }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-2xl font-bold text-center mb-8"
            style={{ color: colors.primaryNavy }}
          >
            Looking for Something Specific?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <QuickLinkCard 
              icon="messageCircle"
              title="Partnership Inquiries"
              description="Interested in collaborating with Adaa' on programs, research, or institutional development?"
              linkText="Partner With Us"
              href="/work-with-us#partner"
            />
            <QuickLinkCard 
              icon="clock"
              title="Career Opportunities"
              description="Looking to join our team of professionals working on Yemen's humanitarian and development challenges?"
              linkText="View Open Positions"
              href="/work-with-us#careers"
            />
            <QuickLinkCard 
              icon="globe"
              title="Media & Press"
              description="Seeking information, interviews, or press materials about Adaa' Foundation and our work?"
              linkText="Media Resources"
              href="/knowledge#media"
            />
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            className="rounded-xl overflow-hidden shadow-sm border border-gray-200"
            style={{ backgroundColor: colors.white }}
          >
            <div 
              className="h-80 flex items-center justify-center"
              style={{ backgroundColor: `${colors.accentLightBlue}15` }}
            >
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ 
                    backgroundColor: colors.white,
                    color: colors.secondaryTeal
                  }}
                >
                  <Icons.mapPin />
                </div>
                <h3 
                  className="font-semibold mb-2"
                  style={{ color: colors.primaryNavy }}
                >
                  Adaa' Foundation
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Aden, Republic of Yemen
                </p>
                <a 
                  href="https://maps.google.com/?q=Aden,Yemen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{ 
                    backgroundColor: colors.ctaOrange,
                    color: colors.white
                  }}
                >
                  Open in Google Maps
                  <Icons.arrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section 
        className="py-16 px-4"
        style={{ backgroundColor: colors.primaryNavy }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Drive Impact Together?
          </h2>
          <p 
            className="mb-8 max-w-2xl mx-auto"
            style={{ color: colors.accentLightBlue }}
          >
            Whether you're looking for a monitoring partner, strategic advisor, or innovative solutions for complex challenges, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@adaa-foundation.org"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium text-white transition-colors"
              style={{ backgroundColor: colors.ctaOrange }}
            >
              <Icons.mail />
              Email Us Directly
            </a>
            <a 
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium transition-colors border-2"
              style={{ 
                borderColor: colors.accentLightBlue,
                color: colors.accentLightBlue
              }}
            >
              Learn About Us
              <Icons.arrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
};

export default AdaaContactPage;
