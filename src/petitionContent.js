let pageContent = {
  eco: {
    hero: {
      bg: require("@/assets/img/DJI_0409.jpg"),
      headline: `<h1 class="font-weight--bold"><span>守</span><span>護</span><span>大</span><span>嶼</span></h1>`,
      lead: ``,
      subHeader: "堅守香港海洋最後一道防線",
      text: `
      <p>香港海洋孕育近6千種海洋生物，東大嶼水域生態豐富多樣，是國家重點保護野生動物白腹海雕的繁殖及棲息地，更錄得全球獨有的鮑氏雙足蜥，附近水域亦發現稀有的軟珊瑚海筆。</p>
      <p>政府強推「明日大嶼」，在如此敏感的生態區域大興土木，必然破壞珍貴的海洋生態；它亦是香港史上最昂貴的基建，造價至少6,240億元，不但可能於10年內（2031 - 32年度）<a href="https://www.greenpeace.org/hongkong/issues/health/update/22158/" target="_blank">耗盡香港的財政儲備</a>，亦無法有效解決香港逼在眉睫的房屋問題。</p>
      <p>事實上，香港有比「明日大嶼」更明智的選項：發展棕地造價僅333億元即可興建近14萬伙公營房屋，綠色和平更調查發現，最新棕地面積超過1900公頃，比「明日大嶼」造地計劃的1700公頃還多。</p>
      <p>海洋住屋不對立，為了珍貴脆弱的海洋生態，及讓市民安居樂業，一起發聲，要求政府優先發展棕地，放棄不負責任的「明日大嶼」！</p>`
    },
    issues: [
      {
        num: 1,
        imageLeft: false,
        description: "「明日」的生態威脅",
        taglines: [
          {
            leading: "鄰近填海選址海域",
            oc: `<span>具生態價值</span>`
          },
          {
            leading: "生態價值",
            oc: `<span><span>絕不應被</span><span>刻意低估</span></span>`
          }
        ],
        sectionImg: require("@/assets/img/DJI_0431.jpg"),
        sectionAlt: "",
        sectionText: `<div class="text-flexbox"><div class ="box"><p><strong>填海選址鄰近海域具生態價值</strong>，或令海洋或陸地物種的棲息地永久喪失。</p></div><div class="box"><p>我們與6個環保及關注團體發佈的生態調查發現，鄰近填海選址的周公島，具國家二級保護野生動物白腹海鵰的鳥巢，全球獨有的鮑氏雙足蜥，更在中部水域錄得一種稀有的軟珊瑚海筆，<strong>生態價值絕不應被刻意低估</strong>。</p></div></div>`,
        subImg: require("@/assets/img/hk-brownfield.jpg")
      },
      {
        num: 2,
        imageLeft: true,
        description: "史上最貴基建",
        taglines: [
          {
            leading: "耗時至少",
            oc: `<span>13年</span>`
          },
          {
            leading: "耗費至少",
            oc: `<span>6,240億公帑</span>`
          }
        ],
        sectionImg: require("@/assets/img/DJI_0439.jpg"),
        sectionAlt: "",
        sectionText: `<div class="text-flexbox"><div class ="box"><p>現時輪候公屋年期為5.8年，逾20萬劏房戶等上樓，惟填海預料至少2032年才能讓市民入伙，無法紓緩燃眉之急，甚至要「邊住邊填海」，居住環境堪憂。</p></div><div class="box"><p>「明日大嶼」耗費<strong>至少6,240億元公帑</strong>，工程延期超支仍未計算在內，令人擔憂將耗盡香港的財政儲備。</p></div></div>`,
        subImg: require("@/assets/img/hk-city.jpg")
      },
      {
        num: 3,
        imageLeft: false,
        description: "我們有更明智的選擇",
        taglines: [
          {
            leading: "發展棕地成本",
            oc: `<span><span>比填海</span><span>便宜8成</span></span>`
          },
          {
            leading: "即可興建",
            oc: `<span><span>14萬伙</span><span>公營房屋</span></span>`
          }
        ],
        sectionImg: require("@/assets/img/brownfield.jpg"),
        sectionAlt: "",
        sectionText: `<div class="text-flexbox"><div class="box"><p>事實上，香港有比「明日大嶼」更明智的選項：發展408公頃的棕地，造地成本估算為333億元。</p></div><div class="box"><p>除了比填海<strong>便宜8成</strong>以外，政府亦可引用《收回土地條例》，以比填海更快的速度，興建<strong>近14萬伙公營房屋</strong> ，並取締棕地上的違法及違規作業。</p></div></div>`,
        subImg: require("@/assets/img/hk-brownfield.jpg")
      }
    ]
  }
};
//
export { pageContent };
