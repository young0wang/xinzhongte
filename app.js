(() => {
  const STORAGE_KEY = "xzt-review-system-v1";
  const topics = [{"id":"topic-1","number":1,"title":"什么是中国特色社会主义？","fullTitle":"1. 什么是中国特色社会主义？","body":"1. 中国特色社会主义是科学社会主义的基本原则与中国实际相结合的产物，具有鲜明的时代特征和中国特色。中国共产党领导是中国特色社会主义最本质的特征。\n\n2. 中国特色社会主义包含中国特色社会主义道路、中国特色社会主义理论、中国特色社会主义制度、中国特色社会主义文化四个层面，是经过全党全国各族人民长期奋斗取得的，也是经过长期实践检验的科学的产物。\n\n3. 中国特色社会主义是是历史的结论、人民的选择，是当代中国发展进步的根本方向和核心指导思想。","keywords":["中国特色社会主义","中国共产党领导"]},{"id":"topic-2","number":2,"title":"习近平法治思想的科学内涵。","fullTitle":"2. 习近平法治思想的科学内涵。","body":"习近平法治思想从我国革命、建设、改革的伟大实践出发，着眼全面建设社会主义现代化国家、实现中华民族伟大复兴的奋斗目标，深刻回答了新时代为什么实行全面依法治国、怎样实行全面依法治国等一系列重大问题，是一个内涵丰富、论述深刻、逻辑严密、体系完备、博大精深的法治思想理论体系。概括起来，其核心要义为“十一个坚持”，即\n\n1. 坚持党对全面依法治国的领导；\n\n2. 坚持以人民为中心；\n\n3. 坚持中国特色社会主义法治道路；\n\n4. 坚持依宪治国、依宪执政；\n\n5. 坚持在法治轨道上推进国家治理体系和治理能力现代化；\n\n6. 坚持建设中国特色社会主义法治体系；\n\n7. 坚持依法治国、依法执政、依法行政，共同推进法治国家、法治政府、法治社会一体建设；\n\n8. 坚持全面推进科学立法、严格执法、公正司法、全民守法；\n\n9. 坚持统筹推进国内法治和涉外法治；\n\n10. 坚持建设德才兼备的高素质法治工作队伍；\n\n11. 坚持抓住领导干部这个“关键少数”。\n\n这“十一个坚持”， 是建设社会主义法治国家的重大战略思想，是全面依法治国的根本遵循和行动指南。","keywords":["中国特色社会主义","习近平法治思想","法治道路","依法治国","国家治理","十一个坚持","关键少数"]},{"id":"topic-3","number":3,"title":"中国特色社会主义基本经济制度的内涵。","fullTitle":"3. 中国特色社会主义基本经济制度的内涵。","body":"中国特色社会主义基本经济制度，主要包括以下三个方面：\n\n一是社会主义初级阶段的生产资料所有制；\n\n二是社会主义初级阶段的收入分配制度；\n\n三是社会主义市场经济体制。\n\n中国特色社会主义基本经济制度的三个重要组成部分，相互联系、相互支持、相互促进。","keywords":["中国特色社会主义","基本经济制度"]},{"id":"topic-4","number":4,"title":"习近平外交思想的核心要义：","fullTitle":"4. 习近平外交思想的核心要义：","body":"以“十个坚持”为总体框架和核心要义：\n\n一是坚持以维护党中央权威为统领加强党对对外工作的集中统一领导；\n\n二是坚持以实现中华民族伟大复兴为使命推进中国特色大国外交；\n\n三是坚持以维护世界和平、促进共同发展为宗旨推动构建人类命运共同体；\n\n四是坚持以中国特色社会主义为根本增强战略自信；\n\n五是坚持以共商共建共享为原则推动“一带一路”建设；\n\n六是坚持以相互尊重、合作共赢为基础走和平发展道路；\n\n七是坚持以深化外交布局为依托打造全球伙伴关系；\n\n八是坚持以公平正义为理念引领全球治理体系改革；\n\n九是坚持以国家核心利益为底线维护国家主权、安全、发展利益；\n\n十是坚持以对外工作优良传统和时代特征相结合为方向塑造中国外交独特风范。\n\n注：构建人类命运共同体是习近平外交思想的核心理念。","keywords":["中国特色社会主义","习近平外交思想","人类命运共同体","共同体","十个坚持","一带一路"]},{"id":"topic-5","number":5,"title":"新时代中国特色社会主义生态文明理论包含的主要内容。","fullTitle":"5. 新时代中国特色社会主义生态文明理论包含的主要内容。","body":"主要内容集中体现为“十个坚持”：\n\n一是坚持党对生态文明建设的全面领导；\n\n二是坚持生态兴则文明兴；\n\n三是坚持人与自然和谐共生；\n\n四是坚持绿水青山就是金山银山；\n\n五是坚持良好生态环境是最普惠的民生福祉；\n\n六是坚持绿色发展是发展观的深刻革命；\n\n七是坚持统筹山水林田湖草沙系统治理；\n\n八是坚持用最严格制度最严密法治保护生态环境；\n\n九是坚持把建设美丽中国转化为全体人民自觉行动；\n\n十是坚持共谋全球生态文明建设之路。","keywords":["中国特色社会主义","生态文明","绿水青山就是金山银山","人与自然和谐共生","十个坚持"]},{"id":"topic-6","number":6,"title":"世界百年未有之大变局呈现的新特征。","fullTitle":"6. 世界百年未有之大变局呈现的新特征。","body":"世界百年未有之大变局加速演进。当今世界呈现出一系列前所未有的新现象、新特征。一是国际力量对比发生的革命性变化前所未有。二是新一轮科技革命和产业变革带来的新陈代谢和激烈竞争前所未有。三是全球治理体系与国际形势变化的不适应、不对称前所未有。\n\n当前，世界之变、时代之变、历史之变正以前所未有的方式展开。一方面，世界多极化、经济全球化、社会信息化、文化多样化深入发展，国际力量对比深刻调整，和平、发展、合作、共赢的历史潮流不可阻挡。另一方面，和平赤字、发展赤字、安全赤字、治理赤字不断加重，世界面临的不稳定性不确定性突出。","keywords":["百年未有之大变局"]},{"id":"topic-7","number":7,"title":"中国特色社会主义法治道路应坚持的基本原则。","fullTitle":"7. 中国特色社会主义法治道路应坚持的基本原则。","body":"1. 必须坚持中国共产党领导；\n\n2. 必须坚持以人民为中心；\n\n3. 必须坚持法律面前人人平等；\n\n4. 必须坚持依法治国和以德治国相结合；\n\n5. 必须坚持从中国实际出发。","keywords":["中国特色社会主义","中国共产党领导","法治道路","依法治国"]},{"id":"topic-8","number":8,"title":"坚持党对人民军队的绝对领导的原因。","fullTitle":"8. 坚持党对人民军队的绝对领导的原因。","body":"1. 党对人民军队的绝对领导是人民军队建军之本、强军之魂。\n\n2. 坚持党对人民军队的绝对领导，是马克思主义建党建军的一条基本原则。\n\n3. 坚持党对人民军队的绝对领导，是我们党长期以来建军治军经验教训的深刻总结。\n\n4. 建设强大人民军队，必须毫不动摇坚持党对人民军队绝对领导的根本原则和制度，坚持人民军队最高领导权和指挥权属于党中央、中央军委，全面深入贯彻军委主席负责制。","keywords":["人民军队"]},{"id":"topic-9","number":9,"title":"推进中华优秀传统文化创造性转化、创新性发展的核心原则及实践路径。","fullTitle":"9. 推进中华优秀传统文化创造性转化、创新性发展的核心原则及实践路径。","body":"核心原则：\n\n坚持“两个结合”：（1）坚持马克思主义基本原理同中国具体实际相结合\n\n（2）坚持马克思主义基本原理同中华优秀传统文化相结合\n\n实践路径：\n\n1. 坚持人民性：要以服务人民为出发点\n\n2. 立足经典性：要以古为今用、推陈出新为着力点\n\n3. 秉持包容性：要以吸纳世界文化精华为生发点\n\n4. 体现丰富性：要以多渠道、多样化创新表达形式与途径为突破点\n\n整理的同学在课本上没有查找到关于“两创”的准确答案，整理要点来源：\n\n课本：“只有坚持‘两个结合’，我们党才能掌握宣传思想文化上的主动，不断开辟马克思主义中国化时代化新境界，不断推动中华优秀传统文化创造性转化、创新性发展，创造属于我们这个时代的新文化。”\n\n<http://theory.people.com.cn/n1/2024/0522/c40531-40240867.html>","keywords":["中华优秀传统文化","创造性转化","创新性发展","两个结合","两创"]},{"id":"topic-10","number":10,"title":"“四个伟大”之间的内在逻辑关系。","fullTitle":"10. “四个伟大”之间的内在逻辑关系。","body":"1. 伟大梦想是目标\n\n2. 伟大斗争是动力\n\n3. 伟大工程是保证\n\n4. 伟大事业是路径。\n\n“四个伟大”中，起决定性作用的是新时代党的建设新的伟大工程。","keywords":["四个伟大"]},{"id":"topic-11","number":11,"title":"社会主义协商民主的具体实现形式。","fullTitle":"11. 社会主义协商民主的具体实现形式。","body":"政党协商、人大协商、政府协商、政协协商、人民团体协商、基层协商以及社会组织协商。","keywords":["协商民主"]},{"id":"topic-12","number":12,"title":"社会治理体系的核心内涵与构成要素。","fullTitle":"12. 社会治理体系的核心内涵与构成要素。","body":"核心内涵：主体多元性、目标公共性、方式创新性；以人民为中心，打造共建共治共享格局。\n\n1. 领导主体：坚持党的领导，发挥党总揽全局、协调各方的领导核心作用。\n\n2. 治理格局：构建党委领导、政府负责、民主协商、社会协同、公众参与、法治保障、科技支撑的社会治理格局。\n\n3. 价值目标：以人民为中心，维护人民根本利益，化解社会矛盾，保障人民安居乐业。\n\n4. 治理方式：坚持系统治理、依法治理、综合治理、源头治理。\n\n5. 重点任务：健全基层治理体系，防范化解社会风险，建设平安中国。\n\n构成要素：\n\n党委领导、政府负责、社会协同、公众参与、法治保障、科技支撑","keywords":["社会治理"]},{"id":"topic-13","number":13,"title":"构建人类命运共同体的核心内涵及实践路径。","fullTitle":"13. 构建人类命运共同体的核心内涵及实践路径。","body":"核心内涵：\n\n建设持久和平、普遍安全、共同繁荣、开放包容、清洁美丽的世界。\n\n实践路径：\n\n1. 坚持对话协商，建设持久和平的世界\n\n2. 坚持共建共享，建设普遍安全的世界\n\n3. 坚持合作共赢，建设共同繁荣的世界\n\n4. 坚持交流互鉴，建设开放包容的世界\n\n5. 坚持绿色低碳，建设清洁美丽的世界","keywords":["人类命运共同体","共同体"]},{"id":"topic-14","number":14,"title":"生态环境和经济发展关系的三个阶段。","fullTitle":"14. 生态环境和经济发展关系的三个阶段。","body":"1. 第一个阶段是用绿水青山去换金山银山，不考虑或者很少考虑环境的承载能力，一味索取资源。\n\n2. 第二个阶段是既要金山银山，也要保住绿水青山，这个阶段经济发展和资源匮乏、环境恶化之间的矛盾开始凸显出来，人们意识到环境是生存发展的根本，要留得青山在，才能有柴烧。\n\n3. 第三个阶段是认识到绿水青山可以源源不断地带来金山银山，绿水青山本身就是金山银山，就是人的全面发展的重要内容。\n\n4. 这三个阶段，是经济増长方式转变的过程，是发展观念不断进步的过程，也是人与自然关系不断调整、趋向和谐的过程。","keywords":[]},{"id":"topic-15","number":15,"title":"绿水青山就是金山银山的辩证统一关系。","fullTitle":"15. 绿水青山就是金山银山的辩证统一关系。","body":"绿水青山就是金山银山，是重要的发展理念，是可持续发展的内在要求，也是推进现代化建设的重要原则。绿水青山就是金山银山，阐明了生态环境保护和经济发展的辩证统一关系，指明了实现发展和保护协同共生的新路径。\n\n1. 发展是人类永恒的主题。\n\n2. 绿水青山与金山银山相辅相成、不可分割。\n\n3. 绿水青山就是生产力。\n\n4. 绿水青山不仅蕴含着无穷的经济价值，还能够源源不断创造综合效益，实现经济社会可持续发展。\n\n5. 绿水青山就是金山银山的理念符合人类社会发展规律，顺应人民群众对美好生活的期盼，已成为全党全社会的共识和行动。","keywords":["绿水青山就是金山银山"]},{"id":"topic-16","number":16,"title":"“两个结合”","fullTitle":"16. “两个结合”","body":"1. 坚持马克思主义基本原理同中国具体实际相结合\n\n2. 坚持马克思主义基本原理同中华优秀传统文化相结合\n\n（“四个伟大”见10）\n\n**“四个自信”：**道路自信、理论自信、制度自信、文化自信\n\n**“六个必须坚持”：**坚持人民至上；坚持自信自立；坚持守正创新；坚持问题导向；坚持系统观念；坚持胸怀天下","keywords":["中华优秀传统文化","四个伟大","两个结合","四个自信","六个必须坚持"]}];
  const quiz = [{"id":"quiz-1","topicId":"topic-1","type":"choice","prompt":"“什么是中国特色社会主义？”这一专题最核心的关键词是？","answer":"中国特色社会主义","options":["依法治国","中国特色社会主义","习近平法治思想","法治道路"],"explanation":"本题来自专题 1：什么是中国特色社会主义？。核心复习时应先抓住“中国特色社会主义”，再展开具体论述。"},{"id":"cloze-1","topicId":"topic-1","type":"fill","prompt":"填空：什么是中国特色社会主义？ 相关论述中，应重点掌握关键词“____”。","answer":"中国共产党领导","aliases":["中国特色社会主义","中国共产党领导"],"explanation":"可接受该专题中的核心关键词：中国特色社会主义、中国共产党领导。"},{"id":"quiz-2","topicId":"topic-2","type":"choice","prompt":"“习近平法治思想的科学内涵。”这一专题最核心的关键词是？","answer":"中国特色社会主义","options":["基本经济制度","中国共产党领导","中国特色社会主义","习近平外交思想"],"explanation":"本题来自专题 2：习近平法治思想的科学内涵。。核心复习时应先抓住“中国特色社会主义”，再展开具体论述。"},{"id":"cloze-2","topicId":"topic-2","type":"fill","prompt":"填空：习近平法治思想的科学内涵。 相关论述中，应重点掌握关键词“____”。","answer":"习近平法治思想","aliases":["中国特色社会主义","习近平法治思想","法治道路","依法治国","国家治理","十一个坚持","关键少数"],"explanation":"可接受该专题中的核心关键词：中国特色社会主义、习近平法治思想、法治道路、依法治国、国家治理、十一个坚持、关键少数。"},{"id":"quiz-3","topicId":"topic-3","type":"choice","prompt":"“中国特色社会主义基本经济制度的内涵。”这一专题最核心的关键词是？","answer":"中国特色社会主义","options":["中国共产党领导","法治道路","习近平法治思想","中国特色社会主义"],"explanation":"本题来自专题 3：中国特色社会主义基本经济制度的内涵。。核心复习时应先抓住“中国特色社会主义”，再展开具体论述。"},{"id":"cloze-3","topicId":"topic-3","type":"fill","prompt":"填空：中国特色社会主义基本经济制度的内涵。 相关论述中，应重点掌握关键词“____”。","answer":"基本经济制度","aliases":["中国特色社会主义","基本经济制度"],"explanation":"可接受该专题中的核心关键词：中国特色社会主义、基本经济制度。"},{"id":"quiz-4","topicId":"topic-4","type":"choice","prompt":"“习近平外交思想的核心要义：”这一专题最核心的关键词是？","answer":"中国特色社会主义","options":["中国特色社会主义","习近平法治思想","法治道路","中国共产党领导"],"explanation":"本题来自专题 4：习近平外交思想的核心要义：。核心复习时应先抓住“中国特色社会主义”，再展开具体论述。"},{"id":"cloze-4","topicId":"topic-4","type":"fill","prompt":"填空：习近平外交思想的核心要义： 相关论述中，应重点掌握关键词“____”。","answer":"习近平外交思想","aliases":["中国特色社会主义","习近平外交思想","人类命运共同体","共同体","十个坚持","一带一路"],"explanation":"可接受该专题中的核心关键词：中国特色社会主义、习近平外交思想、人类命运共同体、共同体、十个坚持、一带一路。"},{"id":"quiz-5","topicId":"topic-5","type":"choice","prompt":"“新时代中国特色社会主义生态文明理论包含的主要内容。”这一专题最核心的关键词是？","answer":"中国特色社会主义","options":["中国共产党领导","法治道路","中国特色社会主义","习近平法治思想"],"explanation":"本题来自专题 5：新时代中国特色社会主义生态文明理论包含的主要内容。。核心复习时应先抓住“中国特色社会主义”，再展开具体论述。"},{"id":"cloze-5","topicId":"topic-5","type":"fill","prompt":"填空：新时代中国特色社会主义生态文明理论包含的主要内容。 相关论述中，应重点掌握关键词“____”。","answer":"生态文明","aliases":["中国特色社会主义","生态文明","绿水青山就是金山银山","人与自然和谐共生","十个坚持"],"explanation":"可接受该专题中的核心关键词：中国特色社会主义、生态文明、绿水青山就是金山银山、人与自然和谐共生、十个坚持。"},{"id":"quiz-6","topicId":"topic-6","type":"choice","prompt":"“世界百年未有之大变局呈现的新特征。”这一专题最核心的关键词是？","answer":"百年未有之大变局","options":["百年未有之大变局","中国特色社会主义","中国共产党领导","习近平法治思想"],"explanation":"本题来自专题 6：世界百年未有之大变局呈现的新特征。。核心复习时应先抓住“百年未有之大变局”，再展开具体论述。"},{"id":"quiz-7","topicId":"topic-7","type":"choice","prompt":"“中国特色社会主义法治道路应坚持的基本原则。”这一专题最核心的关键词是？","answer":"中国特色社会主义","options":["习近平法治思想","法治道路","中国共产党领导","中国特色社会主义"],"explanation":"本题来自专题 7：中国特色社会主义法治道路应坚持的基本原则。。核心复习时应先抓住“中国特色社会主义”，再展开具体论述。"},{"id":"cloze-7","topicId":"topic-7","type":"fill","prompt":"填空：中国特色社会主义法治道路应坚持的基本原则。 相关论述中，应重点掌握关键词“____”。","answer":"中国共产党领导","aliases":["中国特色社会主义","中国共产党领导","法治道路","依法治国"],"explanation":"可接受该专题中的核心关键词：中国特色社会主义、中国共产党领导、法治道路、依法治国。"},{"id":"quiz-8","topicId":"topic-8","type":"choice","prompt":"“坚持党对人民军队的绝对领导的原因。”这一专题最核心的关键词是？","answer":"人民军队","options":["中国共产党领导","习近平法治思想","人民军队","中国特色社会主义"],"explanation":"本题来自专题 8：坚持党对人民军队的绝对领导的原因。。核心复习时应先抓住“人民军队”，再展开具体论述。"},{"id":"quiz-9","topicId":"topic-9","type":"choice","prompt":"“推进中华优秀传统文化创造性转化、创新性发展的核心原则及实践路径。”这一专题最核心的关键词是？","answer":"中华优秀传统文化","options":["中国特色社会主义","中华优秀传统文化","习近平法治思想","中国共产党领导"],"explanation":"本题来自专题 9：推进中华优秀传统文化创造性转化、创新性发展的核心原则及实践路径。。核心复习时应先抓住“中华优秀传统文化”，再展开具体论述。"},{"id":"cloze-9","topicId":"topic-9","type":"fill","prompt":"填空：推进中华优秀传统文化创造性转化、创新性发展的核心原则及实践路径。 相关论述中，应重点掌握关键词“____”。","answer":"创造性转化","aliases":["中华优秀传统文化","创造性转化","创新性发展","两个结合","两创"],"explanation":"可接受该专题中的核心关键词：中华优秀传统文化、创造性转化、创新性发展、两个结合、两创。"},{"id":"quiz-10","topicId":"topic-10","type":"choice","prompt":"““四个伟大”之间的内在逻辑关系。”这一专题最核心的关键词是？","answer":"四个伟大","options":["四个伟大","中国共产党领导","中国特色社会主义","习近平法治思想"],"explanation":"本题来自专题 10：“四个伟大”之间的内在逻辑关系。。核心复习时应先抓住“四个伟大”，再展开具体论述。"},{"id":"quiz-11","topicId":"topic-11","type":"choice","prompt":"“社会主义协商民主的具体实现形式。”这一专题最核心的关键词是？","answer":"协商民主","options":["中国特色社会主义","中国共产党领导","习近平法治思想","协商民主"],"explanation":"本题来自专题 11：社会主义协商民主的具体实现形式。。核心复习时应先抓住“协商民主”，再展开具体论述。"},{"id":"quiz-12","topicId":"topic-12","type":"choice","prompt":"“社会治理体系的核心内涵与构成要素。”这一专题最核心的关键词是？","answer":"社会治理","options":["社会治理","习近平法治思想","中国共产党领导","中国特色社会主义"],"explanation":"本题来自专题 12：社会治理体系的核心内涵与构成要素。。核心复习时应先抓住“社会治理”，再展开具体论述。"},{"id":"quiz-13","topicId":"topic-13","type":"choice","prompt":"“构建人类命运共同体的核心内涵及实践路径。”这一专题最核心的关键词是？","answer":"人类命运共同体","options":["习近平法治思想","人类命运共同体","中国特色社会主义","中国共产党领导"],"explanation":"本题来自专题 13：构建人类命运共同体的核心内涵及实践路径。。核心复习时应先抓住“人类命运共同体”，再展开具体论述。"},{"id":"cloze-13","topicId":"topic-13","type":"fill","prompt":"填空：构建人类命运共同体的核心内涵及实践路径。 相关论述中，应重点掌握关键词“____”。","answer":"共同体","aliases":["人类命运共同体","共同体"],"explanation":"可接受该专题中的核心关键词：人类命运共同体、共同体。"},{"id":"quiz-14","topicId":"topic-14","type":"choice","prompt":"“生态环境和经济发展关系的三个阶段。”这一专题最核心的关键词是？","answer":"生态环境和经济发展关系的三个阶段","options":["中国共产党领导","中国特色社会主义","生态环境和经济发展关系的三个阶段","习近平法治思想"],"explanation":"本题来自专题 14：生态环境和经济发展关系的三个阶段。。核心复习时应先抓住“生态环境和经济发展关系的三个阶段”，再展开具体论述。"},{"id":"quiz-15","topicId":"topic-15","type":"choice","prompt":"“绿水青山就是金山银山的辩证统一关系。”这一专题最核心的关键词是？","answer":"绿水青山就是金山银山","options":["中国特色社会主义","习近平法治思想","中国共产党领导","绿水青山就是金山银山"],"explanation":"本题来自专题 15：绿水青山就是金山银山的辩证统一关系。。核心复习时应先抓住“绿水青山就是金山银山”，再展开具体论述。"},{"id":"quiz-16","topicId":"topic-16","type":"choice","prompt":"““两个结合””这一专题最核心的关键词是？","answer":"中华优秀传统文化","options":["中华优秀传统文化","中国共产党领导","习近平法治思想","中国特色社会主义"],"explanation":"本题来自专题 16：“两个结合”。核心复习时应先抓住“中华优秀传统文化”，再展开具体论述。"},{"id":"cloze-16","topicId":"topic-16","type":"fill","prompt":"填空：“两个结合” 相关论述中，应重点掌握关键词“____”。","answer":"四个伟大","aliases":["中华优秀传统文化","四个伟大","两个结合","四个自信","六个必须坚持"],"explanation":"可接受该专题中的核心关键词：中华优秀传统文化、四个伟大、两个结合、四个自信、六个必须坚持。"}];

  const state = {
    view: "study",
    topicFilter: "all",
    currentTopic: 0,
    currentQuiz: 0,
    search: "",
    showAnswer: false,
    randomMode: false,
    data: loadState(),
  };
  state.showAnswer = Boolean(state.data.settings?.answerVisible);

  function defaultState() {
    return {
      mastered: {},
      weak: {},
      notes: {},
      quiz: {},
      settings: { noteVisible: false, answerVisible: false },
    };
  }

  function normalizeState(value) {
    const base = defaultState();
    return {
      mastered: value?.mastered || base.mastered,
      weak: value?.weak || base.weak,
      notes: value?.notes || base.notes,
      quiz: value?.quiz || base.quiz,
      settings: { ...base.settings, ...(value?.settings || {}) },
    };
  }

  function loadState() {
    try {
      return normalizeState(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    } catch {
      return defaultState();
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
  }

  function h(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function md(text) {
    const lines = String(text || "").replace(/\r\n/g, "\n").split("\n");
    let html = "";
    let list = null;
    const closeList = () => { if (list) { html += "</" + list + ">"; list = null; } };
    for (const raw of lines) {
      const line = raw.trim();
      if (!line) { continue; }
      if (/^#{1,6}\s+/.test(line)) {
        closeList();
        const level = Math.min(4, (line.match(/^#+/)[0].length || 1) + 1);
        html += "<h" + level + ">" + inline(line.replace(/^#{1,6}\s+/, "")) + "</h" + level + ">";
        continue;
      }
      if (/^\d+[.)]\s+/.test(line)) {
        if (list !== "ol") { closeList(); html += "<ol>"; list = "ol"; }
        html += "<li>" + inline(line.replace(/^\d+[.)]\s+/, "")) + "</li>";
        continue;
      }
      if (/^[-*+]\s+/.test(line)) {
        if (list !== "ul") { closeList(); html += "<ul>"; list = "ul"; }
        html += "<li>" + inline(line.replace(/^[-*+]\s+/, "")) + "</li>";
        continue;
      }
      closeList();
      html += "<p>" + inline(line) + "</p>";
    }
    closeList();
    return html;
  }

  function inline(text) {
    return h(text)
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/[“”]/g, '"')
      .replace(/《([^》]+)》/g, "<cite>《$1》</cite>");
  }

  function filteredTopics() {
    const q = state.search.trim();
    return topics.filter((topic) => {
      const byFilter = state.topicFilter === "all" || topic.id === state.topicFilter;
      const bySearch = !q || (topic.title + topic.body + topic.keywords.join(" ")).includes(q);
      return byFilter && bySearch;
    });
  }

  function currentTopic() {
    const list = filteredTopics();
    if (!list.length) return null;
    if (state.currentTopic >= list.length) state.currentTopic = 0;
    return list[state.currentTopic];
  }

  function currentQuiz() {
    if (!quiz.length) return null;
    if (state.currentQuiz >= quiz.length) state.currentQuiz = 0;
    return quiz[state.currentQuiz];
  }

  function stats() {
    const mastered = Object.keys(state.data.mastered).length;
    const weak = Object.keys(state.data.weak).length;
    const doneQuiz = Object.keys(state.data.quiz).length;
    return {
      topics: topics.length,
      mastered,
      weak,
      doneQuiz,
      progress: topics.length ? Math.round(mastered / topics.length * 100) : 0,
    };
  }

  function render() {
    const s = stats();
    document.getElementById("app").innerHTML = `
      <div class="shell">
        ${renderSidebar(s)}
        <main class="workspace">
          ${renderTopbar(s)}
          ${state.view === "study" ? renderStudy() : state.view === "quiz" ? renderQuiz() : state.view === "overview" ? renderOverview() : renderNotebook()}
        </main>
        <aside class="inspector">${renderInspector()}</aside>
      </div>
    `;
    bindEvents();
  }

  function renderSidebar(s) {
    return `
      <aside class="sidebar">
        <div class="brand"><div class="brand-mark">新</div><div><h1>新中特复习</h1><p>期末背诵与速测</p></div></div>
        <button class="nav-button ${state.view === "study" ? "active" : ""}" data-view="study"><span>专题复习</span><span class="nav-count">${s.topics}</span></button>
        <button class="nav-button ${state.view === "quiz" ? "active" : ""}" data-view="quiz"><span>关键词速测</span><span class="nav-count">${quiz.length}</span></button>
        <button class="nav-button ${state.view === "overview" ? "active" : ""}" data-view="overview"><span>答案速览</span><span class="nav-count">${s.topics}</span></button>
        <button class="nav-button ${state.view === "notebook" ? "active" : ""}" data-view="notebook"><span>薄弱点</span><span class="nav-count">${s.weak}</span></button>
        <div class="section-title">专题目录</div>
        <button class="nav-button ${state.topicFilter === "all" ? "active" : ""}" data-topic-filter="all"><span>全部专题</span><span class="nav-count">${topics.length}</span></button>
        ${topics.map((topic) => `<button class="nav-button ${state.topicFilter === topic.id ? "active" : ""}" data-topic-filter="${topic.id}"><span>${topic.number}. ${topic.title}</span></button>`).join("")}
      </aside>
    `;
  }

  function renderTopbar(s) {
    return `
      <section class="topbar">
        <div><h2>${state.view === "study" ? "专题复习" : state.view === "quiz" ? "关键词速测" : state.view === "overview" ? "答案速览" : "薄弱点整理"}</h2><p>基于 2026.7 全日制新中特复习提纲，适合背诵、速览和考前自测。</p></div>
        <div class="chips"><span class="chip primary">掌握 ${s.progress}%</span><span class="chip">薄弱 ${s.weak}</span></div>
      </section>
      <section class="stat-grid">
        <div class="stat"><strong>${s.topics}</strong><span>复习专题</span></div>
        <div class="stat"><strong>${s.mastered}</strong><span>已掌握</span></div>
        <div class="stat"><strong>${s.doneQuiz}</strong><span>已速测</span></div>
        <div class="stat"><strong>${s.weak}</strong><span>待强化</span></div>
      </section>
    `;
  }

  function renderStudy() {
    const list = filteredTopics();
    const topic = currentTopic();
    if (!topic) return `<article class="card"><h3>没有符合条件的专题</h3></article>`;
    return `
      <section class="filters">
        <div class="field"><label>搜索关键词</label><input data-search value="${h(state.search)}" placeholder="搜索概念、专题、答案内容" /></div>
        <div class="toggle-row"><label><input type="checkbox" data-random ${state.randomMode ? "checked" : ""}> 随机背诵</label></div>
      </section>
      <article class="card topic-card-main">
        <div class="question-head"><div class="chips"><span class="chip primary">专题 ${topic.number}</span>${topic.keywords.map((key) => `<span class="chip">${h(key)}</span>`).join("")}</div><div class="chip">${list.indexOf(topic) + 1} / ${list.length}</div></div>
        <h3>${h(topic.title)}</h3>
        <div class="prompt-box">${state.showAnswer ? md(topic.body) : "<p>先尝试口述本题答案，再点击右侧“显示答案”。</p>"}</div>
      </article>
    `;
  }

  function renderQuiz() {
    const q = currentQuiz();
    if (!q) return "";
    const result = state.data.quiz[q.id];
    return `
      <article class="card">
        <div class="question-head"><div class="chips"><span class="chip primary">${q.type === "choice" ? "选择题" : "填空题"}</span><span class="chip">${h(topicById(q.topicId).title)}</span></div><div class="chip">${state.currentQuiz + 1} / ${quiz.length}</div></div>
        <h3>${h(q.prompt)}</h3>
        ${q.type === "choice" ? `<div class="option-list">${q.options.map((option) => `<button class="option" data-quiz-answer="${h(option)}">${h(option)}</button>`).join("")}</div>` : `<textarea class="answer-box" rows="3" data-quiz-free placeholder="写出关键词"></textarea><div class="actions"><button class="btn" data-action="submitQuiz">提交</button></div>`}
        ${result ? `<div class="feedback ${result.correct ? "correct" : "wrong"}">${result.correct ? "回答正确。" : "未命中标准答案。"} 标准答案：${h(q.answer)}<br>${h(q.explanation)}</div>` : ""}
      </article>
    `;
  }

  function renderOverview() {
    return `
      <section class="overview-list">
        ${topics.map((topic) => `
          <details class="overview-item">
            <summary><span>${topic.number}. ${h(topic.title)}</span><span class="chip">${topic.keywords[0] || "重点"}</span></summary>
            <div class="answer-preview">${md(topic.body)}</div>
          </details>
        `).join("")}
      </section>
    `;
  }

  function renderNotebook() {
    const weak = topics.filter((topic) => state.data.weak[topic.id]);
    if (!weak.length) return `<article class="card"><h3>暂无薄弱点</h3><p>在专题复习中点击“标记薄弱”后，这里会集中显示。</p></article>`;
    return `<section class="overview-list">${weak.map((topic) => `<details class="overview-item" open><summary><span>${topic.number}. ${h(topic.title)}</span></summary><div class="answer-preview">${md(topic.body)}</div></details>`).join("")}</section>`;
  }

  function renderInspector() {
    if (state.view === "study") {
      const topic = currentTopic();
      const noteVisible = Boolean(state.data.settings?.noteVisible);
      const noteText = topic ? state.data.notes[topic.id] || "" : "";
      return `
        <section class="panel"><h3>背诵操作</h3><div class="side-actions">
          <button class="btn" data-action="toggleAnswer">${state.showAnswer ? "隐藏答案" : "显示答案"}</button>
          <button class="btn secondary" data-action="toggleNotes">${noteVisible ? "隐藏笔记" : "显示笔记"}</button>
          <button class="btn secondary" data-action="prevTopic">上一题</button>
          <button class="btn secondary" data-action="nextTopic">${state.randomMode ? "随机下一题" : "下一题"}</button>
          <button class="btn secondary" data-action="mastered">标记掌握</button>
          <button class="btn warning" data-action="weak">标记薄弱</button>
        </div></section>
        ${topic ? `<section class="panel"><h3>题号索引</h3><div class="index-grid">${filteredTopics().map((item, index) => `<button class="index-btn ${item.id === topic.id ? "active" : ""}" data-jump-topic-index="${index}">${item.number}</button>`).join("")}</div></section>` : ""}
        ${topic ? `
          <section class="panel note-panel ${noteVisible ? "" : "collapsed"}">
            <div class="panel-title-row">
              <h3>复习笔记</h3>
              <span class="save-hint">自动本地保存</span>
            </div>
            ${noteVisible
              ? `<textarea class="note-box" data-note rows="8" placeholder="写下自己提炼的关键词、口诀、易混点">${h(noteText)}</textarea><p class="note-tip">当前专题笔记只保存在本机浏览器，不会上传。</p>`
              : `<p class="note-hidden">笔记已隐藏，做题时不会占用视线。</p>`}
          </section>
        ` : ""}
      `;
    }
    if (state.view === "quiz") {
      return `<section class="panel"><h3>速测操作</h3><div class="side-actions"><button class="btn secondary" data-action="prevQuiz">上一题</button><button class="btn secondary" data-action="nextQuiz">下一题</button></div></section>`;
    }
    return `<section class="panel"><h3>复习建议</h3><p>先用“专题复习”背诵主观题，再用“关键词速测”检查核心概念，最后用“答案速览”考前通读。</p></section>`;
  }

  function topicById(id) {
    return topics.find((topic) => topic.id === id) || topics[0];
  }

  function moveTopic(step) {
    const list = filteredTopics();
    if (!list.length) return;
    if (state.randomMode) state.currentTopic = Math.floor(Math.random() * list.length);
    else state.currentTopic = (state.currentTopic + step + list.length) % list.length;
    render();
  }

  function markTopic(kind) {
    const topic = currentTopic();
    if (!topic) return;
    if (kind === "mastered") {
      state.data.mastered[topic.id] = true;
      delete state.data.weak[topic.id];
    } else {
      state.data.weak[topic.id] = true;
      delete state.data.mastered[topic.id];
    }
    saveState();
    render();
  }

  function submitQuiz(answer) {
    const q = currentQuiz();
    if (!q) return;
    const normalized = String(answer || "").trim();
    const correct = q.type === "choice"
      ? normalized === q.answer
      : [q.answer, ...(q.aliases || [])].some((item) => normalized.includes(item) || item.includes(normalized));
    state.data.quiz[q.id] = { answer: normalized, correct, at: new Date().toISOString() };
    saveState();
    render();
  }

  function bindEvents() {
    document.querySelectorAll("[data-view]").forEach((el) => el.addEventListener("click", () => { state.view = el.dataset.view; render(); }));
    document.querySelectorAll("[data-topic-filter]").forEach((el) => el.addEventListener("click", () => { state.topicFilter = el.dataset.topicFilter; state.currentTopic = 0; render(); }));
    document.querySelectorAll("[data-jump-topic-index]").forEach((el) => el.addEventListener("click", () => { state.currentTopic = Number(el.dataset.jumpTopicIndex) || 0; render(); }));
    const search = document.querySelector("[data-search]");
    if (search) search.addEventListener("input", (event) => { state.search = event.target.value; state.currentTopic = 0; render(); });
    const random = document.querySelector("[data-random]");
    if (random) random.addEventListener("change", (event) => { state.randomMode = event.target.checked; });
    const note = document.querySelector("[data-note]");
    if (note) note.addEventListener("input", (event) => { const topic = currentTopic(); if (topic) { state.data.notes[topic.id] = event.target.value; saveState(); } });
    document.querySelectorAll("[data-quiz-answer]").forEach((el) => el.addEventListener("click", () => submitQuiz(el.dataset.quizAnswer)));
    document.querySelectorAll("[data-action]").forEach((el) => el.addEventListener("click", () => {
      const action = el.dataset.action;
      if (action === "toggleAnswer") {
        state.showAnswer = !state.showAnswer;
        state.data.settings.answerVisible = state.showAnswer;
        saveState();
        render();
      }
      if (action === "toggleNotes") {
        state.data.settings.noteVisible = !state.data.settings.noteVisible;
        saveState();
        render();
      }
      if (action === "prevTopic") moveTopic(-1);
      if (action === "nextTopic") moveTopic(1);
      if (action === "mastered") markTopic("mastered");
      if (action === "weak") markTopic("weak");
      if (action === "prevQuiz") { state.currentQuiz = (state.currentQuiz - 1 + quiz.length) % quiz.length; render(); }
      if (action === "nextQuiz") { state.currentQuiz = (state.currentQuiz + 1) % quiz.length; render(); }
      if (action === "submitQuiz") submitQuiz(document.querySelector("[data-quiz-free]")?.value || "");
    }));
  }

  window.__XZT_REVIEW_DEBUG__ = { topics, quiz, filteredTopics, stats, md };
  render();
})();