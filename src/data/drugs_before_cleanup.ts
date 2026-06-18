
export const DRUG_DB = [
  // 抗精神病薬
  { name:"リスペリドン", brand:"リスパダール錠・OD錠・細粒・内用液", category:"抗精神病薬(SDA)",
    normal:"1回1mg 1日2回より開始、維持量1日2〜6mg 分2、最大1日12mg",
    ranges:[
      {ccr:[50,Infinity], dose:"活性代謝物パリペリドンが蓄積するため、1日1mg 分2より開始、維持量1日2〜6mg 分2、最大1日6mg"},
      {ccr:[30,50], dose:"1日50〜75mg 分2〜3"},
      {ccr:[10,30], dose:"1日25mg、最大50mg"},
      {ccr:[0,10], dose:"1日25mg、最大50mg（半減期5.1倍）"}
    ], hd:"1日25mg、HDはHD後。または50mgを週3回HD後", pd:"HDに準じる", dialyzable:"×", caution:true },
  { name:"スルピリド", brand:"ドグマチール錠・カプセル・細粒", category:"抗精神病薬(ベンザミド系)",
    normal:"①胃潰瘍：1日150mg 分3  ②統合失調症：1日300〜600mg  ③うつ：1日150〜300mg",
    ranges:[
      {ccr:[50,Infinity], dose:"①②③50〜75%に減量"},
      {ccr:[30,50], dose:"①②③50%に減量"},
      {ccr:[10,30], dose:"①②③25%に減量"}
    ], hd:"1日50〜100mg", pd:"同左", dialyzable:"△", caution:true,
    note:"錐体外路症状（流涎、嚥下困難）のモニタリングを実施" },
  { name:"パリペリドン", brand:"インヴェガ錠", category:"抗精神病薬(SDA)",
    normal:"1日1回6mgより開始、最大1日12mg（朝食後）",
    ranges:[
      {ccr:[80,Infinity], dose:"通常用量"},
      {ccr:[50,80], dose:"1日1回3mgから開始、最大1日6mg"}
    ], hd:"禁忌", pd:"禁忌", dialyzable:"×", danger:true, caution:true },
  // 抗うつ薬
  { name:"デュロキセチン塩酸塩", brand:"サインバルタカプセル", category:"抗うつ薬(SNRI)",
    normal:"①うつ・糖尿病性神経障害：1日1回40mg朝食後  ②線維筋痛症等：1日1回60mg",
    ranges:[
      {ccr:[60,Infinity], dose:"腎機能正常者と同じ（中等度腎障害では変化なし）"},
      {ccr:[30,60], dose:"禁忌（AUCが約2倍に上昇）"}
    ], hd:"禁忌", pd:"禁忌", dialyzable:"×", danger:true, caution:true },
  { name:"ミルタザピン", brand:"リフレックス錠・レメロン錠", category:"抗うつ薬(NaSSA)",
    normal:"1日1回15mgより開始、1日15〜30mg就寝前、最大1日45mg",
    ranges:[
      {ccr:[60,Infinity], dose:"腎機能正常者と同じ"},
      {ccr:[30,60], dose:"CLが低下する可能性あり、1日1回15〜30mg"}
    ], hd:"1日1回15mg", pd:"同左", dialyzable:"×", caution:true },
  // 気分安定薬
  { name:"炭酸リチウム", brand:"リーマス錠", category:"気分安定薬",
    normal:"1日400〜600mg 分2〜3より開始、維持量1日200〜800mg 分1〜3",
    ranges:[
      {ccr:[50,Infinity], dose:"50〜75%に減量（TDM実施）"},
      {ccr:[10,50], dose:"25〜50%に減量（TDM必須）"}
    ], hd:"1回600mgを週3回HD後（報告例あり）", pd:"禁忌", dialyzable:"○", danger:true, caution:true,
    note:"急性腎障害・間質性腎炎・ネフローゼ症候群あり。治療濃度：急性期0.8〜1.2mEq/L、安定期0.4〜1.0mEq/L" },
  // 抗てんかん薬
  { name:"ガバペンチン", brand:"ガバペン錠・シロップ", category:"抗てんかん薬",
    normal:"初日1日600mg、2日目1日1,200mg、維持1日1,200〜1,800mg 分3、最大1日2,400mg",
    ranges:[
      {ccr:[80,Infinity], dose:"通常用量"},
      {ccr:[50,80], dose:"初日1日400mg、維持1日600〜800mg 分2、最大1日1,000mg"},
      {ccr:[30,50], dose:"初日1日1回200mg、維持1日1回300〜400mg、最大1日500mg"},
      {ccr:[15,30], dose:"初日1日1回200mg、維持2日に1回200〜300mg、最大1日200mg"}
    ], hd:"初日1日1回200mg、維持1日1回200mg、HDはHD後。または週3回HD後200〜400mg",
    pd:"GFR<15に準じる", dialyzable:"○", caution:true,
    note:"参考血中濃度：2〜20μg/mL" },
  { name:"レベチラセタム（経口）", brand:"イーケプラ錠・ドライシロップ", category:"抗てんかん薬",
    normal:"1回500mgを1日2回より開始、最大1回1,500mgを1日2回",
    ranges:[
      {ccr:[80,Infinity], dose:"通常用量"},
      {ccr:[50,80], dose:"1回500mgを1日2回、最大1回1,000mgを1日2回"},
      {ccr:[30,50], dose:"1回250mgを1日2回、最大1回750mgを1日2回"},
      {ccr:[0,30], dose:"1回250mgを1日2回、最大1回500mgを1日2回"}
    ], hd:"1回500mgを1日1回、HDはHD後に1回250〜500mgを補充", pd:"1回500mgを1日1回",
    dialyzable:"○", caution:true, note:"参考血中濃度：12〜46μg/mL" },
  // パーキンソン病
  { name:"プラミペキソール（速放錠）", brand:"ビ・シフロール錠", category:"パーキンソン病治療薬",
    normal:"①PD：1日0.25mgより開始、維持1日1.5〜4.5mg 分3  ②RLS：1日1回0.25mg",
    ranges:[
      {ccr:[50,Infinity], dose:"①初回1日0.25mg 分2、最大1日2.25mg 分2  ②減量不要"},
      {ccr:[20,50], dose:"①初回1日1回0.125mg、最大1日1回1.5mg"},
      {ccr:[0,20], dose:"①十分な使用経験がなく慎重投与"}
    ], hd:"①②十分な使用経験なし、慎重投与", pd:"同左", dialyzable:"×", caution:true },
  { name:"アマンタジン塩酸塩", brand:"シンメトレル錠", category:"パーキンソン病治療薬",
    normal:"①PD：初期1日100mg 分1〜2、1週後に1日200mg 分2  ②脳梗塞後遺症：1日100〜150mg",
    ranges:[
      {ccr:[75,Infinity], dose:"通常用量"},
      {ccr:[50,75], dose:"CCr35〜75：1日1回100mg"},
      {ccr:[35,50], dose:"1回100mgを2日毎"},
      {ccr:[25,35], dose:"1回100mgを3日毎"},
      {ccr:[15,25], dose:"1回100mgを3日毎"}
    ], hd:"1回100mgを7日毎", pd:"同左", dialyzable:"×", danger:true, caution:true },
  // 強心薬
  { name:"ジゴキシン（経口）", brand:"ジゴシン錠・散・エリキシル", category:"強心配糖体",
    normal:"急速飽和：初回0.5〜1.0mg。維持：1日0.25〜0.5mg",
    ranges:[
      {ccr:[60,Infinity], dose:"維持：1回0.125mgを24時間毎"},
      {ccr:[30,60], dose:"維持：1回0.125mgを48時間毎または1回0.0625mgを24時間毎"},
      {ccr:[10,30], dose:"大幅減量、TDM必須"}
    ], hd:"維持：約0.09mgを週3〜4回、心拍数・血中濃度を測定し調整（負荷量は通常通り）",
    pd:"同左", dialyzable:"×", caution:true,
    note:"治療域：0.5〜1.5ng/mL。収縮不全心不全では0.9ng/mL以下を目安" },
  // β遮断薬
  { name:"アテノロール", brand:"テノーミン錠", category:"降圧薬(β遮断薬)",
    normal:"1日1回50mg、最大1日1回100mg",
    ranges:[
      {ccr:[35,Infinity], dose:"1日1回25〜50mg"},
      {ccr:[15,35], dose:"1日1回25mg"},
      {ccr:[0,15], dose:"1日1回12.5mg（最大1日おきに50mg）"}
    ], hd:"1日1回25mg", pd:"同左", dialyzable:"○", caution:true },
  // 抗不整脈薬
  { name:"ジソピラミド", brand:"リスモダンカプセル", category:"抗不整脈薬(クラスⅠa群)",
    normal:"1回100mgを1日3回",
    ranges:[
      {ccr:[50,Infinity], dose:"1回100mgを1日1〜2回"},
      {ccr:[15,50], dose:"1回100mgを24〜48時間毎"}
    ], hd:"血中濃度を測定し調整", pd:"同左", dialyzable:"個人差あり", caution:true,
    note:"参考血中濃度治療域：2〜5μg/mL。腎機能低下で活性代謝物が蓄積し強力な抗コリン作用あり" },
  { name:"ソタロール塩酸塩", brand:"ソタロール塩酸塩錠", category:"抗不整脈薬(クラスⅢ群)",
    normal:"1日80mgより開始、1日320mgまで漸増、分2",
    ranges:[
      {ccr:[60,Infinity], dose:"通常用量"},
      {ccr:[30,60], dose:"初回80mg、その後24時間毎。少なくとも5回投与後に漸増"},
      {ccr:[10,30], dose:"初回80mg、その後36〜48時間毎"}
    ], hd:"1/3〜2/3に減量", pd:"禁忌（GFR<10）", dialyzable:"○", danger:true, caution:true },
  { name:"シベンゾリンコハク酸塩（経口）", brand:"シベノール錠", category:"抗不整脈薬(クラスⅠa群)",
    normal:"1日300mg 分3、1日450mgまで増量可",
    ranges:[
      {ccr:[50,Infinity], dose:"少量から開始、頻回に心電図検査・慎重投与"},
      {ccr:[30,50], dose:"1回50mgを1日1〜2回"},
      {ccr:[10,30], dose:"1日1回50mg"},
      {ccr:[0,10], dose:"1日1回25mg"}
    ], hd:"禁忌", pd:"禁忌", dialyzable:"×", danger:true, caution:true,
    note:"腎障害患者では血中濃度上昇により低血糖を生じる可能性あり" },
  // 抗凝固薬
  { name:"ダビガトラン", brand:"プラザキサカプセル", category:"抗凝固薬(DOAC・トロンビン阻害)",
    normal:"1回150mgを1日2回（高リスク患者では1回110mgを1日2回）",
    ranges:[
      {ccr:[50,Infinity], dose:"通常用量"},
      {ccr:[30,50], dose:"1回110mgを1日2回"}
    ], hd:"禁忌（AUCが健常者の6.3倍）", pd:"禁忌", dialyzable:"○", danger:true, caution:true,
    note:"抗凝固薬関連腎症を含む急性腎障害との因果関係が否定できない症例あり" },
  { name:"リバーロキサバン", brand:"イグザレルト錠・OD錠・細粒分包", category:"抗凝固薬(DOAC・Xa阻害)",
    normal:"①心房細動：1日1回15mg  ②静脈血栓：初期3週間1回15mgを1日2回→1日1回15mg",
    ranges:[
      {ccr:[50,Infinity], dose:"①②通常用量"},
      {ccr:[30,50], dose:"①1日1回10mg（AUCは健常者の1.5倍）  ②通常用量だが適否を慎重に判断"}
    ], hd:"①HD患者で1回2.5mgを1日2回の報告例あり（現時点では優位性確認できず）", pd:"禁忌", dialyzable:"×", danger:true, caution:true },
  { name:"アピキサバン", brand:"エリキュース錠", category:"抗凝固薬(DOAC・Xa阻害)",
    normal:"①心房細動：1回5mgを1日2回（高齢・低体重・高Crで1回2.5mgを1日2回）  ②静脈血栓：初期1回10mgを1日2回",
    ranges:[
      {ccr:[50,Infinity], dose:"①②通常用量（出血リスク増大のおそれあり）"},
      {ccr:[25,50], dose:"①1回2.5mgを1日2回への減量を考慮  ②通常用量だが慎重判断"}
    ], hd:"①1回2.5mgを1日2回", pd:"同左", dialyzable:"×", danger:true, caution:true },
  { name:"エドキサバン", brand:"リクシアナ錠・OD錠", category:"抗凝固薬(DOAC・Xa阻害)",
    normal:"①心房細動・静脈血栓：60kg超60mg/日、60kg以下30mg/日（1日1回）",
    ranges:[
      {ccr:[50,Infinity], dose:"通常用量"},
      {ccr:[15,50], dose:"①1日1回30mg（AUCは健常者の1.8倍）"}
    ], hd:"禁忌", pd:"禁忌", dialyzable:"×", danger:true, caution:true },
  // H2受容体拮抗薬
  { name:"ファモチジン（経口）", brand:"ガスター錠・D錠・散", category:"H2受容体拮抗薬",
    normal:"①胃潰瘍等：1回20mgを1日2回  ②急性胃炎等：1回10mgを1日2回",
    ranges:[
      {ccr:[50,Infinity], dose:"通常用量"},
      {ccr:[30,50], dose:"1回10mgを2日に1回または1日1回5mg"}
    ], hd:"1日1回10mgまたは20mgを週3回HD後", pd:"同左", dialyzable:"○", caution:true },
  { name:"シメチジン", brand:"タガメット錠・カイロック細粒", category:"H2受容体拮抗薬",
    normal:"①胃潰瘍：1日800mg 分2  ②急性胃炎等：1日400mg 分2",
    ranges:[
      {ccr:[50,Infinity], dose:"1回200mgを1日3回（8時間毎）"},
      {ccr:[30,50], dose:"1回200mgを1日2回（12時間毎）"},
      {ccr:[0,30], dose:"1日1回200mg"}
    ], hd:"1日1回200mg、HDはHD後", pd:"同左", dialyzable:"○", caution:true,
    note:"尿細管分泌阻害によりクレアチニン上昇（偽性腎障害）の可能性あり" },
  // 糖尿病薬
  { name:"メトホルミン（メトグルコ）", brand:"メトグルコ錠", category:"糖尿病薬(ビグアナイド)",
    normal:"1日500mgより開始、維持750〜1,500mg 分2〜3、最大1日2,250mg",
    ranges:[
      {ccr:[60,Infinity], dose:"通常用量"},
      {ccr:[45,60], dose:"少量より開始、最大1日1,500mg 分2〜3"},
      {ccr:[30,45], dose:"有益性>危険性と判断される場合のみ。少量より開始、最大1日750mg 分2〜3"}
    ], hd:"禁忌", pd:"禁忌", dialyzable:"○", danger:true, caution:true,
    note:"ヨード造影剤投与後48時間はeGFR30〜60では再開しない（乳酸アシドーシスリスク）" },
  { name:"シタグリプチン", brand:"ジャヌビア錠", category:"糖尿病薬(DPP-4阻害薬)",
    normal:"1日1回50mg、最大1日1回100mg",
    ranges:[
      {ccr:[50,Infinity], dose:"通常用量"},
      {ccr:[30,50], dose:"1日1回25mg、最大1日1回50mg（AUCは健常者の2.3倍）"},
      {ccr:[0,30], dose:"1日1回12.5mg、最大1日1回25mg（AUCは健常者の3.8〜4.5倍）"}
    ], hd:"1日1回12.5mg", pd:"同左", dialyzable:"×", caution:true },
  { name:"グリベンクラミド", brand:"オイグルコン錠", category:"糖尿病薬(SU薬)",
    normal:"1日1.25〜2.5mg、分1〜2、最大1日10mg",
    ranges:[
      {ccr:[50,Infinity], dose:"少量から開始し、血糖値を観察しながら投与"},
      {ccr:[30,50], dose:"少量から開始し、血糖値を観察しながら投与（低血糖リスク）"}
    ], hd:"禁忌", pd:"禁忌", dialyzable:"×", danger:true, caution:true,
    note:"腎障害患者では活性代謝物が蓄積し、遷延性低血糖を起こしやすい" },
  { name:"グリメピリド", brand:"アマリール錠", category:"糖尿病薬(SU薬)",
    normal:"1日0.5〜1mgより開始、維持1日1〜4mg、最大1日6mg",
    ranges:[
      {ccr:[50,Infinity], dose:"少量から開始、血糖値モニタリング"},
      {ccr:[30,50], dose:"少量から開始（低血糖リスクあり）"}
    ], hd:"禁忌", pd:"禁忌", dialyzable:"×", danger:true, caution:true },
  // 痛風・尿酸
  { name:"アロプリノール", brand:"アロプリノール錠", category:"尿酸生成抑制薬",
    normal:"1日200〜300mg 分2〜3、食後",
    ranges:[
      {ccr:[60,Infinity], dose:"通常用量（投与量減量・投与間隔延長を考慮）"},
      {ccr:[40,60], dose:"Scr1.5〜2.5mg/dL未満では53.3mgから開始、または投与間隔延長"},
      {ccr:[0,40], dose:"禁忌（Scr2.5mg/dL以上またはCCr40未満）→横紋筋融解症リスク"}
    ], hd:"透析患者は1日1回100mg（適正尿酸値コントロールが困難な場合あり）", pd:"同左",
    dialyzable:"○", danger:true, caution:true,
    note:"腎不全患者に副作用が発現した場合は重篤な転帰をたどることがあり、死亡例あり" },
  { name:"コルヒチン", brand:"コルヒチン錠", category:"痛風発作寛解・予防薬",
    normal:"①痛風発作：1日3〜4mg 分6〜8（緩解は1日1.8mgまで）  ②家族性地中海熱：1日0.5mg 分1〜2",
    ranges:[
      {ccr:[50,Infinity], dose:"腎機能正常者と同じ"},
      {ccr:[30,50], dose:"腎機能に応じて減量（腎障害者では重篤な転帰のリスク）"}
    ], hd:"禁忌（CYP3A4強阻害薬・P-gp阻害薬との併用は特に注意）", pd:"禁忌",
    dialyzable:"×", danger:true, caution:true },
  // 免疫抑制薬
  { name:"メトトレキサート（経口）", brand:"リウマトレックスカプセル", category:"免疫抑制薬(葉酸代謝拮抗)",
    normal:"関節リウマチ：1週間6〜8mgより開始、最大1週間16mg",
    ranges:[
      {ccr:[50,Infinity], dose:"葉酸を併用し1週間4〜6mgより開始、慎重に漸増"},
      {ccr:[30,50], dose:"禁忌（副作用が強くあらわれるおそれ）"}
    ], hd:"禁忌", pd:"禁忌", dialyzable:"○", danger:true, caution:true },
  { name:"バリシチニブ", brand:"オルミエント錠", category:"免疫抑制薬(JAK阻害薬)",
    normal:"①RA・アトピー・円形脱毛症：1日1回4mg（2mgに減量可）",
    ranges:[
      {ccr:[60,Infinity], dose:"通常用量"},
      {ccr:[30,60], dose:"1日1回2mg（AUCは健常者の2.2倍）"}
    ], hd:"禁忌（AUCは健常者の4.1倍）", pd:"禁忌", dialyzable:"△", danger:true, caution:true },
  // 抗菌薬
  { name:"バンコマイシン", brand:"塩酸バンコマイシン点滴静注用", category:"抗菌薬(グリコペプチド系/抗MRSA)",
    normal:"1回0.5gを6時間毎または1回1gを12時間毎（60分以上かけて点滴）",
    ranges:[
      {ccr:[100,Infinity], dose:"初回負荷量（体重60kg）1.75g、維持1回1.25gを12時間毎"},
      {ccr:[90,100], dose:"初回負荷量（体重60kg）1.75g、維持1回1.0gを12時間毎"},
      {ccr:[80,90], dose:"初回負荷量（体重60kg）1.75g、維持1回1.0gを12時間毎"},
      {ccr:[70,80], dose:"初回負荷量（体重60kg）1.75g、維持1回0.75gを12時間毎"},
      {ccr:[60,70], dose:"初回負荷量（体重60kg）1.75g、維持1回0.75gを12時間毎"},
      {ccr:[50,60], dose:"初回負荷量（体重60kg）1.75g、維持1回0.5gを12時間毎"},
      {ccr:[40,50], dose:"初回負荷量（体重60kg）1.5g、維持1回0.5gを12時間毎"},
      {ccr:[30,40], dose:"初回負荷量（体重60kg）1.5g、維持1回0.75gを24時間毎"},
      {ccr:[20,30], dose:"腎障害発現率が高率のため代替薬考慮。使用時：初回15〜20mg/kg、以後1回7.5〜10mg/kgを24時間毎"},
      {ccr:[10,20], dose:"腎障害発現率が高率のため代替薬考慮。使用時：初回15〜20mg/kg、以後1回7.5〜10mg/kgを48〜72時間毎"}
    ], hd:"25〜30mg/kg（DW）を負荷投与、毎HD後7.5〜10mg/kg（DW）投与",
    pd:"負荷量30mg/kg腹腔内、維持1.5mg/kg/バッグ腹腔内（間歇）", dialyzable:"△", caution:true,
    note:"TDM必須。目標トラフ：非複雑性15〜30μg/mL、複雑性20〜40μg/mL" },
  { name:"テイコプラニン", brand:"注射用タゴシッド", category:"抗菌薬(グリコペプチド系/抗MRSA)",
    normal:"初日400〜800mg 分2、以後1日1回200〜400mgを30分以上かけて点滴",
    ranges:[
      {ccr:[60,Infinity], dose:"通常用量（TDMを実施）"},
      {ccr:[30,60], dose:"目標トラフ15〜30μg/mL：1回6.7mg/kgを24時間毎（3日間負荷後）"},
      {ccr:[0,30], dose:"目標トラフ15〜30μg/mL：1回6mgを48時間毎、HDはHD後"}
    ], hd:"1回6mg/kgを48時間毎、HDはHD後  PD：1回4mg/kgを48時間毎",
    pd:"負荷100mg/L、維持20mg/L", dialyzable:"×", caution:true,
    note:"TDM必須。AUCは健常者の2〜3倍" },
  { name:"レボフロキサシン（経口）", brand:"クラビット錠・細粒", category:"抗菌薬(ニューキノロン系)",
    normal:"1日1回500mg",
    ranges:[
      {ccr:[50,Infinity], dose:"初日500mgを1回、以後1回250mgを24時間毎"},
      {ccr:[20,50], dose:"初日500mgを1回、以後1回250mgを48時間毎または週3回HD後"}
    ], hd:"初日500mgを1回、以後1回250mgを48時間毎またはHD後",
    pd:"経口250mg/dayまたは500mgを48時間毎", dialyzable:"△", caution:true,
    note:"腎機能低下患者では痙攣・低血糖・腱障害のリスクに留意" },
  { name:"セフェピム", brand:"セフェピム塩酸塩静注用", category:"抗菌薬(第四世代セフェム系)",
    normal:"①一般感染症：1日1〜2g 分2  ②発熱性好中球減少症：1日4g 分2",
    ranges:[
      {ccr:[60,Infinity], dose:"①1回0.5〜1gを12時間毎  ②1回1gを12時間毎"},
      {ccr:[30,60], dose:"①1回0.5〜1gを24時間毎  ②1回2gを12〜24時間毎"},
      {ccr:[11,30], dose:"①1回0.5gを24時間毎  ②1回0.5gを24時間毎"},
      {ccr:[0,11], dose:"①1回0.25〜0.5gを24時間毎  ②1回0.5gを24時間毎（添）"}
    ], hd:"①1回0.25〜0.5gを24時間毎、HDはHD後に投与。必要に応じて初回1g負荷投与",
    pd:"腹腔内：負荷0.5g/L、維持0.125g/L", dialyzable:"○", caution:true,
    note:"腎機能低下で減量しなかった場合、痙攣・意識障害などの精神・神経症状が現れやすい" },
  { name:"イミペネム・シラスタチン", brand:"チエナム点滴静注用", category:"抗菌薬(カルバペネム系)",
    normal:"1日0.5〜1.0gを分2〜3（30分以上かけて）、重症例は1日2gまで増量可",
    ranges:[
      {ccr:[70,Infinity], dose:"通常用量"},
      {ccr:[41,70], dose:"1回0.25〜0.5gを8時間毎（菌のMICによってはより高用量も検討）"},
      {ccr:[21,41], dose:"1回0.125〜0.25gを12時間毎（他剤選択が望ましい）"},
      {ccr:[0,21], dose:"痙攣副作用リスクが高く他剤を優先。使用する場合は1回0.25gを24時間毎"}
    ], hd:"1回0.25gを24時間毎、HDはHD後  PD：バッグ交換交互で500mg（腹腔内間歇）",
    pd:"維持50mg/L（腹腔内連続）", dialyzable:"○", caution:true },
  { name:"ゲンタマイシン", brand:"ゲンタシン注", category:"抗菌薬(アミノグリコシド系)",
    normal:"1日3〜5mg/kgを分3〜4、筋注または30分〜2時間かけて点滴",
    ranges:[
      {ccr:[80,Infinity], dose:"重症(MIC=2)：7mg/kgを24時間毎、軽中等症(MIC≦1)：5mg/kgを24時間毎"},
      {ccr:[70,80], dose:"重症：5mg/kgを24時間毎、軽中等症：4mg/kgを24時間毎"},
      {ccr:[60,70], dose:"重症：5mg/kgを24時間毎、軽中等症：4mg/kgを24時間毎"},
      {ccr:[50,60], dose:"重症：4mg/kgを24時間毎、軽中等症：3.5mg/kgを24時間毎"},
      {ccr:[40,50], dose:"重症：4mg/kgを24時間毎、軽中等症：2.5mg/kgを24時間毎"},
      {ccr:[30,40], dose:"重症：5mg/kgを48時間毎、軽中等症：2.5mg/kgを24時間毎"},
      {ccr:[20,30], dose:"重症：4mg/kgを48時間毎、軽中等症：4mg/kgを48時間毎"},
      {ccr:[10,20], dose:"重症：3mg/kgを48時間毎、軽中等症：3mg/kgを48時間毎"}
    ], hd:"2mg/kg（軽中等症）または2.5〜3mg/kg（重症）を負荷投与、維持1.7mg/kgを毎HD後",
    pd:"2mg/kg/day（CAPD、無尿）または2.5mg/kg（尿量あり）を1日1回静注", dialyzable:"○", caution:true,
    note:"TDM必須。目標：ピーク（重症）15〜20μg/mL、トラフ<1μg/mL（軽中等症ピーク8〜10μg/mL）。高用量は5日以内" },
  // オピオイド
  { name:"モルヒネ塩酸塩（経口）", brand:"オプソ内服液・MSコンチン錠など", category:"オピオイド(麻薬)",
    normal:"経口：1日20〜120mg 分2〜4",
    ranges:[
      {ccr:[60,Infinity], dose:"75%に減量"},
      {ccr:[30,60], dose:"eGFR<30では避けるべき。やむを得ない場合は低用量・短期間"},
      {ccr:[0,30], dose:"50%に減量。活性代謝物の蓄積性考慮、慢性疼痛管理には他剤考慮"}
    ], hd:"50%に減量（使用は慎重）", pd:"同左", dialyzable:"×", danger:true, caution:true,
    note:"代謝・排泄が遅延し副作用のおそれあり" },
  { name:"トラマドール（速放錠）", brand:"トラマールOD錠", category:"オピオイド(非麻薬)",
    normal:"1日100〜300mgを分4、最大1回100mg、最大1日400mg（75歳以上は最大1日300mg）",
    ranges:[
      {ccr:[30,Infinity], dose:"通常用量"},
      {ccr:[0,30], dose:"eGFR<30では慎重投与（トラマドール・M1のAUCはそれぞれ健常者の2.0、2.2倍）"}
    ], hd:"投与間隔を延長するなど慎重に投与", pd:"同左", dialyzable:"×", caution:true },
  // 抗ヘルペス薬
  { name:"バラシクロビル", brand:"バルトレックス錠・顆粒", category:"抗ウイルス薬(抗ヘルペス)",
    normal:"①帯状疱疹：1回1,000mgを1日3回  ②単純疱疹：1回500mgを1日2回",
    ranges:[
      {ccr:[50,Infinity], dose:"①1回1,000mgを12時間毎  ②1回500mgを12時間毎"},
      {ccr:[30,50], dose:"①1回1,000mgを24時間毎  ②1回500mgを24時間毎"},
      {ccr:[10,30], dose:"①②1回500mgを24時間毎"}
    ], hd:"①1回体重55kg以上800mg・40〜55kg600mg・40kg未満400mg、HDはHD後  ②③1回200mgを1日1〜2回",
    pd:"同左", dialyzable:"○", caution:true,
    note:"腎機能低下患者に減量しなかった場合、精神神経障害・意識障害の危険性が高い。安全面から他剤を優先" },
  { name:"アシクロビル（注射）", brand:"ゾビラックス点滴静注用", category:"抗ウイルス薬(抗ヘルペス)",
    normal:"1回5mg/kgを8時間毎に1時間以上かけて点滴（脳炎・髄膜炎は1回10mg/kgまで）",
    ranges:[
      {ccr:[50,Infinity], dose:"通常用量"},
      {ccr:[25,50], dose:"1回5mg/kgを12時間毎"},
      {ccr:[10,25], dose:"1回5mg/kgを24時間毎"},
      {ccr:[0,10], dose:"1回2.5mg/kgを24時間毎"}
    ], hd:"1回2.5mg/kgを24時間毎、HDはHD後", pd:"同左", dialyzable:"○", caution:true },
  // 抗インフルエンザ薬
  { name:"オセルタミビル", brand:"タミフルカプセル・ドライシロップ", category:"抗インフルエンザ薬",
    normal:"治療：1回75mgを1日2回（5日間）  予防：1回75mgを1日1回（7〜10日間）",
    ranges:[
      {ccr:[30,Infinity], dose:"通常用量"},
      {ccr:[10,30], dose:"治療：1日1回75mg（5日間）  予防：1回75mgを隔日（4〜5回）"}
    ], hd:"治療：1回75mgを単回  予防：初回75mg、2回のHD後に75mg追加",
    pd:"初回75mg、7日目に75mg追加", dialyzable:"○", caution:true },
  // フルコナゾール
  { name:"フルコナゾール（経口）", brand:"ジフルカンカプセル・ドライシロップ", category:"抗真菌薬(アゾール系)",
    normal:"①カンジダ症：1日1回50〜100mg  ②クリプトコッカス症：1日1回50〜200mg  ③深在性真菌症予防：1日1回400mg",
    ranges:[
      {ccr:[50,Infinity], dose:"通常用量（維持量として1日400mgを目安）"},
      {ccr:[0,50], dose:"①②③50%に減量"}
    ], hd:"①②③HD終了後に通常用量", pd:"腹腔内間歇：150〜200mgを24〜48時間毎",
    dialyzable:"○", caution:true },
  // ST合剤
  { name:"ST合剤（経口）", brand:"バクタ配合錠・バクトラミン配合錠など", category:"抗菌薬(ST合剤)",
    normal:"①一般感染症：1日4錠（T換算320mg）分2  ②ニューモシスチス肺炎治療：1日9〜12錠 分3〜4",
    ranges:[
      {ccr:[30,Infinity], dose:"通常用量"},
      {ccr:[15,30], dose:"①②通常の1/2量"}
    ], hd:"②治療：1回3錠（T換算240mg）を1日2回  発症抑制：1回1錠を週3回、HDはHD後",
    pd:"同左", dialyzable:"○", caution:true,
    note:"トリメトプリムはクレアチニンの尿細管分泌を阻害→Scr上昇（偽性腎障害）の可能性あり。RAS阻害薬との併用で高K血症リスク増大" },
  // プレガバリン
  { name:"プレガバリン", brand:"リリカカプセル・OD錠", category:"神経障害性疼痛緩和薬",
    normal:"①神経障害性疼痛：初期1日150mg 分2→最大1日600mg  ②線維筋痛症：初期1日150mg→最大1日450mg",
    ranges:[
      {ccr:[60,Infinity], dose:"通常用量"},
      {ccr:[30,60], dose:"①初期1日75mg 分1または分3、維持1日150mg 分2〜3、最大1日300mg  ②初期1日75mg、最大1日225mg 分3（AUCは健常者の1.8倍）"},
      {ccr:[15,30], dose:"①初期1日25〜50mg 分1〜2、維持1日75mg 分1、最大1日150mg  ②最大1日100〜125mg または1日150mg 分2（AUCは健常者の3.3倍）"},
      {ccr:[0,15], dose:"①②初期1日25mg 分1、維持25〜50mg 分1、最大1日75mg（AUCは健常者の6.3倍）"}
    ], hd:"①②初期25mg 分1、維持25〜75mg 分1、最大1日150mg（HD後に補充投与）",
    pd:"同左", dialyzable:"○", caution:true,
    note:"添付文書通りの減量でも腎機能低下患者ではめまい・傾眠が起きやすい" },
  // メマンチン
  { name:"メマンチン", brand:"メマリー錠・OD錠・ドライシロップ", category:"アルツハイマー型認知症治療薬",
    normal:"1日1回5mgより開始、1週間に5mgずつ増量し維持量1日1回20mg",
    ranges:[
      {ccr:[50,Infinity], dose:"腎機能正常者と同じ"},
      {ccr:[30,50], dose:"維持量として1日1回10〜20mg（AUCは健常者の1.6〜2.0倍）"},
      {ccr:[5,30], dose:"維持量として1日1回10mgまで（AUCは健常者の2.3倍）"}
    ], hd:"維持量1日1回10mgまで", pd:"同左", dialyzable:"×", caution:true },
  // ミロガバリン
  { name:"ミロガバリン", brand:"タリージェ錠・OD錠", category:"神経障害性疼痛緩和薬",
    normal:"初期1回5mgを1日2回→有効用量1回10〜15mgを1日2回",
    ranges:[
      {ccr:[60,Infinity], dose:"通常用量"},
      {ccr:[30,60], dose:"初期1回2.5mgを1日2回、有効用量1回5〜7.5mgを1日2回（AUCは健常者の2.0倍）"},
      {ccr:[0,30], dose:"初期1日1回2.5mg、有効用量1日1回5〜7.5mg（AUCは健常者の4.2倍）"}
    ], hd:"禁忌（AUCは健常者の5.7倍）", pd:"禁忌", dialyzable:"△", danger:true, caution:true },
  // シタグリプチン週1回
  { name:"トレラグリプチン", brand:"ザファテック錠", category:"糖尿病薬(DPP-4阻害薬・週1回)",
    normal:"1回100mgを1週間に1回",
    ranges:[
      {ccr:[50,Infinity], dose:"通常用量"},
      {ccr:[30,50], dose:"1回50mgを1週間に1回（AUCは健常者の約2.1倍）"},
      {ccr:[0,30], dose:"1回25mgを1週間に1回（AUCは健常者の3.0〜3.7倍）"}
    ], hd:"1回25mgを1週間に1回", pd:"同左", dialyzable:"×", caution:true },
  // レナリドミド
  { name:"レナリドミド", brand:"レブラミドカプセル", category:"抗腫瘍薬(サリドマイド関連)",
    normal:"①多発性骨髄腫：1日1回25mg（21日間投与7日間休薬）  ②骨髄異形成症候群：1日1回10mg",
    ranges:[
      {ccr:[60,Infinity], dose:"通常用量"},
      {ccr:[30,60], dose:"①1日1回10mgで開始、2サイクル後に15mgまで増量可  ②1日1回5mg"}
    ], hd:"①CCr30〜50mL/minでは開始1日1回200mg（特殊）", pd:"同左", dialyzable:"○", caution:true },
  // ワルファリン
  { name:"ワルファリンカリウム", brand:"ワーファリン錠・顆粒", category:"抗凝固薬(クマリン系)",
    normal:"PT-INRで投与量を決定。初回通常1日1回1〜5mg",
    ranges:[
      {ccr:[30,Infinity], dose:"PT-INRのモニタリングで調整（非弁膜症性心房細動：PT-INR 1.6〜2.6、弁膜症・機械弁：2.0〜3.0）"},
      {ccr:[0,30], dose:"PT-INRモニタリングで調整。CCr30mL/min未満かつ非透析末期腎障害ではDOACを考慮"}
    ], hd:"心房細動アブレーション周術期・機械弁術後・脳梗塞既往を除き、維持透析患者への使用は推奨されない",
    pd:"同左", dialyzable:"×", caution:true,
    note:"透析患者へのワルファリン使用は推奨されない（特定の適応を除く）" },
  // ビスホスホネート
  { name:"アレンドロン酸（参考：リセドロン酸）", brand:"ベネット錠・アクトネル錠", category:"ビスホスホネート製剤",
    normal:"①骨粗鬆症：1日1回2.5mgまたは週1回17.5mg  ②骨ページェット病：1日1回17.5mg（8週間）",
    ranges:[
      {ccr:[35,Infinity], dose:"通常用量（排泄が遅延するおそれあり）"},
      {ccr:[0,35], dose:"禁忌（重篤な腎障害患者には排泄が阻害されるおそれ）"}
    ], hd:"禁忌", pd:"禁忌", dialyzable:"×", danger:true, caution:true },
  // フェノフィブラート
  { name:"フェノフィブラート", brand:"トライコア錠・リピディル錠", category:"フィブラート系薬剤",
    normal:"1日1回106.6〜160mg 食後、最大1日160mg",
    ranges:[
      {ccr:[40,Infinity], dose:"通常用量"},
      {ccr:[0,40], dose:"禁忌（横紋筋融解症リスク、CCr40mL/min未満）"}
    ], hd:"禁忌", pd:"禁忌", dialyzable:"×", danger:true, caution:true,
    note:"腎障害患者では急激な腎機能の悪化を伴う横紋筋融解症あり" },
  // バレニクリン
  { name:"バレニクリン", brand:"チャンピックス錠", category:"禁煙補助薬",
    normal:"1〜3日目は0.5mgを1日1回食後、4〜7日目は0.5mgを1日2回、8日目以降は1mgを1日2回（12週間）",
    ranges:[
      {ccr:[30,Infinity], dose:"腎機能正常者と同じ"},
      {ccr:[0,30], dose:"1日1回0.5mgで開始し、必要に応じ最大1回0.5mgを1日2回（HD患者は最大1日1回0.5mg）"}
    ], hd:"忍容性があれば最大1日1回0.5mg", pd:"末期腎不全患者には推奨されない", dialyzable:"×", caution:true },
// タクロリムス
  { name:"タクロリムス", brand:"プログラフカプセル・顆粒",
    category:"免疫抑制薬",
    normal:"適応・トラフ値に応じて調節",
    ranges:[
      {ccr:[0,Infinity], dose:"腎機能による定型的減量基準なし。TDMにより調整"}
    ],
    hd:"透析による除去なし。通常は追加投与不要",
    pd:"HDに準じる",
    dialyzable:"×",
    caution:true,
    note:"腎毒性あり。血中濃度(TDM)と腎機能を定期的に確認"
  },
// メトホルミン
  { name:"メトホルミン", brand:"メトグルコ錠", category:"糖尿病薬(ビグアナイド)",
    normal:"1日500〜1500mg 分2〜3、最大2250mg",
    ranges:[
      {ccr:[60,Infinity], dose:"通常用量"},
      {ccr:[45,60], dose:"慎重投与"},
      {ccr:[30,45], dose:"最大750mg/日程度まで"},
      {ccr:[0,30], dose:"禁忌"}
    ],
    hd:"禁忌", pd:"禁忌", dialyzable:"○", danger:true, caution:true,
    note:"乳酸アシドーシスに注意" },

// アムロジピン
  { name:"アムロジピン", brand:"ノルバスク錠・OD錠", category:"降圧薬(Ca拮抗薬)",
    normal:"1日1回2.5〜5mg、最大10mg",
    ranges:[
      {ccr:[0,Infinity], dose:"通常用量"}
    ],
    hd:"通常用量", pd:"通常用量", dialyzable:"×" },

// アトルバスタチン
  { name:"アトルバスタチン", brand:"リピトール錠", category:"脂質異常症治療薬",
    normal:"1日1回10mg、重症例20mgまで",
    ranges:[
      {ccr:[0,Infinity], dose:"通常用量"}
    ],
    hd:"通常用量", pd:"通常用量", dialyzable:"×" },

// アピキサバン
  { name:"アピキサバン", brand:"エリキュース錠", category:"抗凝固薬(DOAC)",
    normal:"通常5mg 1日2回",
    ranges:[
      {ccr:[30,Infinity], dose:"通常用量"},
      {ccr:[15,30], dose:"慎重投与"},
      {ccr:[0,15], dose:"推奨されない"}
    ],
    hd:"十分なエビデンスなし", pd:"十分なエビデンスなし",
    dialyzable:"△", caution:true,
    note:"年齢・体重・Crにより減量基準あり" },

// アロプリノール
  { name:"アロプリノール", brand:"ザイロリック錠", category:"高尿酸血症治療薬",
    normal:"1日100〜300mg 分1〜3",
    ranges:[
      {ccr:[50,Infinity], dose:"100〜300mg/日"},
      {ccr:[30,50], dose:"100mg/日"},
      {ccr:[10,30], dose:"50〜100mg/日"},
      {ccr:[0,10], dose:"50mg隔日"}
    ],
    hd:"HD後100mg", pd:"50〜100mg/日",
    dialyzable:"○", caution:true,
    note:"重症薬疹(SJS/TEN)に注意" },
// エンパグリフロジン
  { name:"エンパグリフロジン", brand:"ジャディアンス錠", category:"糖尿病薬(SGLT2阻害薬)",
    normal:"1日1回10mg、必要に応じ25mg",
    ranges:[
      {ccr:[20,Infinity], dose:"通常用量"},
      {ccr:[0,20], dose:"新規開始は推奨されない"}
    ],
    hd:"推奨されない", pd:"推奨されない", dialyzable:"×", caution:true,
    note:"脱水・尿路感染症に注意" },

// ダパグリフロジン
  { name:"ダパグリフロジン", brand:"フォシーガ錠", category:"糖尿病薬(SGLT2阻害薬)",
    normal:"1日1回5〜10mg",
    ranges:[
      {ccr:[25,Infinity], dose:"通常用量"},
      {ccr:[0,25], dose:"新規開始は推奨されない"}
    ],
    hd:"推奨されない", pd:"推奨されない", dialyzable:"×", caution:true },

// リナグリプチン
  { name:"リナグリプチン", brand:"トラゼンタ錠", category:"糖尿病薬(DPP-4阻害薬)",
    normal:"1日1回5mg",
    ranges:[
      {ccr:[0,Infinity], dose:"通常用量"}
    ],
    hd:"通常用量", pd:"通常用量", dialyzable:"×" },

// テルミサルタン
  { name:"テルミサルタン", brand:"ミカルディス錠", category:"降圧薬(ARB)",
    normal:"1日1回20〜80mg",
    ranges:[
      {ccr:[0,Infinity], dose:"通常用量"}
    ],
    hd:"通常用量", pd:"通常用量", dialyzable:"×",
    caution:true, note:"高カリウム血症に注意" },

// ロサルタン
  { name:"ロサルタン", brand:"ニューロタン錠", category:"降圧薬(ARB)",
    normal:"1日1回25〜100mg",
    ranges:[
      {ccr:[0,Infinity], dose:"通常用量"}
    ],
    hd:"通常用量", pd:"通常用量", dialyzable:"×",
    caution:true, note:"高カリウム血症に注意" },

// フロセミド
  { name:"フロセミド", brand:"ラシックス錠", category:"利尿薬(ループ利尿薬)",
    normal:"1日20〜80mg",
    ranges:[
      {ccr:[0,Infinity], dose:"通常用量（腎機能低下時は増量が必要なことあり）"}
    ],
    hd:"残腎機能があれば使用可", pd:"使用可", dialyzable:"×" },

// ロスバスタチン
  { name:"ロスバスタチン", brand:"クレストール錠", category:"脂質異常症治療薬",
    normal:"1日1回2.5〜10mg",
    ranges:[
      {ccr:[30,Infinity], dose:"通常用量"},
      {ccr:[0,30], dose:"開始2.5mg、最大5mg"}
    ],
    hd:"少量より開始", pd:"少量より開始", dialyzable:"×",
    caution:true },

// クロピドグレル
  { name:"クロピドグレル", brand:"プラビックス錠", category:"抗血小板薬",
    normal:"1日1回75mg",
    ranges:[
      {ccr:[0,Infinity], dose:"通常用量"}
    ],
    hd:"通常用量", pd:"通常用量", dialyzable:"×" },

// ファモチジン
  { name:"ファモチジン", brand:"ガスター錠", category:"消化性潰瘍治療薬(H2RA)",
    normal:"1日2回20mg",
    ranges:[
      {ccr:[60,Infinity], dose:"通常用量"},
      {ccr:[30,60], dose:"1回20mg 1日1回"},
      {ccr:[0,30], dose:"1回10mg 1日1回"}
    ],
    hd:"HD後投与", pd:"減量して使用", dialyzable:"○",
    caution:true },

// フェブキソスタット
  { name:"フェブキソスタット", brand:"フェブリク錠", category:"高尿酸血症治療薬",
    normal:"1日1回10mgより開始、維持20〜60mg",
    ranges:[
      {ccr:[0,Infinity], dose:"通常用量"}
    ],
    hd:"通常は10〜20mg", pd:"少量より開始", dialyzable:"×" },
];
