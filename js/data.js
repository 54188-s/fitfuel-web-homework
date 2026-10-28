"use strict";
window.FitData = {
  "CATEGORY_NAMES": {
    "chest": "胸部",
    "back": "背部",
    "shoulders": "肩部",
    "legs": "腿部",
    "arms": "手臂",
    "core": "核心",
    "quads": "股四头",
    "hamstrings": "腘绳肌",
    "glutes": "臀",
    "calves": "小腿",
    "biceps": "二头",
    "triceps": "三头",
    "forearms": "前臂",
    "compound": "复合动作",
    "cardio": "有氧",
    "mobility": "活动度与拉伸"
  },
  "EXERCISES": [
    {
      "id": "bench_press",
      "name": "杠铃卧推",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "前三角",
        "肱三头肌"
      ],
      "met": 6,
      "desc": "发展胸大肌整体厚度的黄金复合动作。",
      "steps": [
        "仰卧平凳，双眼位于杠铃正下方，肩胛后缩下沉",
        "握距略宽于肩，下放至胸骨中下缘，前臂垂直地面",
        "胸肌发力推起至手臂接近伸直"
      ],
      "mistakes": [
        "肘部外展90°压迫肩关节",
        "臀部离凳、腰椎过度反弓"
      ],
      "tips": "想象把杠铃杆掰弯，下放2秒、推起1秒。",
      "aliases": [
        "平板卧推",
        "杠铃平推",
        "bench press"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders",
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/bench-press/frame-1.svg",
          "images/exercises/workout-guide/bench-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/bench-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "dumbbell_press",
      "name": "哑铃卧推",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "前三角",
        "肱三头肌"
      ],
      "met": 5.8,
      "desc": "活动范围更大，能更好地刺激胸肌外侧。",
      "steps": [
        "双手持铃仰卧，铃位于胸部两侧",
        "向上推起并在顶点微微内收",
        "控制下放至胸肌充分拉伸"
      ],
      "mistakes": [
        "下放过深导致肩关节前移",
        "两侧发力不均衡"
      ],
      "tips": "顶点不要完全锁死肘关节，保持胸肌张力。",
      "aliases": [
        "dumbbell press"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders",
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dumbbell-bench-press/frame-1.svg",
          "images/exercises/workout-guide/dumbbell-bench-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dumbbell-bench-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "incline_bench",
      "name": "上斜杠铃卧推",
      "category": "chest",
      "muscles": [
        "胸大肌上束",
        "前三角",
        "肱三头肌"
      ],
      "met": 6,
      "desc": "重点强化胸大肌上束，塑造饱满的上胸轮廓。",
      "steps": [
        "凳面调至30-45度，双脚踩实地面",
        "杠铃下放至锁骨下方",
        "沿略向后上的弧线推起"
      ],
      "mistakes": [
        "角度过大变成肩推",
        "下放位置过低伤肩"
      ],
      "tips": "角度控制在30-40度，超过45度前三角代偿明显。",
      "aliases": [
        "上斜卧推",
        "斜板卧推"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders",
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/incline-bench-press/frame-1.svg",
          "images/exercises/workout-guide/incline-bench-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/incline-bench-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "incline_dumbbell",
      "name": "上斜哑铃卧推",
      "category": "chest",
      "muscles": [
        "胸大肌上束",
        "前三角"
      ],
      "met": 5.8,
      "desc": "上胸发展利器，行程更自由。",
      "steps": [
        "上斜凳30度，持铃于胸上部两侧",
        "向上推起并微微内收",
        "缓慢下放至充分拉伸"
      ],
      "mistakes": [
        "肩部耸起",
        "下落时失去控制"
      ],
      "tips": "想象用上胸\"夹\"起哑铃，而不是单纯推。",
      "aliases": [
        "incline dumbbell"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/incline-dumbbell-press/frame-1.svg",
          "images/exercises/workout-guide/incline-dumbbell-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/incline-dumbbell-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "decline_press",
      "name": "下斜卧推",
      "category": "chest",
      "muscles": [
        "胸大肌下束",
        "肱三头肌"
      ],
      "met": 5.8,
      "desc": "针对胸大肌下束，塑造胸肌下沿线条。",
      "steps": [
        "下斜凳固定双腿，肩胛收紧",
        "杠铃下放至胸肌下缘",
        "垂直向上推起"
      ],
      "mistakes": [
        "头部充血不适仍硬撑",
        "行程过短"
      ],
      "tips": "下斜角度15-30度即可，注意安全挂钩。",
      "aliases": [
        "decline press"
      ],
      "equipment": [
        "杠铃",
        "下斜凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/decline-bench-press/frame-1.svg",
          "images/exercises/workout-guide/decline-bench-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/decline-bench-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "dumbbell_fly",
      "name": "哑铃飞鸟",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "前三角"
      ],
      "met": 5,
      "desc": "孤立胸大肌，强化胸部中缝与拉伸感。",
      "steps": [
        "仰卧持铃于胸上方，掌心相对",
        "肘微屈，沿弧线向两侧打开",
        "胸肌发力夹回至起始位"
      ],
      "mistakes": [
        "肘部完全伸直增加关节压力",
        "下放过深造成肩部拉伤"
      ],
      "tips": "用\"抱大树\"的感觉，重量宜轻不宜重。",
      "aliases": [
        "dumbbell fly"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dumbbell-fly/frame-1.svg",
          "images/exercises/workout-guide/dumbbell-fly/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dumbbell-fly/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "cable_crossover",
      "name": "绳索夹胸",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "前三角"
      ],
      "met": 5,
      "desc": "全程恒张力，是雕刻胸部中缝的经典孤立动作。",
      "steps": [
        "站于龙门架中间，双手握把",
        "身体微前倾，肘微屈",
        "双手向前下方画弧夹胸"
      ],
      "mistakes": [
        "身体晃动借力",
        "顶点没有挤压"
      ],
      "tips": "顶点停顿1秒，充分感受胸肌收缩。",
      "aliases": [
        "cable crossover"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders"
      ],
      "art": {
        "provider": "Everkinetic",
        "label": "Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/everkinetic/svg/0048-relaxation.svg",
          "images/exercises/everkinetic/svg/0048-tension.svg"
        ],
        "tone": "invert",
        "sourceUrl": "https://github.com/everkinetic/data/blob/main/dist/exercises.json",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "pushup",
      "name": "俯卧撑",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "前三角",
        "肱三头肌",
        "核心"
      ],
      "met": 5.5,
      "desc": "最经典的自重上肢推类动作。",
      "steps": [
        "双手略宽于肩撑地，身体呈直线",
        "屈肘下降至胸部接近地面",
        "胸肌发力推起还原"
      ],
      "mistakes": [
        "塌腰撅臀",
        "下放过浅"
      ],
      "tips": "核心收紧，全程身体像一块钢板。",
      "aliases": [
        "pushup"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "core",
        "shoulders",
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/push-up/frame-1.svg",
          "images/exercises/workout-guide/push-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/push-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "dips",
      "name": "双杠臂屈伸",
      "category": "chest",
      "muscles": [
        "胸大肌下束",
        "肱三头肌",
        "前三角"
      ],
      "met": 6,
      "desc": "自重中的\"上肢深蹲\"，对下胸和三头刺激极强。",
      "steps": [
        "双手撑杠，身体微前倾",
        "屈肘下降至肩略低于肘",
        "推起至手臂伸直"
      ],
      "mistakes": [
        "下放过深压迫肩关节",
        "身体完全直立变成纯三头动作"
      ],
      "tips": "身体前倾更多刺激胸肌，直立更多刺激三头。",
      "aliases": [
        "dips"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders",
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/chest-dip/frame-1.svg",
          "images/exercises/workout-guide/chest-dip/frame-2.svg",
          "images/exercises/workout-guide/chest-dip/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/chest-dip/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "pullup",
      "name": "引体向上",
      "category": "back",
      "muscles": [
        "背阔肌",
        "大圆肌",
        "肱二头肌"
      ],
      "met": 6.5,
      "desc": "衡量上肢拉力的黄金标准动作。",
      "steps": [
        "正握略宽于肩，悬垂肩胛下沉",
        "背部发力将身体拉起至下巴过杠",
        "控制下放至手臂接近伸直"
      ],
      "mistakes": [
        "靠摆动借力",
        "只用手臂拉而不是背部"
      ],
      "tips": "先做\"肩胛下沉\"再拉，能明显提升背部参与度。",
      "aliases": [
        "pullup"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/pull-up/frame-1.svg",
          "images/exercises/workout-guide/pull-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/pull-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "lat_pulldown",
      "name": "高位下拉",
      "category": "back",
      "muscles": [
        "背阔肌",
        "大圆肌",
        "肱二头肌"
      ],
      "met": 5.5,
      "desc": "引体向上的最佳退阶与增肌替代动作。",
      "steps": [
        "坐稳，大腿卡入挡板",
        "宽握横杆，肩胛下沉",
        "将杆拉至锁骨上方，肘部向下向后"
      ],
      "mistakes": [
        "身体大幅后仰",
        "拉到颈后增加肩部风险"
      ],
      "tips": "想象用肘部去\"砸\"地面，而不是用手拉杆。",
      "aliases": [
        "下拉",
        "背阔肌下拉"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/lat-pulldown/frame-1.svg",
          "images/exercises/workout-guide/lat-pulldown/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/lat-pulldown/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "barbell_row",
      "name": "杠铃划船",
      "category": "back",
      "muscles": [
        "背阔肌",
        "斜方肌中下束",
        "后束",
        "竖脊肌"
      ],
      "met": 6.5,
      "desc": "增加背部整体厚度的核心复合动作。",
      "steps": [
        "双脚与髋同宽，屈髋前倾45-70度",
        "正握杠铃，背部挺直",
        "将杠铃拉向腹部，肘部贴身"
      ],
      "mistakes": [
        "弓背导致腰椎压力",
        "起身借力"
      ],
      "tips": "核心全程绷紧，杠铃轨迹贴近身体。",
      "aliases": [
        "barbell row"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/barbell-row/frame-1.svg",
          "images/exercises/workout-guide/barbell-row/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/barbell-row/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "dumbbell_row",
      "name": "哑铃单臂划船",
      "category": "back",
      "muscles": [
        "背阔肌",
        "大圆肌",
        "后束"
      ],
      "met": 5.5,
      "desc": "单侧训练，可有效改善背部力量不平衡。",
      "steps": [
        "一手一膝支撑于凳面，背部平行地面",
        "另一手持铃自然下垂",
        "将哑铃拉至髋部方向"
      ],
      "mistakes": [
        "躯干旋转借力",
        "耸肩"
      ],
      "tips": "肘部沿身体侧面向后拉，避免过度外展。",
      "aliases": [
        "dumbbell row"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "单侧",
      "tags": [
        "back"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/one-arm-dumbbell-row/frame-1.svg",
          "images/exercises/workout-guide/one-arm-dumbbell-row/frame-2.svg",
          "images/exercises/workout-guide/one-arm-dumbbell-row/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/one-arm-dumbbell-row/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "seated_row",
      "name": "坐姿绳索划船",
      "category": "back",
      "muscles": [
        "背阔肌",
        "斜方肌中束",
        "后束"
      ],
      "met": 5.5,
      "desc": "恒张力刺激背部中缝与厚度。",
      "steps": [
        "坐姿踩稳踏板，膝盖微屈",
        "双手握把，背部挺直",
        "将把手拉向腹部，肩胛后缩"
      ],
      "mistakes": [
        "身体前后大幅摆动",
        "只用手臂拉"
      ],
      "tips": "还原时让肩胛充分前伸，获得完整拉伸。",
      "aliases": [
        "seated row"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/seated-row/frame-1.svg",
          "images/exercises/workout-guide/seated-row/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/seated-row/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "t_bar_row",
      "name": "T杠划船",
      "category": "back",
      "muscles": [
        "背阔肌",
        "斜方肌中束",
        "后束"
      ],
      "met": 6,
      "desc": "中背部厚度的强力动作。",
      "steps": [
        "跨立于T杠上方，屈髋前倾",
        "双手握把，背部挺直",
        "将杠铃拉向胸腹之间"
      ],
      "mistakes": [
        "下背弓起",
        "用惯性甩起"
      ],
      "tips": "重量选择要能保证躯干稳定，宁轻勿乱。",
      "aliases": [
        "t bar row"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/t-bar-row/frame-1.svg",
          "images/exercises/workout-guide/t-bar-row/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/t-bar-row/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "straight_arm_pulldown",
      "name": "直臂下拉",
      "category": "back",
      "muscles": [
        "背阔肌",
        "大圆肌"
      ],
      "met": 5,
      "desc": "孤立背阔肌，建立\"背部发力感\"的入门动作。",
      "steps": [
        "面对龙门架站立，双手握横杆",
        "手臂近乎伸直，身体微前倾",
        "以肩为轴将杆压向大腿"
      ],
      "mistakes": [
        "肘部弯曲变成三头下压",
        "耸肩"
      ],
      "tips": "想象把杆\"扫\"向大腿，重点在背阔肌的收缩。",
      "aliases": [
        "straight arm pulldown"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/straight-arm-pulldown/frame-1.svg",
          "images/exercises/workout-guide/straight-arm-pulldown/frame-2.svg",
          "images/exercises/workout-guide/straight-arm-pulldown/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/straight-arm-pulldown/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "deadlift",
      "name": "硬拉",
      "category": "back",
      "muscles": [
        "竖脊肌",
        "臀大肌",
        "腘绳肌",
        "斜方肌",
        "背阔肌"
      ],
      "met": 7,
      "desc": "全身力量之王，对后链刺激无可替代。",
      "steps": [
        "双脚与髋同宽，杠铃贴近小腿",
        "屈髋屈膝握住杠铃，背部中立",
        "腿臀发力，杠铃贴身上提至站直"
      ],
      "mistakes": [
        "弓背起杠",
        "杠铃远离身体"
      ],
      "tips": "起杠前先\"绷紧\"背阔肌，全程保持杠铃贴腿。",
      "aliases": [
        "deadlift"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "glutes",
        "hamstrings",
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/deadlift/frame-1.svg",
          "images/exercises/workout-guide/deadlift/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/deadlift/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "chinup",
      "name": "反手引体向上",
      "category": "back",
      "muscles": [
        "背阔肌",
        "肱二头肌"
      ],
      "met": 6.5,
      "desc": "反握更强调背阔肌下部与肱二头。",
      "steps": [
        "反握与肩同宽，悬垂",
        "肩胛下沉后拉起至下巴过杠",
        "控制下放"
      ],
      "mistakes": [
        "摆动借力",
        "下放不充分"
      ],
      "tips": "反握时手腕压力较大，注意充分热身。",
      "aliases": [
        "chinup"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/chin-up/frame-1.svg",
          "images/exercises/workout-guide/chin-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/chin-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "ohp",
      "name": "站姿杠铃推举",
      "category": "shoulders",
      "muscles": [
        "三角肌前束",
        "三角肌中束",
        "肱三头肌",
        "核心"
      ],
      "met": 6,
      "desc": "肩部力量与围度的核心复合动作。",
      "steps": [
        "站姿，杠铃置于锁骨前",
        "核心收紧，垂直向上推起",
        "杠铃过头后头部稍前送"
      ],
      "mistakes": [
        "过度后仰变成上斜推",
        "推起路径绕远"
      ],
      "tips": "推起时想象\"把天花板顶开\"，同时夹紧臀部稳定躯干。",
      "aliases": [
        "ohp"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "core",
        "shoulders",
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/overhead-press/frame-1.svg",
          "images/exercises/workout-guide/overhead-press/frame-2.svg",
          "images/exercises/workout-guide/overhead-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/overhead-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "dumbbell_shoulder_press",
      "name": "坐姿哑铃推举",
      "category": "shoulders",
      "muscles": [
        "三角肌前束",
        "三角肌中束",
        "肱三头肌"
      ],
      "met": 5.5,
      "desc": "自由度更高的肩部推类动作，适合打造圆肩。",
      "steps": [
        "坐于靠背凳，双手持铃于耳侧",
        "向上推起至手臂接近伸直",
        "缓慢下放至大臂与地面平行"
      ],
      "mistakes": [
        "下放过低压迫肩关节",
        "两侧不同步"
      ],
      "tips": "肘部略微前指，避免完全打开成一条直线。",
      "aliases": [
        "dumbbell shoulder press"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders",
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/seated-dumbbell-press/frame-1.svg",
          "images/exercises/workout-guide/seated-dumbbell-press/frame-2.svg",
          "images/exercises/workout-guide/seated-dumbbell-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/seated-dumbbell-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "lateral_raise",
      "name": "哑铃侧平举",
      "category": "shoulders",
      "muscles": [
        "三角肌中束"
      ],
      "met": 4.5,
      "desc": "增加肩宽最直接有效的孤立动作。",
      "steps": [
        "站姿持铃于体侧，肘微屈",
        "向两侧抬起至与肩同高",
        "控制下放"
      ],
      "mistakes": [
        "耸肩借力",
        "用惯性甩起"
      ],
      "tips": "想象\"倒水\"一样让拇指略向下，中束参与更多。",
      "aliases": [
        "lateral raise"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/lateral-raise/frame-1.svg",
          "images/exercises/workout-guide/lateral-raise/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/lateral-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "front_raise",
      "name": "哑铃前平举",
      "category": "shoulders",
      "muscles": [
        "三角肌前束"
      ],
      "met": 4.5,
      "desc": "孤立强化三角肌前束。",
      "steps": [
        "站姿持铃于大腿前",
        "肘微屈，向前抬起至肩高",
        "控制下放"
      ],
      "mistakes": [
        "身体后仰借力",
        "抬得过高"
      ],
      "tips": "可交替进行，核心收紧避免身体摇晃。",
      "aliases": [
        "front raise"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/front-raise/frame-1.svg",
          "images/exercises/workout-guide/front-raise/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/front-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "rear_delt_fly",
      "name": "俯身哑铃飞鸟",
      "category": "shoulders",
      "muscles": [
        "三角肌后束",
        "斜方肌中束",
        "菱形肌"
      ],
      "met": 4.5,
      "desc": "改善圆肩、塑造后肩线条的关键动作。",
      "steps": [
        "俯身屈髋，背部挺直",
        "持铃自然下垂，肘微屈",
        "向两侧后方抬起至与肩同高"
      ],
      "mistakes": [
        "耸肩",
        "用背部甩起"
      ],
      "tips": "重量宜轻，重点在\"挤压\"肩胛骨。",
      "aliases": [
        "rear delt fly"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "back",
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/bent-over-rear-delt-raise/frame-1.svg",
          "images/exercises/workout-guide/bent-over-rear-delt-raise/frame-2.svg",
          "images/exercises/workout-guide/bent-over-rear-delt-raise/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/bent-over-rear-delt-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "face_pull",
      "name": "面拉",
      "category": "shoulders",
      "muscles": [
        "三角肌后束",
        "斜方肌",
        "肩袖肌群"
      ],
      "met": 4.5,
      "desc": "改善肩部健康与体态，强化后链。",
      "steps": [
        "面对龙门架，绳索调至面部高度",
        "双手握绳两端",
        "向面部方向拉，双手外旋"
      ],
      "mistakes": [
        "重量过大导致躯干后仰",
        "肘部下沉"
      ],
      "tips": "顶点时双手像\"拉弓\"一样外旋，感受后束收缩。",
      "aliases": [
        "face pull"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/face-pull/frame-1.svg",
          "images/exercises/workout-guide/face-pull/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/face-pull/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "arnold_press",
      "name": "阿诺德推举",
      "category": "shoulders",
      "muscles": [
        "三角肌前束",
        "三角肌中束"
      ],
      "met": 5.5,
      "desc": "通过旋转增加行程，全面刺激三角肌。",
      "steps": [
        "坐姿持铃于胸前，掌心朝向自己",
        "推起同时向外旋转手腕",
        "顶点掌心朝前，再原路返回"
      ],
      "mistakes": [
        "旋转过快失去控制",
        "重量过大"
      ],
      "tips": "旋转要平滑，把注意力放在三角肌的全程张力上。",
      "aliases": [
        "arnold press"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/arnold-press/frame-1.svg",
          "images/exercises/workout-guide/arnold-press/frame-2.svg",
          "images/exercises/workout-guide/arnold-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/arnold-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "shrug",
      "name": "杠铃耸肩",
      "category": "shoulders",
      "muscles": [
        "斜方肌上束"
      ],
      "met": 4.5,
      "desc": "发展上斜方厚度，让肩颈线条更厚实。",
      "steps": [
        "站姿正握杠铃于体前",
        "肩部垂直向上耸起",
        "顶点停顿后缓慢下放"
      ],
      "mistakes": [
        "转肩画圈",
        "屈肘借力"
      ],
      "tips": "只做上下运动，顶点停顿1秒效果更好。",
      "aliases": [
        "shrug"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/shrug/frame-1.svg",
          "images/exercises/workout-guide/shrug/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/shrug/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "squat",
      "name": "杠铃深蹲",
      "category": "legs",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "腘绳肌",
        "核心"
      ],
      "met": 7,
      "desc": "下肢训练之王，全身力量的基石。",
      "steps": [
        "杠铃置于斜方肌上部，双脚与肩同宽",
        "屈髋屈膝下蹲至大腿平行地面",
        "脚跟发力站起，膝盖与脚尖同向"
      ],
      "mistakes": [
        "膝盖内扣",
        "脚跟离地、重心前移"
      ],
      "tips": "下蹲时想象\"坐向身后的椅子\"，全程保持核心绷紧。",
      "aliases": [
        "squat"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings",
        "legs",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/squat/frame-1.svg",
          "images/exercises/workout-guide/squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "front_squat",
      "name": "前蹲",
      "category": "legs",
      "muscles": [
        "股四头肌",
        "核心",
        "臀大肌"
      ],
      "met": 6.5,
      "desc": "更强调股四头与核心的深蹲变式。",
      "steps": [
        "杠铃置于锁骨前三角肌上",
        "肘部高抬，躯干保持直立",
        "下蹲至大腿平行后站起"
      ],
      "mistakes": [
        "肘部下沉导致杠铃前滑",
        "躯干过度前倾"
      ],
      "tips": "手肘始终指向前上方，是保持杠铃稳定的关键。",
      "aliases": [
        "front squat"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "legs",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/front-squat/frame-1.svg",
          "images/exercises/workout-guide/front-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/front-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "leg_press",
      "name": "腿举",
      "category": "legs",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "腘绳肌"
      ],
      "met": 5.5,
      "desc": "大重量安全刺激下肢的器械动作。",
      "steps": [
        "坐入器械，双脚与肩同宽踩踏板",
        "解开安全锁，屈膝下放",
        "至大腿接近胸部后蹬起"
      ],
      "mistakes": [
        "膝盖完全锁死",
        "下放过深使腰部离开靠垫"
      ],
      "tips": "脚位越高越偏臀腿，越低越偏股四头。",
      "aliases": [
        "leg press"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings",
        "legs",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/leg-press/frame-1.svg",
          "images/exercises/workout-guide/leg-press/frame-2.svg",
          "images/exercises/workout-guide/leg-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/leg-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "rdl",
      "name": "罗马尼亚硬拉",
      "category": "legs",
      "muscles": [
        "腘绳肌",
        "臀大肌",
        "竖脊肌"
      ],
      "met": 6,
      "desc": "强化腘绳肌与臀部的最佳铰链动作。",
      "steps": [
        "站姿持杠于体前，膝盖微屈",
        "屈髋将杠铃沿大腿下放",
        "感受腘绳肌拉伸后收紧臀部站起"
      ],
      "mistakes": [
        "弓背下放",
        "屈膝过多变成硬拉"
      ],
      "tips": "全程小腿近乎垂直，重点是\"屈髋\"而不是\"下蹲\"。",
      "aliases": [
        "RDL",
        "罗马尼亚硬拉"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "glutes",
        "hamstrings",
        "legs"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/romanian-deadlift/frame-1.svg",
          "images/exercises/workout-guide/romanian-deadlift/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/romanian-deadlift/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "bulgarian_split",
      "name": "保加利亚分腿蹲",
      "category": "legs",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "腘绳肌"
      ],
      "met": 6,
      "desc": "单腿训练之王，兼顾力量与稳定性。",
      "steps": [
        "后脚搭于凳面，前脚向前一步",
        "屈膝下蹲至前腿大腿平行",
        "前脚跟发力站起"
      ],
      "mistakes": [
        "前脚距离过近导致膝盖前移",
        "重心不稳摇晃"
      ],
      "tips": "前脚位置约在身体前1.5步，重心放在前脚脚跟。",
      "aliases": [
        "bulgarian split"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings",
        "legs",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/bulgarian-split-squat/frame-1.svg",
          "images/exercises/workout-guide/bulgarian-split-squat/frame-2.svg",
          "images/exercises/workout-guide/bulgarian-split-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/bulgarian-split-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "leg_extension",
      "name": "腿屈伸",
      "category": "legs",
      "muscles": [
        "股四头肌"
      ],
      "met": 4.5,
      "desc": "孤立股四头肌，打造大腿前侧线条。",
      "steps": [
        "坐入器械，脚踝抵住滚垫",
        "伸膝至大腿收紧",
        "缓慢下放"
      ],
      "mistakes": [
        "用惯性甩起",
        "顶点完全锁死"
      ],
      "tips": "顶点停顿1秒，感受股四头肌收缩。",
      "aliases": [
        "leg extension"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "legs",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/leg-extension/frame-1.svg",
          "images/exercises/workout-guide/leg-extension/frame-2.svg",
          "images/exercises/workout-guide/leg-extension/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/leg-extension/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "leg_curl",
      "name": "俯卧器械腿弯举",
      "category": "legs",
      "muscles": [
        "腘绳肌"
      ],
      "met": 4.5,
      "desc": "孤立腘绳肌，平衡大腿前后侧力量。",
      "steps": [
        "俯卧或坐姿于器械",
        "脚踝抵住滚垫",
        "屈膝将滚垫拉向臀部"
      ],
      "mistakes": [
        "臀部抬离凳面",
        "下放过快"
      ],
      "tips": "还原阶段控制3秒，离心刺激更有效。",
      "aliases": [
        "leg curl"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "hamstrings",
        "legs"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/lying-leg-curl/frame-1.svg",
          "images/exercises/workout-guide/lying-leg-curl/frame-2.svg",
          "images/exercises/workout-guide/lying-leg-curl/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/lying-leg-curl/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "hip_thrust",
      "name": "臀冲",
      "category": "legs",
      "muscles": [
        "臀大肌",
        "腘绳肌"
      ],
      "met": 5.5,
      "desc": "臀部激活度最高的动作之一。",
      "steps": [
        "上背靠于凳边，杠铃置于髋部",
        "双脚踩实与肩同宽",
        "臀部发力向上顶起至躯干与地面平行"
      ],
      "mistakes": [
        "用腰椎过度伸展代替臀伸",
        "脚位过远"
      ],
      "tips": "顶点收紧臀部停顿2秒，下巴微收避免腰部代偿。",
      "aliases": [
        "臀推",
        "臀冲"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings",
        "legs"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/hip-thrust/frame-1.svg",
          "images/exercises/workout-guide/hip-thrust/frame-2.svg",
          "images/exercises/workout-guide/hip-thrust/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/hip-thrust/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "calf_raise",
      "name": "自重站姿提踵",
      "category": "legs",
      "muscles": [
        "腓肠肌",
        "比目鱼肌"
      ],
      "met": 4,
      "desc": "发展小腿围度的经典动作。",
      "steps": [
        "双脚前脚掌踩稳，必要时手扶固定支撑",
        "受控抬高脚跟，膝盖不弹跳借力",
        "踮起至最高点停顿"
      ],
      "mistakes": [
        "弹震式借力",
        "行程过短"
      ],
      "tips": "顶峰停顿1秒、底端拉伸1秒，慢速效果更好。",
      "aliases": [
        "踮脚",
        "提踵"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "calves",
        "legs"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/calf-raise/frame-1.svg",
          "images/exercises/workout-guide/calf-raise/frame-2.svg",
          "images/exercises/workout-guide/calf-raise/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/calf-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "lunge",
      "name": "箭步蹲",
      "category": "legs",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "腘绳肌"
      ],
      "met": 5.5,
      "desc": "单侧下肢综合训练，兼顾力量与平衡。",
      "steps": [
        "站姿，向前迈出一大步",
        "下蹲至前腿大腿平行、后膝接近地面",
        "前脚发力回到起始位"
      ],
      "mistakes": [
        "步幅过小导致膝盖前移",
        "身体前倾"
      ],
      "tips": "躯干保持直立，重心在前脚中后部。",
      "aliases": [
        "lunge"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings",
        "legs",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/forward-lunge/frame-1.svg",
          "images/exercises/workout-guide/forward-lunge/frame-2.svg",
          "images/exercises/workout-guide/forward-lunge/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/forward-lunge/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "hack_squat",
      "name": "哈克深蹲",
      "category": "legs",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "met": 6.5,
      "desc": "器械深蹲，背部有固定滑轨支撑，能安全地用大重量刺激股四头肌。",
      "steps": [
        "背部与臀部贴紧靠垫，双脚与肩同宽踩实踏板",
        "解开安全锁，屈膝下放至大腿约与踏板平行",
        "脚跟发力蹬起，膝盖与脚尖同向，顶端不要锁死"
      ],
      "mistakes": [
        "下放过深使腰部离开靠垫",
        "膝盖内扣",
        "脚跟离地、重心前移"
      ],
      "tips": "脚位偏低更偏股四头，脚位偏高更偏臀腿；全程保持核心收紧。",
      "aliases": [
        "哈克蹲",
        "hack squat"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "legs",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/hack-squat/frame-1.svg",
          "images/exercises/workout-guide/hack-squat/frame-2.svg",
          "images/exercises/workout-guide/hack-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/hack-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "hip_adduction",
      "name": "坐姿内收肌训练",
      "category": "legs",
      "muscles": [
        "大腿内收肌群"
      ],
      "met": 4,
      "desc": "孤立大腿内侧内收肌，改善腿部线条与夹腿力量。",
      "steps": [
        "坐入器械，双腿外侧贴紧挡板",
        "调整起始角度使大腿内侧有拉伸感",
        "内收肌发力将双腿向中间夹拢，顶点停顿"
      ],
      "mistakes": [
        "用惯性猛夹",
        "还原时快速弹开失去控制"
      ],
      "tips": "顶点停顿1-2秒，还原放慢到3秒，内收肌的刺激会明显提升。",
      "aliases": [
        "夹腿",
        "内收肌"
      ],
      "equipment": [
        "髋内收器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "legs"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/hip-adduction-machine/frame-1.svg",
          "images/exercises/workout-guide/hip-adduction-machine/frame-2.svg",
          "images/exercises/workout-guide/hip-adduction-machine/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/hip-adduction-machine/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "hip_abduction",
      "name": "坐姿外展肌训练",
      "category": "legs",
      "muscles": [
        "臀中肌",
        "臀小肌"
      ],
      "met": 4,
      "desc": "强化臀中肌与髋外展肌群，改善髋部稳定与臀部侧上缘饱满度。",
      "steps": [
        "坐入器械，双腿内侧贴紧挡板",
        "身体微微前倾，核心收紧",
        "臀中肌发力将双腿向两侧打开，顶点停顿"
      ],
      "mistakes": [
        "身体后仰借力",
        "打开幅度过大导致腰部代偿"
      ],
      "tips": "身体前倾约15度能显著提高臀中肌的参与度；重量宁轻勿重。",
      "aliases": [
        "开腿",
        "外展肌"
      ],
      "equipment": [
        "髋外展器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "legs"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/hip-abduction-machine/frame-1.svg",
          "images/exercises/workout-guide/hip-abduction-machine/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/hip-abduction-machine/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "barbell_curl",
      "name": "杠铃弯举",
      "category": "arms",
      "muscles": [
        "肱二头肌",
        "肱肌"
      ],
      "met": 4.5,
      "desc": "增加肱二头肌整体围度的基础动作。",
      "steps": [
        "站姿反握杠铃，掌心朝前，双手间距与肩接近",
        "肘部贴身，弯举至前臂接近垂直",
        "控制下放"
      ],
      "mistakes": [
        "身体后仰借力",
        "肘部前移"
      ],
      "tips": "肘部固定是孤立二头的关键，重量宁轻勿假。",
      "aliases": [
        "barbell curl"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "biceps"
      ],
      "art": {
        "provider": "Everkinetic",
        "label": "Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/everkinetic/svg/0211-relaxation.svg",
          "images/exercises/everkinetic/svg/0211-tension.svg"
        ],
        "tone": "invert",
        "sourceUrl": "https://github.com/everkinetic/data/blob/main/dist/exercises.json",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "alt_dumbbell_curl",
      "name": "哑铃交替弯举",
      "category": "arms",
      "muscles": [
        "肱二头肌"
      ],
      "met": 4.5,
      "desc": "单侧训练，可加入旋转增强收缩。",
      "steps": [
        "站姿持铃于体侧，掌心朝内",
        "弯举同时外旋至掌心朝上",
        "交替进行"
      ],
      "mistakes": [
        "耸肩",
        "下放不充分"
      ],
      "tips": "顶点小指略高于拇指，二头短头收缩更明显。",
      "aliases": [
        "alt dumbbell curl"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "biceps"
      ],
      "art": {
        "provider": "Everkinetic",
        "label": "Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/everkinetic/svg/0223-relaxation.svg",
          "images/exercises/everkinetic/svg/0223-tension.svg"
        ],
        "tone": "invert",
        "sourceUrl": "https://github.com/everkinetic/data/blob/main/dist/exercises.json",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "hammer_curl",
      "name": "锤式弯举",
      "category": "arms",
      "muscles": [
        "肱肌",
        "肱桡肌",
        "肱二头肌"
      ],
      "met": 4.5,
      "desc": "强化肱肌与肱桡肌，增加手臂厚度。",
      "steps": [
        "站姿持铃，掌心相对",
        "肘部固定弯举",
        "控制下放"
      ],
      "mistakes": [
        "手腕晃动",
        "身体摆动"
      ],
      "tips": "中立握姿对肘关节更友好，适合大重量。",
      "aliases": [
        "hammer curl"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "biceps",
        "forearms"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/hammer-curl/frame-1.svg",
          "images/exercises/workout-guide/hammer-curl/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/hammer-curl/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "preacher_curl",
      "name": "杠铃牧师凳弯举",
      "category": "arms",
      "muscles": [
        "肱二头肌"
      ],
      "met": 4.5,
      "desc": "消除借力，最大化二头孤立刺激。",
      "steps": [
        "大臂贴于斜板，肘部抵住垫面",
        "弯举至前臂垂直",
        "缓慢下放至接近伸直"
      ],
      "mistakes": [
        "下放时肘部离开垫面",
        "快速弹起"
      ],
      "tips": "离心阶段放慢到3秒，能显著提升刺激。",
      "aliases": [
        "托臂弯举"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "biceps"
      ],
      "art": {
        "provider": "Everkinetic",
        "label": "Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/everkinetic/svg/0239-relaxation.svg",
          "images/exercises/everkinetic/svg/0239-tension.svg"
        ],
        "tone": "invert",
        "sourceUrl": "https://github.com/everkinetic/data/blob/main/dist/exercises.json",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "tricep_pushdown",
      "name": "绳索下压",
      "category": "arms",
      "muscles": [
        "肱三头肌"
      ],
      "met": 4.5,
      "desc": "肱三头肌最常用的孤立动作。",
      "steps": [
        "面对龙门架，双手握绳",
        "肘部贴身，向下压至手臂伸直",
        "顶点分开绳端加强收缩"
      ],
      "mistakes": [
        "肘部外张",
        "身体前倾借力"
      ],
      "tips": "只有前臂运动，大臂全程保持不动。",
      "aliases": [
        "三头下压"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/tricep-pushdown/frame-1.svg",
          "images/exercises/workout-guide/tricep-pushdown/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/tricep-pushdown/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "skull_crusher",
      "name": "仰卧臂屈伸",
      "category": "arms",
      "muscles": [
        "肱三头肌长头"
      ],
      "met": 4.5,
      "desc": "着重刺激肱三头肌长头，增加手臂维度。",
      "steps": [
        "仰卧持曲杠于额头上方",
        "肘部固定，屈肘下放至头顶",
        "三头发力伸直手臂"
      ],
      "mistakes": [
        "肘部外张",
        "下放位置过于靠后"
      ],
      "tips": "下放至额头上方即可，注意控制避免砸头。",
      "aliases": [
        "skull crusher"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/skull-crusher/frame-1.svg",
          "images/exercises/workout-guide/skull-crusher/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/skull-crusher/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "close_grip_bench",
      "name": "窄距卧推",
      "category": "arms",
      "muscles": [
        "肱三头肌",
        "胸大肌",
        "前三角"
      ],
      "met": 5.5,
      "desc": "可用大重量的三头复合动作。",
      "steps": [
        "仰卧，双手握距与肩同宽",
        "下放至胸部中下缘，肘部贴身",
        "推起至手臂伸直"
      ],
      "mistakes": [
        "握距过窄手腕压力大",
        "肘部外展"
      ],
      "tips": "握距大约与肩同宽或略窄，重点是肘部贴身。",
      "aliases": [
        "close grip bench"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "chest",
        "shoulders",
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/close-grip-bench-press/frame-1.svg",
          "images/exercises/workout-guide/close-grip-bench-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/close-grip-bench-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "overhead_ext",
      "name": "过顶臂屈伸",
      "category": "arms",
      "muscles": [
        "肱三头肌长头"
      ],
      "met": 4.5,
      "desc": "长头处于拉伸位，刺激效果极佳。",
      "steps": [
        "坐姿或站姿，双手持铃举过头顶",
        "屈肘将哑铃下放至颈后",
        "三头发力伸直手臂"
      ],
      "mistakes": [
        "肘部外张",
        "腰部过度反弓"
      ],
      "tips": "保持大臂贴近耳侧，核心收紧。",
      "aliases": [
        "overhead ext"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dumbbell-overhead-tricep-extension/frame-1.svg",
          "images/exercises/workout-guide/dumbbell-overhead-tricep-extension/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dumbbell-overhead-tricep-extension/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "crunch",
      "name": "卷腹",
      "category": "core",
      "muscles": [
        "腹直肌"
      ],
      "met": 4,
      "desc": "最基础的腹直肌孤立动作。",
      "steps": [
        "仰卧屈膝，双手放于耳侧或胸前",
        "腹肌发力将肩胛卷离地面",
        "顶点停顿后缓慢下放"
      ],
      "mistakes": [
        "用手抱头拉扯颈椎",
        "用惯性弹起"
      ],
      "tips": "想象\"把肋骨卷向骨盆\"，而不是抬起整个上身。",
      "aliases": [
        "crunch"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/crunch/frame-1.svg",
          "images/exercises/workout-guide/crunch/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/crunch/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "plank",
      "name": "平板支撑",
      "category": "core",
      "muscles": [
        "腹横肌",
        "腹直肌",
        "竖脊肌"
      ],
      "met": 4,
      "desc": "训练核心稳定性的经典等长动作。",
      "steps": [
        "肘部撑地，前臂平行",
        "身体呈一条直线，臀部不塌不翘",
        "保持均匀呼吸"
      ],
      "mistakes": [
        "塌腰或撅臀",
        "憋气"
      ],
      "tips": "主动\"收紧臀部+肚脐向脊柱收\"，比单纯撑时间更有效。",
      "aliases": [
        "plank"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "back",
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/plank/frame-1.svg",
          "images/exercises/workout-guide/plank/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/plank/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "hanging_leg_raise",
      "name": "悬垂举腿",
      "category": "core",
      "muscles": [
        "腹直肌下部",
        "髂腰肌"
      ],
      "met": 4.5,
      "desc": "强度较高的下腹训练动作。",
      "steps": [
        "双手握杠悬垂",
        "腹肌发力将双腿抬至水平或更高",
        "控制下放，避免摆动"
      ],
      "mistakes": [
        "靠摆动惯性",
        "下放失去控制"
      ],
      "tips": "先屈膝做\"举膝\"，力量提升后再伸直双腿。",
      "aliases": [
        "hanging leg raise"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/hanging-leg-raise/frame-1.svg",
          "images/exercises/workout-guide/hanging-leg-raise/frame-2.svg",
          "images/exercises/workout-guide/hanging-leg-raise/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/hanging-leg-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "russian_twist",
      "name": "俄罗斯转体",
      "category": "core",
      "muscles": [
        "腹斜肌",
        "腹直肌"
      ],
      "met": 4,
      "desc": "强化腹斜肌，塑造腰部线条。",
      "steps": [
        "坐姿屈膝，上身后倾约45度",
        "双手持重物于胸前",
        "左右旋转躯干触碰地面"
      ],
      "mistakes": [
        "只转手臂不转躯干",
        "速度过快"
      ],
      "tips": "跟着胸椎一起旋转，眼睛看向手的方向。",
      "aliases": [
        "russian twist"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/russian-twist/frame-1.svg",
          "images/exercises/workout-guide/russian-twist/frame-2.svg",
          "images/exercises/workout-guide/russian-twist/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/russian-twist/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "ab_wheel",
      "name": "健腹轮",
      "category": "core",
      "muscles": [
        "腹直肌",
        "腹横肌",
        "背阔肌"
      ],
      "met": 4.5,
      "desc": "高强度的核心抗伸展训练。",
      "steps": [
        "跪姿双手握轮",
        "核心收紧，缓慢向前推出",
        "腹肌发力拉回"
      ],
      "mistakes": [
        "塌腰",
        "推出过远超出控制"
      ],
      "tips": "宁可少推一点，也不要塌腰，感受腹部的张力。",
      "aliases": [
        "ab wheel"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "back",
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/ab-wheel/frame-1.svg",
          "images/exercises/workout-guide/ab-wheel/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/ab-wheel/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "side_plank",
      "name": "侧平板支撑",
      "category": "core",
      "muscles": [
        "腹斜肌",
        "腹横肌"
      ],
      "met": 4,
      "desc": "强化侧腹与核心抗侧屈能力。",
      "steps": [
        "侧卧，肘部撑地",
        "髋部抬起使身体呈直线",
        "保持稳定呼吸，两侧交替"
      ],
      "mistakes": [
        "髋部下沉",
        "身体前后倾斜"
      ],
      "tips": "如果太难，可屈膝以膝盖着地降低难度。",
      "aliases": [
        "side plank"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/side-plank/frame-1.svg",
          "images/exercises/workout-guide/side-plank/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/side-plank/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "side_plank_reach",
      "name": "侧平板穿针",
      "category": "core",
      "muscles": [
        "腹斜肌"
      ],
      "met": 5.0,
      "desc": "侧平板穿针的基础训练教学。",
      "steps": [
        "侧卧前臂支撑，身体保持直线",
        "上侧手臂缓慢穿过躯干下方",
        "旋转还原，保持髋部稳定"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "side plank reach"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/side_plank_reach.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "machine_chest_press",
      "name": "器械推胸",
      "category": "chest",
      "muscles": [
        "胸大肌"
      ],
      "met": 5.0,
      "desc": "器械推胸的基础训练教学。",
      "steps": [
        "调节座椅使握把与胸部齐平",
        "背部贴紧靠垫，向前推至肘微屈",
        "缓慢回到起点，避免配重撞击"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "machine chest press"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/machine-chest-press/frame-1.svg",
          "images/exercises/workout-guide/machine-chest-press/frame-2.svg",
          "images/exercises/workout-guide/machine-chest-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/machine-chest-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "incline_cable_fly",
      "name": "上斜绳索飞鸟",
      "category": "chest",
      "muscles": [
        "胸大肌上束"
      ],
      "met": 5.0,
      "desc": "上斜绳索飞鸟的基础训练教学。",
      "steps": [
        "上斜凳置于滑轮中间，握把位于胸侧",
        "保持肘微屈，向上内收双臂",
        "控制返回，保持肩胛稳定"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "incline cable fly"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/incline-cable-fly/frame-1.svg",
          "images/exercises/workout-guide/incline-cable-fly/frame-2.svg",
          "images/exercises/workout-guide/incline-cable-fly/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/incline-cable-fly/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "low_cable_fly",
      "name": "低位绳索夹胸",
      "category": "chest",
      "muscles": [
        "胸大肌上束"
      ],
      "met": 5.0,
      "desc": "低位绳索夹胸的基础训练教学。",
      "steps": [
        "滑轮调到低位，前后站姿站稳",
        "双手由下向前上方合拢",
        "缓慢回程，避免耸肩"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "low cable fly"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/low_cable_fly.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "high_cable_fly",
      "name": "高位绳索夹胸",
      "category": "chest",
      "muscles": [
        "胸大肌下束"
      ],
      "met": 5.0,
      "desc": "高位绳索夹胸的基础训练教学。",
      "steps": [
        "滑轮调到高位，身体微前倾",
        "保持肘角度，向前下方合拢",
        "控制回程，躯干保持稳定"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "high cable fly"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/high_cable_fly.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "incline_pushup",
      "name": "上斜俯卧撑",
      "category": "chest",
      "muscles": [
        "胸大肌"
      ],
      "met": 5.0,
      "desc": "上斜俯卧撑的基础训练教学。",
      "steps": [
        "双手撑稳固高台，身体呈直线",
        "屈肘使胸部靠近高台",
        "推起回到起点，避免塌腰"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "incline pushup"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/incline-push-up/frame-1.svg",
          "images/exercises/workout-guide/incline-push-up/frame-2.svg",
          "images/exercises/workout-guide/incline-push-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/incline-push-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "decline_pushup",
      "name": "下斜俯卧撑",
      "category": "chest",
      "muscles": [
        "胸大肌上束"
      ],
      "met": 5.0,
      "desc": "下斜俯卧撑的基础训练教学。",
      "steps": [
        "双脚置于低台，双手撑地",
        "收紧核心并缓慢屈肘下降",
        "推起还原，保持颈部中立"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "decline pushup"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/decline-push-up/frame-1.svg",
          "images/exercises/workout-guide/decline-push-up/frame-2.svg",
          "images/exercises/workout-guide/decline-push-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/decline-push-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "assisted_pullup",
      "name": "辅助引体向上",
      "category": "back",
      "muscles": [
        "背阔肌"
      ],
      "met": 5.0,
      "desc": "辅助引体向上的基础训练教学。",
      "steps": [
        "调节辅助重量，膝盖稳放垫上",
        "肩胛下沉，拉起身体",
        "缓慢下降，避免突然松手"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "assisted pullup"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/assisted-pull-up/frame-1.svg",
          "images/exercises/workout-guide/assisted-pull-up/frame-2.svg",
          "images/exercises/workout-guide/assisted-pull-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/assisted-pull-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "neutral_pulldown",
      "name": "中立握高位下拉",
      "category": "back",
      "muscles": [
        "背阔肌"
      ],
      "met": 5.0,
      "desc": "中立握高位下拉的基础训练教学。",
      "steps": [
        "固定大腿，中立握把",
        "肘向肋骨方向拉，握把降至上胸",
        "控制上放，避免后仰借力"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "neutral pulldown"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back"
      ],
      "art": {
        "provider": "Everkinetic",
        "label": "Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/everkinetic/svg/0096-relaxation.svg",
          "images/exercises/everkinetic/svg/0096-tension.svg"
        ],
        "tone": "invert",
        "sourceUrl": "https://github.com/everkinetic/data/blob/main/dist/exercises.json",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "chest_supported_row",
      "name": "胸托哑铃划船",
      "category": "back",
      "muscles": [
        "背阔肌",
        "菱形肌"
      ],
      "met": 5.0,
      "desc": "胸托哑铃划船的基础训练教学。",
      "steps": [
        "俯卧于上斜凳，双臂自然下垂",
        "肘向后拉，肩胛收拢",
        "缓慢下放，胸部保持贴凳"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "chest supported row"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/chest_supported_row.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "single_cable_row",
      "name": "单臂绳索划船",
      "category": "back",
      "muscles": [
        "背阔肌"
      ],
      "met": 5.0,
      "desc": "单臂绳索划船的基础训练教学。",
      "steps": [
        "单手握绳索，躯干保持正向",
        "肘贴近身体向后拉",
        "控制回程，避免转体"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "single cable row"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "单侧",
      "tags": [
        "back"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/single-arm-cable-row/frame-1.svg",
          "images/exercises/workout-guide/single-arm-cable-row/frame-2.svg",
          "images/exercises/workout-guide/single-arm-cable-row/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/single-arm-cable-row/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "inverted_row",
      "name": "反向划船",
      "category": "back",
      "muscles": [
        "背阔肌",
        "菱形肌"
      ],
      "met": 5.0,
      "desc": "反向划船的基础训练教学。",
      "steps": [
        "仰卧握固定横杆，脚跟撑地",
        "保持身体直线，将胸部拉近横杆",
        "缓慢下降，维持核心张力"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "inverted row"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/inverted-row/frame-1.svg",
          "images/exercises/workout-guide/inverted-row/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/inverted-row/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "rack_pull",
      "name": "架上硬拉",
      "category": "back",
      "muscles": [
        "竖脊肌",
        "臀大肌"
      ],
      "met": 5.0,
      "desc": "架上硬拉的基础训练教学。",
      "steps": [
        "杠铃置于膝下高度的安全架",
        "收紧背部，伸髋站直",
        "屈髋控制回架，避免腰部后仰"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "rack pull"
      ],
      "equipment": [
        "杠铃",
        "安全架"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "glutes"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/rack-pull/frame-1.svg",
          "images/exercises/workout-guide/rack-pull/frame-2.svg",
          "images/exercises/workout-guide/rack-pull/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/rack-pull/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "landmine_press",
      "name": "地雷管推举",
      "category": "shoulders",
      "muscles": [
        "三角肌前束"
      ],
      "met": 5.0,
      "desc": "地雷管推举的基础训练教学。",
      "steps": [
        "半跪握杠铃末端，收紧核心",
        "沿斜上方轨迹推起",
        "缓慢回落，保持肋骨收拢"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "landmine press"
      ],
      "equipment": [
        "杠铃",
        "地雷管固定座"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/landmine-press/frame-1.svg",
          "images/exercises/workout-guide/landmine-press/frame-2.svg",
          "images/exercises/workout-guide/landmine-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/landmine-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "cable_lateral_raise",
      "name": "绳索侧平举",
      "category": "shoulders",
      "muscles": [
        "三角肌中束"
      ],
      "met": 5.0,
      "desc": "绳索侧平举的基础训练教学。",
      "steps": [
        "滑轮置低位，单手握把站稳",
        "微屈肘，将手臂抬至肩高",
        "缓慢回落，避免耸肩"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "cable lateral raise"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/cable-lateral-raise/frame-1.svg",
          "images/exercises/workout-guide/cable-lateral-raise/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/cable-lateral-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "machine_shoulder_press",
      "name": "器械肩推",
      "category": "shoulders",
      "muscles": [
        "三角肌"
      ],
      "met": 5.0,
      "desc": "器械肩推的基础训练教学。",
      "steps": [
        "调节座椅，握把与肩部齐平",
        "背部贴垫，向上推起",
        "控制下放，避免腰椎过度反弓"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "machine shoulder press"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/machine-shoulder-press/frame-1.svg",
          "images/exercises/workout-guide/machine-shoulder-press/frame-2.svg",
          "images/exercises/workout-guide/machine-shoulder-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/machine-shoulder-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "reverse_pec_deck",
      "name": "反向蝴蝶机",
      "category": "shoulders",
      "muscles": [
        "三角肌后束"
      ],
      "met": 5.0,
      "desc": "反向蝴蝶机的基础训练教学。",
      "steps": [
        "面向靠垫坐稳，双手握把",
        "保持肘微屈，双臂向两侧打开",
        "控制返回，避免耸肩"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "reverse pec deck"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/reverse-pec-deck/frame-1.svg",
          "images/exercises/workout-guide/reverse-pec-deck/frame-2.svg",
          "images/exercises/workout-guide/reverse-pec-deck/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/reverse-pec-deck/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "wall_slide",
      "name": "靠墙滑臂",
      "category": "shoulders",
      "muscles": [
        "肩胛稳定肌"
      ],
      "met": 5.0,
      "desc": "靠墙滑臂的基础训练教学。",
      "steps": [
        "背部靠墙，双臂呈W形",
        "在舒适范围内沿墙向上滑动",
        "缓慢回到起点，避免挺腰"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "wall slide"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/wall_slide.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "goblet_squat",
      "name": "高脚杯深蹲",
      "category": "legs",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "met": 5.0,
      "desc": "高脚杯深蹲的基础训练教学。",
      "steps": [
        "双手抱哑铃于胸前，双脚站稳",
        "屈髋屈膝下蹲，膝盖与脚尖同向",
        "脚掌发力站起，保持躯干稳定"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "goblet squat"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "legs",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/goblet-squat/frame-1.svg",
          "images/exercises/workout-guide/goblet-squat/frame-2.svg",
          "images/exercises/workout-guide/goblet-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/goblet-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "smith_squat",
      "name": "史密斯深蹲",
      "category": "legs",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "met": 5.0,
      "desc": "史密斯深蹲的基础训练教学。",
      "steps": [
        "设置安全挡，杠铃位于上背",
        "控制下蹲至舒适深度",
        "伸膝伸髋站起，避免膝内扣"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "smith squat"
      ],
      "equipment": [
        "史密斯机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "legs",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/smith-machine-squat/frame-1.svg",
          "images/exercises/workout-guide/smith-machine-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/smith-machine-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "step_up",
      "name": "台阶上步",
      "category": "legs",
      "muscles": [
        "臀大肌",
        "股四头肌"
      ],
      "met": 5.0,
      "desc": "台阶上步的基础训练教学。",
      "steps": [
        "单脚踩稳低台，躯干直立",
        "前脚发力将身体带上台阶",
        "缓慢下台，两侧交替进行"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "step up"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "legs",
        "quads"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/step_up.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "reverse_lunge",
      "name": "后撤弓步",
      "category": "legs",
      "muscles": [
        "臀大肌",
        "股四头肌"
      ],
      "met": 5.0,
      "desc": "后撤弓步的基础训练教学。",
      "steps": [
        "双脚髋宽站立，收紧核心",
        "一脚后撤，双膝屈曲下降",
        "前脚发力还原，两侧交替"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "reverse lunge"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "legs",
        "quads"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/reverse_lunge.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "single_leg_rdl",
      "name": "单腿罗马尼亚硬拉",
      "category": "legs",
      "muscles": [
        "腘绳肌",
        "臀大肌"
      ],
      "met": 5.0,
      "desc": "单腿罗马尼亚硬拉的基础训练教学。",
      "steps": [
        "单腿站立，支撑膝微屈",
        "屈髋前倾，另一腿向后伸展",
        "伸髋站起，保持骨盆正向"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "single leg rdl"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "单侧",
      "tags": [
        "glutes",
        "hamstrings",
        "legs"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/single_leg_rdl.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "glute_bridge",
      "name": "臀桥",
      "category": "legs",
      "muscles": [
        "臀大肌"
      ],
      "met": 5.0,
      "desc": "臀桥的基础训练教学。",
      "steps": [
        "仰卧屈膝，脚掌踩实地面",
        "臀部发力抬髋，躯干与大腿成直线",
        "缓慢下降，避免腰部过度伸展"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "glute bridge"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "legs"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/glute-bridge/frame-1.svg",
          "images/exercises/workout-guide/glute-bridge/frame-2.svg",
          "images/exercises/workout-guide/glute-bridge/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/glute-bridge/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "seated_calf_raise",
      "name": "坐姿提踵",
      "category": "legs",
      "muscles": [
        "比目鱼肌"
      ],
      "met": 5.0,
      "desc": "坐姿提踵的基础训练教学。",
      "steps": [
        "坐稳器械，前脚掌踩踏板",
        "抬起脚跟，在顶点停顿",
        "缓慢降低脚跟，避免弹震"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "seated calf raise"
      ],
      "equipment": [
        "坐姿提踵器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "calves",
        "legs"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/seated-calf-raise/frame-1.svg",
          "images/exercises/workout-guide/seated-calf-raise/frame-2.svg",
          "images/exercises/workout-guide/seated-calf-raise/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/seated-calf-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "cable_curl",
      "name": "绳索弯举",
      "category": "arms",
      "muscles": [
        "肱二头肌"
      ],
      "met": 5.0,
      "desc": "绳索弯举的基础训练教学。",
      "steps": [
        "低位滑轮握把，上臂靠近躯干",
        "屈肘抬起握把，保持上臂稳定",
        "控制伸肘返回，避免摆动身体"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "cable curl"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "biceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/cable-curl/frame-1.svg",
          "images/exercises/workout-guide/cable-curl/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/cable-curl/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "reverse_curl",
      "name": "反握弯举",
      "category": "arms",
      "muscles": [
        "肱桡肌"
      ],
      "met": 5.0,
      "desc": "反握弯举的基础训练教学。",
      "steps": [
        "掌心向下握杠，上臂贴近躯干",
        "屈肘抬起，手腕保持中立",
        "缓慢下放，避免身体借力"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "reverse curl"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "forearms"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/reverse-curl/frame-1.svg",
          "images/exercises/workout-guide/reverse-curl/frame-2.svg",
          "images/exercises/workout-guide/reverse-curl/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/reverse-curl/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "single_tricep_extension",
      "name": "单臂绳索下压",
      "category": "arms",
      "muscles": [
        "肱三头肌"
      ],
      "met": 5.0,
      "desc": "单臂绳索下压的基础训练教学。",
      "steps": [
        "单手握高位把手，上臂固定",
        "伸肘向下压至接近伸直",
        "控制返回，避免肩部前移"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "single tricep extension"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "单侧",
      "tags": [
        "arms",
        "triceps"
      ],
      "art": {
        "provider": "Everkinetic",
        "label": "Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/everkinetic/svg/0166-relaxation.svg",
          "images/exercises/everkinetic/svg/0166-tension.svg"
        ],
        "tone": "invert",
        "sourceUrl": "https://github.com/everkinetic/data/blob/main/dist/exercises.json",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "pallof_press",
      "name": "帕洛夫抗旋转推",
      "category": "core",
      "muscles": [
        "腹斜肌"
      ],
      "met": 5.0,
      "desc": "帕洛夫抗旋转推的基础训练教学。",
      "steps": [
        "侧对滑轮站立，双手握把于胸前",
        "向前伸臂并抵抗绳索拉力",
        "缓慢收回，保持躯干正向"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "pallof press"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/pallof-press/frame-1.svg",
          "images/exercises/workout-guide/pallof-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/pallof-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "dead_bug",
      "name": "死虫式",
      "category": "core",
      "muscles": [
        "腹横肌"
      ],
      "met": 5.0,
      "desc": "死虫式的基础训练教学。",
      "steps": [
        "仰卧，髋膝屈曲90度，手臂上举",
        "对侧手脚缓慢伸展，腰部轻贴地面",
        "返回并换侧，保持呼吸"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "dead bug"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dead-bug/frame-1.svg",
          "images/exercises/workout-guide/dead-bug/frame-2.svg",
          "images/exercises/workout-guide/dead-bug/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dead-bug/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "bird_dog",
      "name": "鸟狗式",
      "category": "core",
      "muscles": [
        "核心稳定肌"
      ],
      "met": 5.0,
      "desc": "鸟狗式的基础训练教学。",
      "steps": [
        "四点跪姿，脊柱中立",
        "对侧手脚伸展，骨盆保持水平",
        "缓慢返回并换侧，避免塌腰"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "bird dog"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/bird-dog/frame-1.svg",
          "images/exercises/workout-guide/bird-dog/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/bird-dog/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "smith_bench_press",
      "name": "史密斯平板卧推",
      "aliases": [
        "smith bench press"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌",
        "肱三头肌"
      ],
      "equipment": [
        "史密斯机",
        "平凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "史密斯平板卧推：以史密斯机与平凳完成，主要训练胸大肌、肱三头肌。",
      "steps": [
        "调节安全挡，平凳对齐固定杆轨迹",
        "肩胛稳定，沿导轨下放至胸前再推起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肩胛稳定，沿导轨下放至胸前再推起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/smith-machine-bench-press/frame-1.svg",
          "images/exercises/workout-guide/smith-machine-bench-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/smith-machine-bench-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "smith_incline_press",
      "name": "史密斯上斜卧推",
      "aliases": [
        "smith incline press"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌上束",
        "三角肌前束"
      ],
      "equipment": [
        "史密斯机",
        "上斜凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "史密斯上斜卧推：以史密斯机与上斜凳完成，主要训练胸大肌上束、三角肌前束。",
      "steps": [
        "上斜凳设为舒适角度并调好安全挡",
        "下放到上胸前方，沿导轨推起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "下放到上胸前方，沿导轨推起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/smith_incline_press.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "decline_dumbbell_press",
      "name": "下斜哑铃卧推",
      "aliases": [
        "decline dumbbell press"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌下束",
        "肱三头肌"
      ],
      "equipment": [
        "哑铃",
        "下斜凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "下斜哑铃卧推：以哑铃与下斜凳完成，主要训练胸大肌下束、肱三头肌。",
      "steps": [
        "固定双腿，双手持铃置于胸侧",
        "在舒适范围内推起哑铃并控制下放",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "在舒适范围内推起哑铃并控制下放。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/decline-dumbbell-press/frame-1.svg",
          "images/exercises/workout-guide/decline-dumbbell-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/decline-dumbbell-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "dumbbell_floor_press",
      "name": "哑铃地板卧推",
      "aliases": [
        "dumbbell floor press"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌",
        "肱三头肌"
      ],
      "equipment": [
        "哑铃",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "哑铃地板卧推：以哑铃与地垫完成，主要训练胸大肌、肱三头肌。",
      "steps": [
        "仰卧屈膝，双手持铃，肘部靠近地面",
        "上臂轻触地面后向上推起，不弹震",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "上臂轻触地面后向上推起，不弹震。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "triceps"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/dumbbell_floor_press.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "barbell_floor_press",
      "name": "杠铃地板卧推",
      "aliases": [
        "barbell floor press"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌",
        "肱三头肌"
      ],
      "equipment": [
        "杠铃",
        "安全架"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "杠铃地板卧推：以杠铃与安全架完成，主要训练胸大肌、肱三头肌。",
      "steps": [
        "在安全架内仰卧于地面，握稳杠铃",
        "屈肘至上臂轻触地面，再垂直推起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈肘至上臂轻触地面，再垂直推起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "triceps"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/barbell_floor_press.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "pec_deck",
      "name": "蝴蝶机夹胸",
      "aliases": [
        "pec deck"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalAdduction",
      "met": 5,
      "desc": "蝴蝶机夹胸：以固定器械完成，主要训练胸大肌。",
      "steps": [
        "调整座高，让握把或肘垫与胸部齐平",
        "双臂向前合拢，控制还原到舒适范围",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "双臂向前合拢，控制还原到舒适范围。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/pec-deck/frame-1.svg",
          "images/exercises/workout-guide/pec-deck/frame-2.svg",
          "images/exercises/workout-guide/pec-deck/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/pec-deck/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "svend_press",
      "name": "杠铃片夹胸推",
      "aliases": [
        "svend press"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌",
        "三角肌前束"
      ],
      "equipment": [
        "杠铃片"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "杠铃片夹胸推：以杠铃片完成，主要训练胸大肌、三角肌前束。",
      "steps": [
        "双手掌心夹住轻杠铃片置于胸前",
        "持续内夹并向前伸臂，再收回胸前",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "持续内夹并向前伸臂，再收回胸前。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/svend_press.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "diamond_pushup",
      "name": "钻石俯卧撑",
      "aliases": [
        "diamond pushup"
      ],
      "category": "chest",
      "muscles": [
        "肱三头肌",
        "胸大肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "钻石俯卧撑：以自重与地垫完成，主要训练肱三头肌、胸大肌。",
      "steps": [
        "双手窄距撑地，核心收紧，身体成直线",
        "屈肘下降，再将地面推开；手腕不适则放宽握距",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈肘下降，再将地面推开；手腕不适则放宽握距。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/diamond-push-up/frame-1.svg",
          "images/exercises/workout-guide/diamond-push-up/frame-2.svg",
          "images/exercises/workout-guide/diamond-push-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/diamond-push-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "kneeling_pushup",
      "name": "跪姿俯卧撑",
      "aliases": [
        "kneeling pushup"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌",
        "肱三头肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "跪姿俯卧撑：以自重与地垫完成，主要训练胸大肌、肱三头肌。",
      "steps": [
        "双膝着地，肩髋膝尽量保持直线",
        "胸部缓慢靠近地面，再用双臂推起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "胸部缓慢靠近地面，再用双臂推起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/knee-push-up/frame-1.svg",
          "images/exercises/workout-guide/knee-push-up/frame-2.svg",
          "images/exercises/workout-guide/knee-push-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/knee-push-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "single_cable_chest_press",
      "name": "单臂绳索推胸",
      "aliases": [
        "single cable chest press"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌",
        "核心"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "单臂绳索推胸：以绳索完成，主要训练胸大肌、核心。",
      "steps": [
        "滑轮在胸高，分腿站立，单手握把",
        "抵抗身体旋转，单臂向前推出再收回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "抵抗身体旋转，单臂向前推出再收回。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "chest",
        "core"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/single_cable_chest_press.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "neutral_pullup",
      "name": "中立握引体向上",
      "aliases": [
        "neutral pullup"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "肱二头肌"
      ],
      "equipment": [
        "引体架"
      ],
      "difficulty": "intermediate",
      "movementPattern": "verticalPull",
      "met": 5,
      "desc": "中立握引体向上：以引体架完成，主要训练背阔肌、肱二头肌。",
      "steps": [
        "双手掌心相对握住平行把，肩胛下沉",
        "肘向身体两侧拉，抬起躯干后缓慢下降",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肘向身体两侧拉，抬起躯干后缓慢下降。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/neutral-grip-pull-up/frame-1.svg",
          "images/exercises/workout-guide/neutral-grip-pull-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/neutral-grip-pull-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "wide_pullup",
      "name": "宽握引体向上",
      "aliases": [
        "wide pullup"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "大圆肌"
      ],
      "equipment": [
        "引体架"
      ],
      "difficulty": "intermediate",
      "movementPattern": "verticalPull",
      "met": 5,
      "desc": "宽握引体向上：以引体架完成，主要训练背阔肌、大圆肌。",
      "steps": [
        "采用比肩稍宽的正握，避免极端握距",
        "肩胛先下沉，向上拉起身体并控制返回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肩胛先下沉，向上拉起身体并控制返回。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/wide_pullup.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "close_pulldown",
      "name": "窄握高位下拉",
      "aliases": [
        "close pulldown"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "肱二头肌"
      ],
      "equipment": [
        "绳索",
        "V形把手"
      ],
      "difficulty": "intermediate",
      "movementPattern": "verticalPull",
      "met": 5,
      "desc": "窄握高位下拉：以绳索与V形把手完成，主要训练背阔肌、肱二头肌。",
      "steps": [
        "固定大腿，双手握窄距把手",
        "肘向下拉近躯干，握把降到上胸前",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肘向下拉近躯干，握把降到上胸前。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/close-grip-lat-pulldown/frame-1.svg",
          "images/exercises/workout-guide/close-grip-lat-pulldown/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/close-grip-lat-pulldown/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "reverse_pulldown",
      "name": "反握高位下拉",
      "aliases": [
        "reverse pulldown"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "肱二头肌"
      ],
      "equipment": [
        "绳索",
        "直杆"
      ],
      "difficulty": "intermediate",
      "movementPattern": "verticalPull",
      "met": 5,
      "desc": "反握高位下拉：以绳索与直杆完成，主要训练背阔肌、肱二头肌。",
      "steps": [
        "掌心朝向自己，握距约肩宽",
        "挺胸稳定躯干，沿身体前方下拉",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "挺胸稳定躯干，沿身体前方下拉。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps"
      ],
      "art": {
        "provider": "Everkinetic",
        "label": "Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/everkinetic/svg/0095-relaxation.svg",
          "images/exercises/everkinetic/svg/0095-tension.svg"
        ],
        "tone": "invert",
        "sourceUrl": "https://github.com/everkinetic/data/blob/main/dist/exercises.json",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "single_lat_pulldown",
      "name": "单臂高位下拉",
      "aliases": [
        "single lat pulldown"
      ],
      "category": "back",
      "muscles": [
        "背阔肌"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "verticalPull",
      "met": 5,
      "desc": "单臂高位下拉：以绳索完成，主要训练背阔肌。",
      "steps": [
        "单膝跪地或坐稳，单手握高位把手",
        "肘朝髋部方向下拉，再控制上放",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肘朝髋部方向下拉，再控制上放。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "back"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/single_lat_pulldown.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "machine_row",
      "name": "坐姿器械划船",
      "aliases": [
        "machine row"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "菱形肌"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPull",
      "met": 5,
      "desc": "坐姿器械划船：以固定器械完成，主要训练背阔肌、菱形肌。",
      "steps": [
        "调座椅让胸部贴紧靠垫，双手握把",
        "双肘向后拉，胸部保持贴垫",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "双肘向后拉，胸部保持贴垫。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/machine-row/frame-1.svg",
          "images/exercises/workout-guide/machine-row/frame-2.svg",
          "images/exercises/workout-guide/machine-row/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/machine-row/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "meadows_row",
      "name": "地雷管单臂划船",
      "aliases": [
        "meadows row"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "斜方肌"
      ],
      "equipment": [
        "地雷管",
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPull",
      "met": 5,
      "desc": "地雷管单臂划船：以地雷管与杠铃完成，主要训练背阔肌、斜方肌。",
      "steps": [
        "侧对杠铃末端，屈髋站稳，单手握杆",
        "向髋旁拉起杆端，保持躯干不扭动",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "向髋旁拉起杆端，保持躯干不扭动。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "back",
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/meadows-row/frame-1.svg",
          "images/exercises/workout-guide/meadows-row/frame-2.svg",
          "images/exercises/workout-guide/meadows-row/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/meadows-row/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "seal_row",
      "name": "高凳俯卧杠铃划船",
      "aliases": [
        "seal row"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "菱形肌"
      ],
      "equipment": [
        "杠铃",
        "高平凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPull",
      "met": 5,
      "desc": "高凳俯卧杠铃划船：以杠铃与高平凳完成，主要训练背阔肌、菱形肌。",
      "steps": [
        "俯卧专用高凳，胸部腹部获得支撑",
        "双肘向后拉，使杠铃靠近凳下，再缓慢下放",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "双肘向后拉，使杠铃靠近凳下，再缓慢下放。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/seal_row.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "renegade_row",
      "name": "哑铃支撑划船",
      "aliases": [
        "renegade row"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "核心"
      ],
      "equipment": [
        "哑铃",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPull",
      "met": 5,
      "desc": "哑铃支撑划船：以哑铃与地垫完成，主要训练背阔肌、核心。",
      "steps": [
        "握稳不易滚动的哑铃呈高平板姿势，双脚分开",
        "一侧划船，另一侧支撑，尽量保持骨盆水平",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "一侧划船，另一侧支撑，尽量保持骨盆水平。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back",
        "core"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/renegade_row.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "dumbbell_pullover",
      "name": "仰卧哑铃上拉",
      "aliases": [
        "dumbbell pullover"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "胸大肌"
      ],
      "equipment": [
        "哑铃",
        "平凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "shoulderExtension",
      "met": 5,
      "desc": "仰卧哑铃上拉：以哑铃与平凳完成，主要训练背阔肌、胸大肌。",
      "steps": [
        "仰卧凳上，双手托住一只哑铃置于胸上方",
        "肘微屈，向头后舒适范围下放，再拉回胸上方",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肘微屈，向头后舒适范围下放，再拉回胸上方。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back",
        "chest"
      ],
      "art": {
        "provider": "Everkinetic",
        "label": "Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/everkinetic/svg/0079-relaxation.svg",
          "images/exercises/everkinetic/svg/0079-tension.svg"
        ],
        "tone": "invert",
        "sourceUrl": "https://github.com/everkinetic/data/blob/main/dist/exercises.json",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "seated_barbell_press",
      "name": "坐姿杠铃肩推",
      "aliases": [
        "seated barbell press"
      ],
      "category": "shoulders",
      "muscles": [
        "三角肌",
        "肱三头肌"
      ],
      "equipment": [
        "杠铃",
        "靠背凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "verticalPush",
      "met": 5,
      "desc": "坐姿杠铃肩推：以杠铃与靠背凳完成，主要训练三角肌、肱三头肌。",
      "steps": [
        "靠背凳置于安全架内，杠铃位于上胸前",
        "核心稳定，向上推起并控制回落",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "核心稳定，向上推起并控制回落。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "shoulders",
        "triceps"
      ],
      "art": {
        "provider": "Everkinetic",
        "label": "Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/everkinetic/svg/0004-relaxation.svg",
          "images/exercises/everkinetic/svg/0004-tension.svg"
        ],
        "tone": "invert",
        "sourceUrl": "https://github.com/everkinetic/data/blob/main/dist/exercises.json",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "push_press",
      "name": "杠铃借力推举",
      "aliases": [
        "push press"
      ],
      "category": "compound",
      "muscles": [
        "三角肌",
        "股四头肌",
        "肱三头肌"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "verticalPush",
      "met": 6,
      "desc": "杠铃借力推举：以杠铃完成，主要训练三角肌、股四头肌、肱三头肌。",
      "steps": [
        "杠铃前架，双脚踩稳，屈膝做小幅预蹲",
        "腿部伸展带动杠铃上推，再控制回到前架",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "腿部伸展带动杠铃上推，再控制回到前架。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "compound",
        "quads",
        "shoulders",
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/push-press/frame-1.svg",
          "images/exercises/workout-guide/push-press/frame-2.svg",
          "images/exercises/workout-guide/push-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/push-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "single_dumbbell_press",
      "name": "单臂哑铃肩推",
      "aliases": [
        "single dumbbell press"
      ],
      "category": "shoulders",
      "muscles": [
        "三角肌",
        "核心"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "verticalPush",
      "met": 5,
      "desc": "单臂哑铃肩推：以哑铃完成，主要训练三角肌、核心。",
      "steps": [
        "站稳或坐稳，单手持铃于肩旁",
        "保持躯干正直，向上推铃，再缓慢下降",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "保持躯干正直，向上推铃，再缓慢下降。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "core",
        "shoulders"
      ],
      "art": {
        "provider": "Everkinetic",
        "label": "Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/everkinetic/svg/0038-relaxation.svg",
          "images/exercises/everkinetic/svg/0038-tension.svg"
        ],
        "tone": "invert",
        "sourceUrl": "https://github.com/everkinetic/data/blob/main/dist/exercises.json",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "lean_lateral_raise",
      "name": "倚靠式哑铃侧平举",
      "aliases": [
        "lean lateral raise"
      ],
      "category": "shoulders",
      "muscles": [
        "三角肌中束"
      ],
      "equipment": [
        "哑铃",
        "固定支撑"
      ],
      "difficulty": "intermediate",
      "movementPattern": "abduction",
      "met": 5,
      "desc": "倚靠式哑铃侧平举：以哑铃与固定支撑完成，主要训练三角肌中束。",
      "steps": [
        "一手扶稳支撑，身体小幅侧倾，另一手持铃",
        "肘微屈将哑铃抬向身体侧面，避免耸肩",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肘微屈将哑铃抬向身体侧面，避免耸肩。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/lean_lateral_raise.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "prone_y_raise",
      "name": "上斜凳哑铃Y字举",
      "aliases": [
        "prone y raise"
      ],
      "category": "shoulders",
      "muscles": [
        "下斜方肌",
        "三角肌"
      ],
      "equipment": [
        "轻哑铃",
        "上斜凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "scapular",
      "met": 5,
      "desc": "俯卧Y字举：以轻哑铃与上斜凳完成，主要训练下斜方肌、三角肌。",
      "steps": [
        "胸部贴上斜凳，双手拇指朝上",
        "双臂向斜前方抬成Y形，控制肩胛",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "双臂向斜前方抬成Y形，控制肩胛。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/prone_y_raise.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "cable_front_raise",
      "name": "绳索前平举",
      "aliases": [
        "cable front raise"
      ],
      "category": "shoulders",
      "muscles": [
        "三角肌前束"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "flexion",
      "met": 5,
      "desc": "绳索前平举：以绳索完成，主要训练三角肌前束。",
      "steps": [
        "低位滑轮在身后或身前，握稳把手",
        "肘微屈向前举至舒适高度，再缓慢返回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肘微屈向前举至舒适高度，再缓慢返回。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/cable-front-raise/frame-1.svg",
          "images/exercises/workout-guide/cable-front-raise/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/cable-front-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "plate_front_raise",
      "name": "杠铃片前平举",
      "aliases": [
        "plate front raise"
      ],
      "category": "shoulders",
      "muscles": [
        "三角肌前束"
      ],
      "equipment": [
        "杠铃片"
      ],
      "difficulty": "intermediate",
      "movementPattern": "flexion",
      "met": 5,
      "desc": "杠铃片前平举：以杠铃片完成，主要训练三角肌前束。",
      "steps": [
        "双手握杠铃片两侧，核心稳定",
        "将杠铃片抬到肩高附近，避免身体后仰",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "将杠铃片抬到肩高附近，避免身体后仰。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/plate-front-raise/frame-1.svg",
          "images/exercises/workout-guide/plate-front-raise/frame-2.svg",
          "images/exercises/workout-guide/plate-front-raise/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/plate-front-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "cable_upright_row",
      "name": "绳索直立划船",
      "aliases": [
        "cable upright row"
      ],
      "category": "shoulders",
      "muscles": [
        "三角肌中束",
        "斜方肌"
      ],
      "equipment": [
        "绳索",
        "直杆"
      ],
      "difficulty": "intermediate",
      "movementPattern": "abduction",
      "met": 5,
      "desc": "绳索直立划船：以绳索与直杆完成，主要训练三角肌中束、斜方肌。",
      "steps": [
        "握住低位直杆，采用舒适握距",
        "双肘带动向上拉，在肩部舒适范围内停止",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "双肘带动向上拉，在肩部舒适范围内停止。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ],
      "art": {
        "provider": "Everkinetic",
        "label": "Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/everkinetic/svg/0015-relaxation.svg",
          "images/exercises/everkinetic/svg/0015-tension.svg"
        ],
        "tone": "invert",
        "sourceUrl": "https://github.com/everkinetic/data/blob/main/dist/exercises.json",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "dumbbell_shrug",
      "name": "哑铃耸肩",
      "aliases": [
        "dumbbell shrug"
      ],
      "category": "shoulders",
      "muscles": [
        "斜方肌上束"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "scapular",
      "met": 5,
      "desc": "哑铃耸肩：以哑铃完成，主要训练斜方肌上束。",
      "steps": [
        "双手持铃垂于体侧，颈部保持中立",
        "肩膀向上提起后缓慢放下，不绕肩画圈",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肩膀向上提起后缓慢放下，不绕肩画圈。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dumbbell-shrug/frame-1.svg",
          "images/exercises/workout-guide/dumbbell-shrug/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dumbbell-shrug/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "band_pull_apart",
      "name": "弹力带拉开",
      "aliases": [
        "band pull apart"
      ],
      "category": "shoulders",
      "muscles": [
        "三角肌后束",
        "菱形肌"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPull",
      "met": 5,
      "desc": "弹力带拉开：以弹力带完成，主要训练三角肌后束、菱形肌。",
      "steps": [
        "双手肩高握带，肘微屈，选择轻阻力",
        "双臂向两侧拉开，胸廓保持稳定",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "双臂向两侧拉开，胸廓保持稳定。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back",
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/band-pull-apart/frame-1.svg",
          "images/exercises/workout-guide/band-pull-apart/frame-2.svg",
          "images/exercises/workout-guide/band-pull-apart/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/band-pull-apart/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "sumo_squat",
      "name": "哑铃相扑深蹲",
      "aliases": [
        "sumo squat"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "内收肌"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "squat",
      "met": 5,
      "desc": "哑铃相扑深蹲：以哑铃完成，主要训练股四头肌、臀大肌、内收肌。",
      "steps": [
        "双脚宽站，脚尖自然外转，双手垂持哑铃",
        "膝盖沿脚尖方向屈曲，再蹬地站起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "膝盖沿脚尖方向屈曲，再蹬地站起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dumbbell-sumo-squat/frame-1.svg",
          "images/exercises/workout-guide/dumbbell-sumo-squat/frame-2.svg",
          "images/exercises/workout-guide/dumbbell-sumo-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dumbbell-sumo-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "split_squat",
      "name": "原地分腿蹲",
      "aliases": [
        "split squat"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "lunge",
      "met": 5,
      "desc": "原地分腿蹲：以哑铃完成，主要训练股四头肌、臀大肌。",
      "steps": [
        "前后分腿站稳，双脚保持横向间距",
        "躯干控制下降，前脚发力回到起点",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "躯干控制下降，前脚发力回到起点。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/split-squat/frame-1.svg",
          "images/exercises/workout-guide/split-squat/frame-2.svg",
          "images/exercises/workout-guide/split-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/split-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "walking_lunge",
      "name": "行走弓步",
      "aliases": [
        "walking lunge"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "lunge",
      "met": 5,
      "desc": "行走弓步：以哑铃完成，主要训练股四头肌、臀大肌。",
      "steps": [
        "双手持铃，留出足够前进空间",
        "向前迈步并下降，再抬起后脚进入下一步",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "向前迈步并下降，再抬起后脚进入下一步。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "glutes",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/walking-lunge/frame-1.svg",
          "images/exercises/workout-guide/walking-lunge/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/walking-lunge/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "lateral_lunge",
      "name": "侧向弓步",
      "aliases": [
        "lateral lunge"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "内收肌"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "lunge",
      "met": 5,
      "desc": "侧向弓步：以自重完成，主要训练股四头肌、臀大肌、内收肌。",
      "steps": [
        "双脚站稳，向侧面迈出一步",
        "屈髋屈膝坐向迈出侧，另一腿伸展，再蹬回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈髋屈膝坐向迈出侧，另一腿伸展，再蹬回。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "glutes",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/lateral-lunge/frame-1.svg",
          "images/exercises/workout-guide/lateral-lunge/frame-2.svg",
          "images/exercises/workout-guide/lateral-lunge/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/lateral-lunge/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "curtsy_lunge",
      "name": "交叉后撤弓步",
      "aliases": [
        "curtsy lunge"
      ],
      "category": "glutes",
      "muscles": [
        "臀中肌",
        "臀大肌"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "lunge",
      "met": 5,
      "desc": "交叉后撤弓步：以自重完成，主要训练臀中肌、臀大肌。",
      "steps": [
        "站稳后将一脚小幅交叉向后迈",
        "前腿控制下降，膝盖保持与脚尖方向协调",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "前腿控制下降，膝盖保持与脚尖方向协调。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "glutes"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/curtsy-lunge/frame-1.svg",
          "images/exercises/workout-guide/curtsy-lunge/frame-2.svg",
          "images/exercises/workout-guide/curtsy-lunge/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/curtsy-lunge/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "heel_elevated_goblet",
      "name": "垫跟高脚杯深蹲",
      "aliases": [
        "heel elevated goblet"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌"
      ],
      "equipment": [
        "哑铃",
        "稳定斜板"
      ],
      "difficulty": "intermediate",
      "movementPattern": "squat",
      "met": 5,
      "desc": "垫跟高脚杯深蹲：以哑铃与稳定斜板完成，主要训练股四头肌。",
      "steps": [
        "双脚跟垫于稳定斜板，胸前抱铃",
        "保持脚掌接触支撑，屈膝下蹲再起身",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "保持脚掌接触支撑，屈膝下蹲再起身。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/heel-elevated-goblet-squat/frame-1.svg",
          "images/exercises/workout-guide/heel-elevated-goblet-squat/frame-2.svg",
          "images/exercises/workout-guide/heel-elevated-goblet-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/heel-elevated-goblet-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "zercher_squat",
      "name": "泽奇深蹲",
      "aliases": [
        "zercher squat"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "核心"
      ],
      "equipment": [
        "杠铃",
        "安全架"
      ],
      "difficulty": "advanced",
      "movementPattern": "squat",
      "met": 5,
      "desc": "泽奇深蹲：以杠铃与安全架完成，主要训练股四头肌、臀大肌、核心。",
      "steps": [
        "使用轻重量，将杠铃置于肘窝并设置安全挡",
        "抱紧杠铃，控制屈髋屈膝下蹲后站起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "抱紧杠铃，控制屈髋屈膝下蹲后站起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "quads"
      ],
      "art": {
        "provider": "Everkinetic",
        "label": "Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/everkinetic/svg/0161-relaxation.svg",
          "images/exercises/everkinetic/svg/0161-tension.svg"
        ],
        "tone": "invert",
        "sourceUrl": "https://github.com/everkinetic/data/blob/main/dist/exercises.json",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "landmine_squat",
      "name": "地雷管深蹲",
      "aliases": [
        "landmine squat"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "equipment": [
        "地雷管"
      ],
      "difficulty": "intermediate",
      "movementPattern": "squat",
      "met": 5,
      "desc": "地雷管深蹲：以地雷管完成，主要训练股四头肌、臀大肌。",
      "steps": [
        "双手托住杆端于胸前，双脚站稳",
        "顺应杆端弧形路径下蹲，再推地站起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "顺应杆端弧形路径下蹲，再推地站起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/landmine-squat/frame-1.svg",
          "images/exercises/workout-guide/landmine-squat/frame-2.svg",
          "images/exercises/workout-guide/landmine-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/landmine-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "belt_squat",
      "name": "腰带深蹲",
      "aliases": [
        "belt squat"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "equipment": [
        "腰带深蹲机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "squat",
      "met": 5,
      "desc": "腰带深蹲：以腰带深蹲机完成，主要训练股四头肌、臀大肌。",
      "steps": [
        "系好专用腰带并站上踏台，扶稳把手",
        "保持躯干稳定，屈髋屈膝下降再站起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "保持躯干稳定，屈髋屈膝下降再站起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/belt-squat/frame-1.svg",
          "images/exercises/workout-guide/belt-squat/frame-2.svg",
          "images/exercises/workout-guide/belt-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/belt-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "assisted_sissy_squat",
      "name": "辅助西西深蹲",
      "aliases": [
        "assisted sissy squat"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌"
      ],
      "equipment": [
        "固定支撑",
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "kneeExtension",
      "met": 5,
      "desc": "辅助西西深蹲：以固定支撑与自重完成，主要训练股四头肌。",
      "steps": [
        "扶稳支撑，采用小幅度与自重练习",
        "屈膝向前，躯干大腿维持相对直线，再伸膝返回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈膝向前，躯干大腿维持相对直线，再伸膝返回。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "quads"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/assisted_sissy_squat.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "smith_split_squat",
      "name": "史密斯分腿蹲",
      "aliases": [
        "smith split squat"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "equipment": [
        "史密斯机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "lunge",
      "met": 5,
      "desc": "史密斯分腿蹲：以史密斯机完成，主要训练股四头肌、臀大肌。",
      "steps": [
        "杆置上背，前后分腿站稳并设置安全挡",
        "沿导轨下降，前脚踩稳发力还原",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "沿导轨下降，前脚踩稳发力还原。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/smith-machine-split-squat/frame-1.svg",
          "images/exercises/workout-guide/smith-machine-split-squat/frame-2.svg",
          "images/exercises/workout-guide/smith-machine-split-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/smith-machine-split-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "single_leg_press",
      "name": "单腿腿举",
      "aliases": [
        "single leg press"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "equipment": [
        "腿举机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "squat",
      "met": 5,
      "desc": "单腿腿举：以腿举机完成，主要训练股四头肌、臀大肌。",
      "steps": [
        "单脚踩稳踏板，臀背贴垫，选择较轻重量",
        "屈膝控制下降，单腿推回且不锁死膝关节",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈膝控制下降，单腿推回且不锁死膝关节。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "glutes",
        "quads"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/single_leg_press.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "seated_leg_curl",
      "name": "坐姿腿弯举",
      "aliases": [
        "seated leg curl"
      ],
      "category": "hamstrings",
      "muscles": [
        "腘绳肌"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "kneeFlexion",
      "met": 5,
      "desc": "坐姿腿弯举：以固定器械完成，主要训练腘绳肌。",
      "steps": [
        "调节腿垫并固定大腿，膝关节对准转轴",
        "向下后方屈膝拉动腿垫，再缓慢伸回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "向下后方屈膝拉动腿垫，再缓慢伸回。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "hamstrings"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/seated-leg-curl/frame-1.svg",
          "images/exercises/workout-guide/seated-leg-curl/frame-2.svg",
          "images/exercises/workout-guide/seated-leg-curl/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/seated-leg-curl/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "standing_leg_curl",
      "name": "站姿单腿弯举",
      "aliases": [
        "standing leg curl"
      ],
      "category": "hamstrings",
      "muscles": [
        "腘绳肌"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "kneeFlexion",
      "met": 5,
      "desc": "站姿单腿弯举：以固定器械完成，主要训练腘绳肌。",
      "steps": [
        "支撑腿站稳，另一腿踝后抵住腿垫",
        "保持髋部不前后晃动，屈膝抬起小腿",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "保持髋部不前后晃动，屈膝抬起小腿。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "hamstrings"
      ],
      "art": {
        "provider": "Everkinetic",
        "label": "Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/everkinetic/svg/0120-relaxation.svg",
          "images/exercises/everkinetic/svg/0120-tension.svg"
        ],
        "tone": "invert",
        "sourceUrl": "https://github.com/everkinetic/data/blob/main/dist/exercises.json",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "assisted_nordic_curl",
      "name": "辅助北欧挺",
      "aliases": [
        "assisted nordic curl"
      ],
      "category": "hamstrings",
      "muscles": [
        "腘绳肌"
      ],
      "equipment": [
        "固定脚踝装置",
        "弹力带"
      ],
      "difficulty": "advanced",
      "movementPattern": "kneeFlexion",
      "met": 5,
      "desc": "辅助北欧挺：以固定脚踝装置与弹力带完成，主要训练腘绳肌。",
      "steps": [
        "跪于软垫并可靠固定脚踝，使用弹力带辅助",
        "保持肩髋膝一线缓慢前倾，借助辅助力量返回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "保持肩髋膝一线缓慢前倾，借助辅助力量返回。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "hamstrings"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/assisted_nordic_curl.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "slider_leg_curl",
      "name": "滑盘腿弯举",
      "aliases": [
        "slider leg curl"
      ],
      "category": "hamstrings",
      "muscles": [
        "腘绳肌",
        "臀大肌"
      ],
      "equipment": [
        "滑盘",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "kneeFlexion",
      "met": 5,
      "desc": "滑盘腿弯举：以滑盘与地垫完成，主要训练腘绳肌、臀大肌。",
      "steps": [
        "仰卧，脚跟放滑盘，臀部抬起",
        "脚跟向远处滑出，再屈膝拉回，保持髋部稳定",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "脚跟向远处滑出，再屈膝拉回，保持髋部稳定。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/slider_leg_curl.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "good_morning",
      "name": "杠铃早安式",
      "aliases": [
        "good morning"
      ],
      "category": "hamstrings",
      "muscles": [
        "腘绳肌",
        "臀大肌",
        "竖脊肌"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hinge",
      "met": 5,
      "desc": "杠铃早安式：以杠铃完成，主要训练腘绳肌、臀大肌、竖脊肌。",
      "steps": [
        "轻杠置上背，膝微屈，脊柱中立",
        "髋部向后推使躯干前倾，再伸髋站起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "髋部向后推使躯干前倾，再伸髋站起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back",
        "glutes",
        "hamstrings"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/good-morning/frame-1.svg",
          "images/exercises/workout-guide/good-morning/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/good-morning/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "dumbbell_rdl",
      "name": "哑铃罗马尼亚硬拉",
      "aliases": [
        "dumbbell rdl"
      ],
      "category": "hamstrings",
      "muscles": [
        "腘绳肌",
        "臀大肌"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hinge",
      "met": 5,
      "desc": "哑铃罗马尼亚硬拉：以哑铃完成，主要训练腘绳肌、臀大肌。",
      "steps": [
        "双手持铃于大腿前，膝微屈",
        "髋部后移让哑铃沿腿侧下降，再伸髋还原",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "髋部后移让哑铃沿腿侧下降，再伸髋还原。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dumbbell-romanian-deadlift/frame-1.svg",
          "images/exercises/workout-guide/dumbbell-romanian-deadlift/frame-2.svg",
          "images/exercises/workout-guide/dumbbell-romanian-deadlift/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dumbbell-romanian-deadlift/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "stiff_leg_deadlift",
      "name": "杠铃直腿硬拉",
      "aliases": [
        "stiff leg deadlift"
      ],
      "category": "hamstrings",
      "muscles": [
        "腘绳肌",
        "臀大肌"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hinge",
      "met": 5,
      "desc": "杠铃直腿硬拉：以杠铃完成，主要训练腘绳肌、臀大肌。",
      "steps": [
        "膝关节保持轻微弯曲而不锁死，采用轻重量",
        "屈髋下降至可保持背部中立的范围，再站起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈髋下降至可保持背部中立的范围，再站起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/stiff_leg_deadlift.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "cable_pull_through",
      "name": "绳索胯下拉",
      "aliases": [
        "cable pull through"
      ],
      "category": "glutes",
      "muscles": [
        "臀大肌",
        "腘绳肌"
      ],
      "equipment": [
        "绳索",
        "绳把"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hinge",
      "met": 5,
      "desc": "绳索胯下拉：以绳索与绳把完成，主要训练臀大肌、腘绳肌。",
      "steps": [
        "背对低位滑轮，绳把从双腿之间穿过",
        "髋部向后折叠，再伸髋站直，不用腰部后仰",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "髋部向后折叠，再伸髋站直，不用腰部后仰。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/cable-pull-through/frame-1.svg",
          "images/exercises/workout-guide/cable-pull-through/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/cable-pull-through/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "sumo_deadlift",
      "name": "相扑硬拉",
      "aliases": [
        "sumo deadlift"
      ],
      "category": "glutes",
      "muscles": [
        "臀大肌",
        "内收肌",
        "股四头肌"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hinge",
      "met": 5,
      "desc": "相扑硬拉：以杠铃完成，主要训练臀大肌、内收肌、股四头肌。",
      "steps": [
        "宽站距，双手于双膝之间握杆",
        "脚掌蹬地并伸髋抬杆，杆沿身体前方移动",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "脚掌蹬地并伸髋抬杆，杆沿身体前方移动。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/sumo-deadlift/frame-1.svg",
          "images/exercises/workout-guide/sumo-deadlift/frame-2.svg",
          "images/exercises/workout-guide/sumo-deadlift/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/sumo-deadlift/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "trap_bar_deadlift",
      "name": "六角杠硬拉",
      "aliases": [
        "trap bar deadlift"
      ],
      "category": "compound",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "背部"
      ],
      "equipment": [
        "六角杠"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hinge",
      "met": 6,
      "desc": "六角杠硬拉：以六角杠完成，主要训练股四头肌、臀大肌、背部。",
      "steps": [
        "站在六角杠中央，握稳两侧把手",
        "背部稳定，伸膝伸髋抬起重量，再控制下放",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "背部稳定，伸膝伸髋抬起重量，再控制下放。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "compound",
        "glutes",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/trap-bar-deadlift/frame-1.svg",
          "images/exercises/workout-guide/trap-bar-deadlift/frame-2.svg",
          "images/exercises/workout-guide/trap-bar-deadlift/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/trap-bar-deadlift/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "single_glute_bridge",
      "name": "单腿臀桥",
      "aliases": [
        "single glute bridge"
      ],
      "category": "glutes",
      "muscles": [
        "臀大肌",
        "腘绳肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hipExtension",
      "met": 5,
      "desc": "单腿臀桥：以自重与地垫完成，主要训练臀大肌、腘绳肌。",
      "steps": [
        "仰卧屈一膝踩地，另一腿抬起",
        "支撑侧臀部发力抬髋，骨盆保持水平",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "支撑侧臀部发力抬髋，骨盆保持水平。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "glutes",
        "hamstrings"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/single-leg-glute-bridge/frame-1.svg",
          "images/exercises/workout-guide/single-leg-glute-bridge/frame-2.svg",
          "images/exercises/workout-guide/single-leg-glute-bridge/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/single-leg-glute-bridge/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "cable_kickback",
      "name": "绳索后踢腿",
      "aliases": [
        "cable kickback"
      ],
      "category": "glutes",
      "muscles": [
        "臀大肌"
      ],
      "equipment": [
        "绳索",
        "踝带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hipExtension",
      "met": 5,
      "desc": "绳索后踢腿：以绳索与踝带完成，主要训练臀大肌。",
      "steps": [
        "踝带连接低位滑轮，双手扶稳支撑",
        "在腰部不反弓的范围内向后伸髋，再缓慢返回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "在腰部不反弓的范围内向后伸髋，再缓慢返回。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/cable-kickback/frame-1.svg",
          "images/exercises/workout-guide/cable-kickback/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/cable-kickback/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "quadruped_abduction",
      "name": "四点跪姿侧抬腿",
      "aliases": [
        "quadruped abduction"
      ],
      "category": "glutes",
      "muscles": [
        "臀中肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "abduction",
      "met": 5,
      "desc": "四点跪姿侧抬腿：以自重与地垫完成，主要训练臀中肌。",
      "steps": [
        "四点跪姿，双手位于肩下方",
        "膝盖弯曲向侧面抬起，保持躯干不旋转",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "膝盖弯曲向侧面抬起，保持躯干不旋转。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/fire-hydrant/frame-1.svg",
          "images/exercises/workout-guide/fire-hydrant/frame-2.svg",
          "images/exercises/workout-guide/fire-hydrant/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/fire-hydrant/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "clamshell",
      "name": "弹力带蚌式开合",
      "aliases": [
        "clamshell"
      ],
      "category": "glutes",
      "muscles": [
        "臀中肌"
      ],
      "equipment": [
        "弹力带",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "externalRotation",
      "met": 5,
      "desc": "蚌式开合：以弹力带与地垫完成，主要训练臀中肌。",
      "steps": [
        "侧卧屈髋屈膝，环形弹力带放在膝上，双脚相叠",
        "脚部保持接触，上侧膝盖抬起再缓慢合拢",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "脚部保持接触，上侧膝盖抬起再缓慢合拢。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/banded-clamshell/frame-1.svg",
          "images/exercises/workout-guide/banded-clamshell/frame-2.svg",
          "images/exercises/workout-guide/banded-clamshell/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/banded-clamshell/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "band_lateral_walk",
      "name": "弹力带侧向行走",
      "aliases": [
        "band lateral walk"
      ],
      "category": "glutes",
      "muscles": [
        "臀中肌"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "abduction",
      "met": 5,
      "desc": "弹力带侧向行走：以弹力带完成，主要训练臀中肌。",
      "steps": [
        "弹力带套膝上或踝上，微屈髋膝",
        "小步侧移，保持膝与脚尖同向和带的张力",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "小步侧移，保持膝与脚尖同向和带的张力。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "glutes"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/banded-lateral-walk/frame-1.svg",
          "images/exercises/workout-guide/banded-lateral-walk/frame-2.svg",
          "images/exercises/workout-guide/banded-lateral-walk/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/banded-lateral-walk/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "reverse_hyper",
      "name": "反向挺身",
      "aliases": [
        "reverse hyper"
      ],
      "category": "glutes",
      "muscles": [
        "臀大肌",
        "腘绳肌"
      ],
      "equipment": [
        "反向挺身机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hipExtension",
      "met": 5,
      "desc": "反向挺身：以反向挺身机完成，主要训练臀大肌、腘绳肌。",
      "steps": [
        "腹部贴垫，双手握稳支撑，腿部自然下垂",
        "双腿向后抬至与躯干接近一线，再缓慢下降",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "双腿向后抬至与躯干接近一线，再缓慢下降。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/reverse-hyperextension/frame-1.svg",
          "images/exercises/workout-guide/reverse-hyperextension/frame-2.svg",
          "images/exercises/workout-guide/reverse-hyperextension/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/reverse-hyperextension/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "back_extension",
      "name": "罗马椅挺身",
      "aliases": [
        "back extension"
      ],
      "category": "hamstrings",
      "muscles": [
        "臀大肌",
        "腘绳肌",
        "竖脊肌"
      ],
      "equipment": [
        "罗马椅"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hinge",
      "met": 5,
      "desc": "罗马椅挺身：以罗马椅完成，主要训练臀大肌、腘绳肌、竖脊肌。",
      "steps": [
        "大腿贴垫、脚跟固定，髋部可自由折叠",
        "屈髋下降后伸髋抬起躯干，不超过身体直线",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈髋下降后伸髋抬起躯干，不超过身体直线。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back",
        "glutes",
        "hamstrings"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/back-extension/frame-1.svg",
          "images/exercises/workout-guide/back-extension/frame-2.svg",
          "images/exercises/workout-guide/back-extension/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/back-extension/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "seated_band_abduction",
      "name": "坐姿弹力带髋外展",
      "aliases": [
        "seated band abduction"
      ],
      "category": "glutes",
      "muscles": [
        "臀中肌"
      ],
      "equipment": [
        "弹力带",
        "凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "abduction",
      "met": 5,
      "desc": "坐姿弹力带髋外展：以弹力带与凳完成，主要训练臀中肌。",
      "steps": [
        "坐稳凳面，弹力带套于双膝上方",
        "双膝向两侧打开，再控制合拢",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "双膝向两侧打开，再控制合拢。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/banded-seated-hip-abduction/frame-1.svg",
          "images/exercises/workout-guide/banded-seated-hip-abduction/frame-2.svg",
          "images/exercises/workout-guide/banded-seated-hip-abduction/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/banded-seated-hip-abduction/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "single_calf_raise",
      "name": "单腿站姿提踵",
      "aliases": [
        "single calf raise"
      ],
      "category": "calves",
      "muscles": [
        "腓肠肌"
      ],
      "equipment": [
        "自重",
        "固定支撑"
      ],
      "difficulty": "intermediate",
      "movementPattern": "plantarFlexion",
      "met": 5,
      "desc": "单腿站姿提踵：以自重与固定支撑完成，主要训练腓肠肌。",
      "steps": [
        "单脚前脚掌踩稳，手扶支撑维持平衡",
        "抬高脚跟，顶点停顿后缓慢下降",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "抬高脚跟，顶点停顿后缓慢下降。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "calves"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/single-leg-calf-raise/frame-1.svg",
          "images/exercises/workout-guide/single-leg-calf-raise/frame-2.svg",
          "images/exercises/workout-guide/single-leg-calf-raise/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/single-leg-calf-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "leg_press_calf_raise",
      "name": "腿举机提踵",
      "aliases": [
        "leg press calf raise"
      ],
      "category": "calves",
      "muscles": [
        "腓肠肌"
      ],
      "equipment": [
        "腿举机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "plantarFlexion",
      "met": 5,
      "desc": "腿举机提踵：以腿举机完成，主要训练腓肠肌。",
      "steps": [
        "调好安全挡，前脚掌踩踏板，膝微屈",
        "仅通过踝关节推开踏板，再控制脚跟回落",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "仅通过踝关节推开踏板，再控制脚跟回落。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "calves"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/leg-press-calf-raise/frame-1.svg",
          "images/exercises/workout-guide/leg-press-calf-raise/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/leg-press-calf-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "donkey_calf_raise",
      "name": "俯身提踵",
      "aliases": [
        "donkey calf raise"
      ],
      "category": "calves",
      "muscles": [
        "腓肠肌"
      ],
      "equipment": [
        "提踵机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "plantarFlexion",
      "met": 5,
      "desc": "俯身提踵：以提踵机完成，主要训练腓肠肌。",
      "steps": [
        "使用专用机器，髋部屈曲、前臂支撑稳固",
        "抬起脚跟，再缓慢降低，保持膝角度稳定",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "抬起脚跟，再缓慢降低，保持膝角度稳定。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "calves"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/donkey-calf-raise/frame-1.svg",
          "images/exercises/workout-guide/donkey-calf-raise/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/donkey-calf-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "tibialis_raise",
      "name": "靠墙胫骨前肌抬脚",
      "aliases": [
        "tibialis raise"
      ],
      "category": "calves",
      "muscles": [
        "胫骨前肌"
      ],
      "equipment": [
        "墙面",
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "dorsiflexion",
      "met": 5,
      "desc": "靠墙胫骨前肌抬脚：以墙面与自重完成，主要训练胫骨前肌。",
      "steps": [
        "背靠墙，脚跟踩地，双脚稍离墙面",
        "脚尖向小腿方向抬起，再缓慢放下",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "脚尖向小腿方向抬起，再缓慢放下。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "calves"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/tibialis_raise.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "incline_dumbbell_curl",
      "name": "上斜凳哑铃弯举",
      "aliases": [
        "incline dumbbell curl"
      ],
      "category": "biceps",
      "muscles": [
        "肱二头肌"
      ],
      "equipment": [
        "哑铃",
        "上斜凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowFlexion",
      "met": 5,
      "desc": "上斜凳哑铃弯举：以哑铃与上斜凳完成，主要训练肱二头肌。",
      "steps": [
        "背靠上斜凳，双臂自然垂于体侧",
        "上臂保持相对固定，屈肘抬铃再缓慢伸肘",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "上臂保持相对固定，屈肘抬铃再缓慢伸肘。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "biceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/incline-dumbbell-curl/frame-1.svg",
          "images/exercises/workout-guide/incline-dumbbell-curl/frame-2.svg",
          "images/exercises/workout-guide/incline-dumbbell-curl/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/incline-dumbbell-curl/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "concentration_curl",
      "name": "哑铃集中弯举",
      "aliases": [
        "concentration curl"
      ],
      "category": "biceps",
      "muscles": [
        "肱二头肌"
      ],
      "equipment": [
        "哑铃",
        "凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowFlexion",
      "met": 5,
      "desc": "哑铃集中弯举：以哑铃与凳完成，主要训练肱二头肌。",
      "steps": [
        "坐姿，上臂内侧靠在大腿内侧",
        "屈肘抬起哑铃，避免肩部前后移动",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈肘抬起哑铃，避免肩部前后移动。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "biceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/concentration-curl/frame-1.svg",
          "images/exercises/workout-guide/concentration-curl/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/concentration-curl/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "spider_curl",
      "name": "蜘蛛弯举",
      "aliases": [
        "spider curl"
      ],
      "category": "biceps",
      "muscles": [
        "肱二头肌"
      ],
      "equipment": [
        "哑铃",
        "上斜凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowFlexion",
      "met": 5,
      "desc": "蜘蛛弯举：以哑铃与上斜凳完成，主要训练肱二头肌。",
      "steps": [
        "俯卧于上斜凳，双臂垂直下垂",
        "肘部位置稳定，屈肘将哑铃抬起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肘部位置稳定，屈肘将哑铃抬起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "biceps"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/spider_curl.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "drag_curl",
      "name": "杠铃拖曳弯举",
      "aliases": [
        "drag curl"
      ],
      "category": "biceps",
      "muscles": [
        "肱二头肌"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowFlexion",
      "met": 5,
      "desc": "杠铃拖曳弯举：以杠铃完成，主要训练肱二头肌。",
      "steps": [
        "站稳反握轻杠，杆贴近身体前方",
        "肘部向后移动，使杠铃沿躯干上提",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肘部向后移动，使杠铃沿躯干上提。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "biceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/drag-curl/frame-1.svg",
          "images/exercises/workout-guide/drag-curl/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/drag-curl/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "zottman_curl",
      "name": "佐特曼弯举",
      "aliases": [
        "zottman curl"
      ],
      "category": "biceps",
      "muscles": [
        "肱二头肌",
        "肱桡肌"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowFlexion",
      "met": 5,
      "desc": "佐特曼弯举：以哑铃完成，主要训练肱二头肌、肱桡肌。",
      "steps": [
        "掌心向前握铃，上臂贴近体侧",
        "屈肘抬起后翻转为掌心向下，缓慢下放",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈肘抬起后翻转为掌心向下，缓慢下放。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "biceps",
        "forearms"
      ],
      "art": {
        "provider": "Everkinetic",
        "label": "Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/everkinetic/svg/0251-relaxation.svg",
          "images/exercises/everkinetic/svg/0251-tension.svg"
        ],
        "tone": "invert",
        "sourceUrl": "https://github.com/everkinetic/data/blob/main/dist/exercises.json",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "cable_hammer_curl",
      "name": "绳索锤式弯举",
      "aliases": [
        "cable hammer curl"
      ],
      "category": "biceps",
      "muscles": [
        "肱肌",
        "肱桡肌"
      ],
      "equipment": [
        "绳索",
        "绳把"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowFlexion",
      "met": 5,
      "desc": "绳索锤式弯举：以绳索与绳把完成，主要训练肱肌、肱桡肌。",
      "steps": [
        "低位绳索接绳把，掌心相对握住",
        "上臂稳定，屈肘抬起绳把，再缓慢还原",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "上臂稳定，屈肘抬起绳把，再缓慢还原。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "biceps",
        "forearms"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/rope-hammer-curl/frame-1.svg",
          "images/exercises/workout-guide/rope-hammer-curl/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/rope-hammer-curl/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "bayesian_curl",
      "name": "身后绳索弯举",
      "aliases": [
        "bayesian curl"
      ],
      "category": "biceps",
      "muscles": [
        "肱二头肌"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowFlexion",
      "met": 5,
      "desc": "身后绳索弯举：以绳索完成，主要训练肱二头肌。",
      "steps": [
        "背对低位滑轮，上臂稍位于躯干后方",
        "固定上臂位置，屈肘将把手拉向前上方",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "固定上臂位置，屈肘将把手拉向前上方。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "biceps"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/bayesian_curl.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "wrist_curl",
      "name": "杠铃腕弯举",
      "aliases": [
        "wrist curl"
      ],
      "category": "forearms",
      "muscles": [
        "前臂屈肌"
      ],
      "equipment": [
        "杠铃",
        "凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "wristFlexion",
      "met": 5,
      "desc": "杠铃腕弯举：以杠铃与凳完成，主要训练前臂屈肌。",
      "steps": [
        "前臂放在凳或大腿上，掌心向上持轻杠",
        "仅屈伸手腕，控制杠铃小幅升降",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "仅屈伸手腕，控制杠铃小幅升降。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "forearms"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/wrist-curl/frame-1.svg",
          "images/exercises/workout-guide/wrist-curl/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/wrist-curl/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "reverse_wrist_curl",
      "name": "反握腕伸展",
      "aliases": [
        "reverse wrist curl"
      ],
      "category": "forearms",
      "muscles": [
        "前臂伸肌"
      ],
      "equipment": [
        "哑铃",
        "凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "wristExtension",
      "met": 5,
      "desc": "反握腕伸展：以哑铃与凳完成，主要训练前臂伸肌。",
      "steps": [
        "前臂获得支撑，掌心朝下持轻铃",
        "抬高手背，再缓慢回到舒适范围",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "抬高手背，再缓慢回到舒适范围。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "forearms"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/wrist-extension/frame-1.svg",
          "images/exercises/workout-guide/wrist-extension/frame-2.svg",
          "images/exercises/workout-guide/wrist-extension/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/wrist-extension/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "farmer_carry",
      "name": "农夫行走",
      "aliases": [
        "farmer carry"
      ],
      "category": "forearms",
      "muscles": [
        "前臂",
        "斜方肌",
        "核心"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "carry",
      "met": 5,
      "desc": "农夫行走：以哑铃完成，主要训练前臂、斜方肌、核心。",
      "steps": [
        "双手持铃站直，肩部自然下沉",
        "以短而稳的步伐行走，躯干不前后摇晃",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "以短而稳的步伐行走，躯干不前后摇晃。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core",
        "forearms",
        "shoulders"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/farmer-carry/frame-1.svg",
          "images/exercises/workout-guide/farmer-carry/frame-2.svg",
          "images/exercises/workout-guide/farmer-carry/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/farmer-carry/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "dumbbell_kickback",
      "name": "哑铃俯身臂屈伸",
      "aliases": [
        "dumbbell kickback"
      ],
      "category": "triceps",
      "muscles": [
        "肱三头肌"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowExtension",
      "met": 5,
      "desc": "哑铃俯身臂屈伸：以哑铃完成，主要训练肱三头肌。",
      "steps": [
        "屈髋俯身，上臂抬至体侧，肘弯曲",
        "上臂保持固定，向后伸直前臂再缓慢屈肘",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "上臂保持固定，向后伸直前臂再缓慢屈肘。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/tricep-kickback/frame-1.svg",
          "images/exercises/workout-guide/tricep-kickback/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/tricep-kickback/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "single_overhead_extension",
      "name": "站姿单臂哑铃颈后臂屈伸",
      "aliases": [
        "single overhead extension"
      ],
      "category": "triceps",
      "muscles": [
        "肱三头肌长头"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowExtension",
      "met": 5,
      "desc": "单臂哑铃颈后臂屈伸：以哑铃完成，主要训练肱三头肌长头。",
      "steps": [
        "单手持轻铃举过头顶，上臂靠近耳侧",
        "屈肘将铃放到头后，再伸肘抬起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈肘将铃放到头后，再伸肘抬起。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/single-arm-dumbbell-tricep-extension/frame-1.svg",
          "images/exercises/workout-guide/single-arm-dumbbell-tricep-extension/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/single-arm-dumbbell-tricep-extension/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "cable_overhead_extension",
      "name": "绳索过顶臂屈伸",
      "aliases": [
        "cable overhead extension"
      ],
      "category": "triceps",
      "muscles": [
        "肱三头肌长头"
      ],
      "equipment": [
        "绳索",
        "绳把"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowExtension",
      "met": 5,
      "desc": "绳索过顶臂屈伸：以绳索与绳把完成，主要训练肱三头肌长头。",
      "steps": [
        "背向滑轮，双手握绳置于头后，分腿站稳",
        "上臂保持稳定，向前上方伸肘",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "上臂保持稳定，向前上方伸肘。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/overhead-tricep-extension/frame-1.svg",
          "images/exercises/workout-guide/overhead-tricep-extension/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/overhead-tricep-extension/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "bench_dip",
      "name": "凳上臂屈伸",
      "aliases": [
        "bench dip"
      ],
      "category": "triceps",
      "muscles": [
        "肱三头肌"
      ],
      "equipment": [
        "稳固平凳",
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowExtension",
      "met": 5,
      "desc": "凳上臂屈伸：以稳固平凳与自重完成，主要训练肱三头肌。",
      "steps": [
        "手撑凳沿，双脚踩地，臀部靠近凳子",
        "小幅屈肘下降，在肩前侧无不适的范围内推起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "小幅屈肘下降，在肩前侧无不适的范围内推起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "triceps"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/bench-dip/frame-1.svg",
          "images/exercises/workout-guide/bench-dip/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/bench-dip/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "triceps_extension_machine",
      "name": "器械肱三头伸展",
      "aliases": [
        "triceps extension machine"
      ],
      "category": "triceps",
      "muscles": [
        "肱三头肌"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowExtension",
      "met": 5,
      "desc": "器械肱三头伸展：以固定器械完成，主要训练肱三头肌。",
      "steps": [
        "调整座椅，上臂放在支撑垫上，肘对转轴",
        "伸肘推动握把，再控制屈肘返回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "伸肘推动握把，再控制屈肘返回。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "triceps"
      ],
      "art": {
        "provider": "Everkinetic",
        "label": "Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/everkinetic/svg/0210-relaxation.svg",
          "images/exercises/everkinetic/svg/0210-tension.svg"
        ],
        "tone": "invert",
        "sourceUrl": "https://github.com/everkinetic/data/blob/main/dist/exercises.json",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "seated_barbell_extension",
      "name": "坐姿曲杆颈后臂屈伸",
      "aliases": [
        "seated barbell extension"
      ],
      "category": "triceps",
      "muscles": [
        "肱三头肌"
      ],
      "equipment": [
        "曲杆杠铃",
        "靠背凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowExtension",
      "met": 5,
      "desc": "坐姿曲杆颈后臂屈伸：以曲杆杠铃与靠背凳完成，主要训练肱三头肌。",
      "steps": [
        "背靠凳面，将轻曲杆举过头顶",
        "上臂稳定，屈肘下降至头后，再伸肘",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "上臂稳定，屈肘下降至头后，再伸肘。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "triceps"
      ],
      "art": {
        "provider": "Everkinetic",
        "label": "Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/everkinetic/svg/0193-relaxation.svg",
          "images/exercises/everkinetic/svg/0193-tension.svg"
        ],
        "tone": "invert",
        "sourceUrl": "https://github.com/everkinetic/data/blob/main/dist/exercises.json",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "reverse_crunch",
      "name": "反向卷腹",
      "aliases": [
        "reverse crunch"
      ],
      "category": "core",
      "muscles": [
        "腹直肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "trunkFlexion",
      "met": 5,
      "desc": "反向卷腹：以自重与地垫完成，主要训练腹直肌。",
      "steps": [
        "仰卧屈膝，双手置于体侧",
        "腹部带动骨盆小幅卷离地面，再控制回落",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "腹部带动骨盆小幅卷离地面，再控制回落。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/reverse-crunch/frame-1.svg",
          "images/exercises/workout-guide/reverse-crunch/frame-2.svg",
          "images/exercises/workout-guide/reverse-crunch/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/reverse-crunch/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "bicycle_crunch",
      "name": "自行车卷腹",
      "aliases": [
        "bicycle crunch"
      ],
      "category": "core",
      "muscles": [
        "腹直肌",
        "腹斜肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "rotation",
      "met": 5,
      "desc": "自行车卷腹：以自重与地垫完成，主要训练腹直肌、腹斜肌。",
      "steps": [
        "仰卧，双手轻扶头侧，双腿抬起",
        "肩部转向对侧膝盖，另一腿伸展，缓慢交替",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肩部转向对侧膝盖，另一腿伸展，缓慢交替。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/bicycle-crunch/frame-1.svg",
          "images/exercises/workout-guide/bicycle-crunch/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/bicycle-crunch/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "heel_touch",
      "name": "仰卧交替摸踵",
      "aliases": [
        "heel touch"
      ],
      "category": "core",
      "muscles": [
        "腹斜肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "lateralFlexion",
      "met": 5,
      "desc": "仰卧交替摸踵：以自重与地垫完成，主要训练腹斜肌。",
      "steps": [
        "仰卧屈膝，双臂置于体侧，肩部稍抬起",
        "躯干小幅左右侧屈，手指依次靠近两侧脚跟",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "躯干小幅左右侧屈，手指依次靠近两侧脚跟。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/heel-tap/frame-1.svg",
          "images/exercises/workout-guide/heel-tap/frame-2.svg",
          "images/exercises/workout-guide/heel-tap/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/heel-tap/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "lying_leg_raise",
      "name": "仰卧举腿",
      "aliases": [
        "lying leg raise"
      ],
      "category": "core",
      "muscles": [
        "腹直肌",
        "髋屈肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "antiExtension",
      "met": 5,
      "desc": "仰卧举腿：以自重与地垫完成，主要训练腹直肌、髋屈肌。",
      "steps": [
        "仰卧，核心收紧，双腿在舒适范围伸展",
        "抬起并缓慢放低双腿，腰部避免离地反弓",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "抬起并缓慢放低双腿，腰部避免离地反弓。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/lying-leg-raise/frame-1.svg",
          "images/exercises/workout-guide/lying-leg-raise/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/lying-leg-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "hanging_knee_raise",
      "name": "悬垂提膝",
      "aliases": [
        "hanging knee raise"
      ],
      "category": "core",
      "muscles": [
        "腹直肌",
        "髋屈肌"
      ],
      "equipment": [
        "引体架"
      ],
      "difficulty": "intermediate",
      "movementPattern": "trunkFlexion",
      "met": 5,
      "desc": "悬垂提膝：以引体架完成，主要训练腹直肌、髋屈肌。",
      "steps": [
        "悬垂握稳，肩部主动下沉",
        "屈膝向腹部提起，轻卷骨盆后缓慢放下",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈膝向腹部提起，轻卷骨盆后缓慢放下。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/hanging-knee-raise/frame-1.svg",
          "images/exercises/workout-guide/hanging-knee-raise/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/hanging-knee-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "cable_crunch",
      "name": "跪姿绳索卷腹",
      "aliases": [
        "cable crunch"
      ],
      "category": "core",
      "muscles": [
        "腹直肌"
      ],
      "equipment": [
        "绳索",
        "绳把"
      ],
      "difficulty": "intermediate",
      "movementPattern": "trunkFlexion",
      "met": 5,
      "desc": "跪姿绳索卷腹：以绳索与绳把完成，主要训练腹直肌。",
      "steps": [
        "面对高位滑轮跪稳，绳把位于头部两侧",
        "腹部发力使胸廓靠近骨盆，不用手臂下拉",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "腹部发力使胸廓靠近骨盆，不用手臂下拉。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/cable-crunch/frame-1.svg",
          "images/exercises/workout-guide/cable-crunch/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/cable-crunch/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "cable_woodchop",
      "name": "绳索伐木",
      "aliases": [
        "cable woodchop"
      ],
      "category": "core",
      "muscles": [
        "腹斜肌"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "rotation",
      "met": 5,
      "desc": "绳索伐木：以绳索完成，主要训练腹斜肌。",
      "steps": [
        "双手握把，侧对滑轮站稳，膝微屈",
        "胸廓与髋部协调转动，把手沿斜线移动",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "胸廓与髋部协调转动，把手沿斜线移动。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/cable-woodchop/frame-1.svg",
          "images/exercises/workout-guide/cable-woodchop/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/cable-woodchop/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      }
    },
    {
      "id": "hollow_hold",
      "name": "中空支撑",
      "aliases": [
        "hollow hold"
      ],
      "category": "core",
      "muscles": [
        "腹直肌",
        "腹横肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "antiExtension",
      "met": 5,
      "desc": "中空支撑：以自重与地垫完成，主要训练腹直肌、腹横肌。",
      "steps": [
        "仰卧，腰部轻贴垫面，先从屈膝姿势开始",
        "肩与腿抬离地面，保持可控制的伸展程度",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肩与腿抬离地面，保持可控制的伸展程度。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/hollow-body-hold/frame-1.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/hollow-body-hold/",
        "license": "CC BY-SA 4.0",
        "note": "保留与本动作对应的单张姿势图"
      }
    },
    {
      "id": "mountain_climber",
      "name": "登山跑",
      "aliases": [
        "mountain climber"
      ],
      "category": "core",
      "muscles": [
        "核心",
        "髋屈肌"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "antiExtension",
      "met": 5,
      "desc": "登山跑：以自重完成，主要训练核心、髋屈肌。",
      "steps": [
        "双手撑地呈高平板，肩在手腕上方",
        "交替将膝盖带向胸前，保持骨盆稳定",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "交替将膝盖带向胸前，保持骨盆稳定。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/mountain-climber/frame-1.svg",
          "images/exercises/workout-guide/mountain-climber/frame-2.svg",
          "images/exercises/workout-guide/mountain-climber/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/mountain-climber/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "plank_shoulder_tap",
      "name": "高平板交替触肩",
      "aliases": [
        "plank shoulder tap"
      ],
      "category": "core",
      "muscles": [
        "核心",
        "肩胛稳定肌"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "antiRotation",
      "met": 5,
      "desc": "高平板交替触肩：以自重完成，主要训练核心、肩胛稳定肌。",
      "steps": [
        "双脚略分开，高平板姿势稳定",
        "一手轻触对侧肩，再换边，骨盆不左右摇晃",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "一手轻触对侧肩，再换边，骨盆不左右摇晃。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/plank-shoulder-tap/frame-1.svg",
          "images/exercises/workout-guide/plank-shoulder-tap/frame-2.svg",
          "images/exercises/workout-guide/plank-shoulder-tap/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/plank-shoulder-tap/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "bear_crawl",
      "name": "熊爬",
      "aliases": [
        "bear crawl"
      ],
      "category": "core",
      "muscles": [
        "核心",
        "肩胛稳定肌"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "locomotion",
      "met": 5,
      "desc": "熊爬：以自重完成，主要训练核心、肩胛稳定肌。",
      "steps": [
        "四点跪姿，膝盖抬离地面少许",
        "对侧手脚同时小步前进，背部保持水平",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "对侧手脚同时小步前进，背部保持水平。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/bear-crawl/frame-1.svg",
          "images/exercises/workout-guide/bear-crawl/frame-2.svg",
          "images/exercises/workout-guide/bear-crawl/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/bear-crawl/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "suitcase_carry",
      "name": "单侧手提行走",
      "aliases": [
        "suitcase carry"
      ],
      "category": "core",
      "muscles": [
        "腹斜肌",
        "前臂"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "carry",
      "met": 5,
      "desc": "单侧手提行走：以哑铃完成，主要训练腹斜肌、前臂。",
      "steps": [
        "单手持铃站立，肩膀保持同高",
        "缓慢行走并抵抗躯干向负重侧倾斜",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "缓慢行走并抵抗躯干向负重侧倾斜。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "core",
        "forearms"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/suitcase_carry.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "dumbbell_side_bend",
      "name": "哑铃侧屈",
      "aliases": [
        "dumbbell side bend"
      ],
      "category": "core",
      "muscles": [
        "腹斜肌"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "lateralFlexion",
      "met": 5,
      "desc": "哑铃侧屈：以哑铃完成，主要训练腹斜肌。",
      "steps": [
        "单手持轻铃，骨盆固定、躯干直立",
        "在小范围内向负重侧侧屈，再回到中立",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "在小范围内向负重侧侧屈，再回到中立。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dumbbell-side-bend/frame-1.svg",
          "images/exercises/workout-guide/dumbbell-side-bend/frame-2.svg",
          "images/exercises/workout-guide/dumbbell-side-bend/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dumbbell-side-bend/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "copenhagen_plank",
      "name": "哥本哈根侧平板",
      "aliases": [
        "copenhagen plank"
      ],
      "category": "core",
      "muscles": [
        "内收肌",
        "核心"
      ],
      "equipment": [
        "稳固平凳",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "antiLateralFlexion",
      "met": 5,
      "desc": "哥本哈根侧平板：以稳固平凳与地垫完成，主要训练内收肌、核心。",
      "steps": [
        "上侧膝或脚置稳固凳面，前臂撑地",
        "抬起髋部维持直线，初学用膝部支撑版本",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "抬起髋部维持直线，初学用膝部支撑版本。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/copenhagen-plank/frame-1.svg",
          "images/exercises/workout-guide/copenhagen-plank/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/copenhagen-plank/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "kettlebell_swing",
      "name": "壶铃摆荡",
      "aliases": [
        "kettlebell swing"
      ],
      "category": "compound",
      "muscles": [
        "臀大肌",
        "腘绳肌",
        "核心"
      ],
      "equipment": [
        "壶铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hinge",
      "met": 6,
      "desc": "壶铃摆荡：以壶铃完成，主要训练臀大肌、腘绳肌、核心。",
      "steps": [
        "壶铃放在身前，屈髋握把并收紧背部",
        "髋部快速伸展带动壶铃前摆，回程再次屈髋",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "髋部快速伸展带动壶铃前摆，回程再次屈髋。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "compound",
        "core",
        "glutes",
        "hamstrings"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/kettlebell-swing/frame-1.svg",
          "images/exercises/workout-guide/kettlebell-swing/frame-2.svg",
          "images/exercises/workout-guide/kettlebell-swing/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/kettlebell-swing/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "turkish_getup",
      "name": "土耳其起立",
      "aliases": [
        "turkish getup"
      ],
      "category": "compound",
      "muscles": [
        "核心",
        "肩胛稳定肌",
        "臀大肌"
      ],
      "equipment": [
        "壶铃",
        "地垫"
      ],
      "difficulty": "advanced",
      "movementPattern": "getUp",
      "met": 6,
      "desc": "土耳其起立：以壶铃与地垫完成，主要训练核心、肩胛稳定肌、臀大肌。",
      "steps": [
        "仰卧单手举轻铃，同侧膝弯曲",
        "按肘支撑、手支撑、半跪、站立顺序缓慢起身",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "按肘支撑、手支撑、半跪、站立顺序缓慢起身。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "compound",
        "core",
        "glutes"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/turkish_getup.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "dumbbell_thruster",
      "name": "哑铃深蹲推举",
      "aliases": [
        "dumbbell thruster"
      ],
      "category": "compound",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "三角肌"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "squatPress",
      "met": 6,
      "desc": "哑铃深蹲推举：以哑铃完成，主要训练股四头肌、臀大肌、三角肌。",
      "steps": [
        "双铃置肩前，双脚站稳",
        "下蹲后连续伸腿站起并推铃过头，再控制回落",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "下蹲后连续伸腿站起并推铃过头，再控制回落。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "compound",
        "glutes",
        "quads",
        "shoulders"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/dumbbell_thruster.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "burpee",
      "name": "波比跳",
      "aliases": [
        "burpee"
      ],
      "category": "compound",
      "muscles": [
        "胸大肌",
        "股四头肌",
        "核心"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "locomotion",
      "met": 6,
      "desc": "波比跳：以自重完成，主要训练胸大肌、股四头肌、核心。",
      "steps": [
        "站立后屈膝屈髋，双手撑地",
        "后撤至平板、收腿站起，按能力选择是否跳跃",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "后撤至平板、收腿站起，按能力选择是否跳跃。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "compound",
        "core",
        "quads"
      ],
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/burpee/frame-1.svg",
          "images/exercises/workout-guide/burpee/frame-2.svg",
          "images/exercises/workout-guide/burpee/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/burpee/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      }
    },
    {
      "id": "kettlebell_clean",
      "name": "壶铃翻举",
      "aliases": [
        "kettlebell clean"
      ],
      "category": "compound",
      "muscles": [
        "臀大肌",
        "腘绳肌",
        "三角肌"
      ],
      "equipment": [
        "壶铃"
      ],
      "difficulty": "advanced",
      "movementPattern": "hinge",
      "met": 6,
      "desc": "壶铃翻举：以壶铃完成，主要训练臀大肌、腘绳肌、三角肌。",
      "steps": [
        "单手握壶铃，屈髋后摆，手腕保持中立",
        "伸髋带动壶铃贴近身体，平稳接到前架位置",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "伸髋带动壶铃贴近身体，平稳接到前架位置。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "compound",
        "glutes",
        "hamstrings",
        "shoulders"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/kettlebell_clean.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "sled_push",
      "name": "雪橇推行",
      "aliases": [
        "sled push"
      ],
      "category": "compound",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "小腿"
      ],
      "equipment": [
        "雪橇机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "locomotion",
      "met": 6,
      "desc": "雪橇推行：以雪橇机完成，主要训练股四头肌、臀大肌、小腿。",
      "steps": [
        "双手握把，躯干与腿保持稳定推行角度",
        "交替蹬地小步前进，避免腰部下塌",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "交替蹬地小步前进，避免腰部下塌。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "calves",
        "compound",
        "glutes",
        "quads"
      ],
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/sled_push.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      }
    },
    {
      "id": "wg_cable_fly",
      "name": "站姿绳索飞鸟",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "三角肌"
      ],
      "met": 3.5,
      "desc": "肘部保持微屈，双臂沿弧线向胸前下方合拢。",
      "steps": [
        "将双侧滑轮调至较高位置，双手握柄并前后分腿站稳。",
        "肘部保持微屈，双臂沿弧线向胸前下方合拢。",
        "缓慢展开至肩部舒适范围，躯干不随配重摆动。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢展开至肩部舒适范围，躯干不随配重摆动。",
      "aliases": [
        "Cable Fly",
        "cable fly",
        "站姿绳索飞鸟"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/cable-fly/frame-1.svg",
          "images/exercises/workout-guide/cable-fly/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/cable-fly/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "cable-fly",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_weighted_push_up",
      "name": "负重俯卧撑",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "肱三头肌",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "保持头、躯干、腿成直线，屈肘让胸部接近地面。",
      "steps": [
        "先能稳定完成标准俯卧撑，再固定好负重背心或由同伴协助放稳轻负重。",
        "保持头、躯干、腿成直线，屈肘让胸部接近地面。",
        "双手推地回到高平板位，负重滑动时立即结束。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "双手推地回到高平板位，负重滑动时立即结束。",
      "aliases": [
        "Weighted Push-up",
        "weighted push up",
        "负重俯卧撑"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "core",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/weighted-push-up/frame-1.svg",
          "images/exercises/workout-guide/weighted-push-up/frame-2.svg",
          "images/exercises/workout-guide/weighted-push-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/weighted-push-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "weighted-push-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_upright_row",
      "name": "杠铃直立划船",
      "category": "shoulders",
      "muscles": [
        "三角肌",
        "上背部",
        "肱二头肌"
      ],
      "met": 3.5,
      "desc": "肘部带动杠铃贴近身体上提，抬至肩部舒适高度。",
      "steps": [
        "双脚站稳，双手正握杠铃置于大腿前。",
        "肘部带动杠铃贴近身体上提，抬至肩部舒适高度。",
        "慢慢放回大腿前，避免耸肩或用躯干甩起重量。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "慢慢放回大腿前，避免耸肩或用躯干甩起重量。",
      "aliases": [
        "Upright Row",
        "upright row",
        "杠铃直立划船"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/upright-row/frame-1.svg",
          "images/exercises/workout-guide/upright-row/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/upright-row/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "upright-row",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_dumbbell_bent_over_row",
      "name": "双臂哑铃俯身划船",
      "category": "back",
      "muscles": [
        "背部肌群",
        "肱二头肌",
        "三角肌后束"
      ],
      "met": 3.5,
      "desc": "双肘向后拉，将哑铃提向腰侧，胸口不抬起借力。",
      "steps": [
        "双手持铃，屈髋俯身并略屈膝，背部保持自然中立。",
        "双肘向后拉，将哑铃提向腰侧，胸口不抬起借力。",
        "缓慢伸肘放低哑铃，保持髋部位置不变。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢伸肘放低哑铃，保持髋部位置不变。",
      "aliases": [
        "Dumbbell Bent Over Row",
        "dumbbell bent over row",
        "双臂哑铃俯身划船"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dumbbell-bent-over-row/frame-1.svg",
          "images/exercises/workout-guide/dumbbell-bent-over-row/frame-2.svg",
          "images/exercises/workout-guide/dumbbell-bent-over-row/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dumbbell-bent-over-row/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "dumbbell-bent-over-row",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_chest_supported_row",
      "name": "胸托器械划船",
      "category": "back",
      "muscles": [
        "背部肌群",
        "肱二头肌",
        "三角肌后束"
      ],
      "met": 3.5,
      "desc": "双肘向后拉动把手，保持胸部不离开支撑垫。",
      "steps": [
        "调好胸垫与脚踏，胸部贴垫，双手握住划船机把手。",
        "双肘向后拉动把手，保持胸部不离开支撑垫。",
        "控制伸臂回到起点，不让配重撞击。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制伸臂回到起点，不让配重撞击。",
      "aliases": [
        "Chest Supported Row",
        "chest supported row",
        "胸托器械划船"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/chest-supported-row/frame-1.svg",
          "images/exercises/workout-guide/chest-supported-row/frame-2.svg",
          "images/exercises/workout-guide/chest-supported-row/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/chest-supported-row/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "chest-supported-row",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_weighted_pull_up",
      "name": "负重正握引体向上",
      "category": "back",
      "muscles": [
        "背阔肌",
        "肱二头肌"
      ],
      "met": 3.5,
      "desc": "肩胛下沉后屈肘上拉，下巴接近或高于横杠。",
      "steps": [
        "检查单杠与负重腰带，双手正握，先稳定悬垂。",
        "肩胛下沉后屈肘上拉，下巴接近或高于横杠。",
        "控制下降至手臂接近伸直，避免负重摆荡。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制下降至手臂接近伸直，避免负重摆荡。",
      "aliases": [
        "Weighted Pull-up",
        "weighted pull up",
        "负重正握引体向上"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "advanced",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/weighted-pull-up/frame-1.svg",
          "images/exercises/workout-guide/weighted-pull-up/frame-2.svg",
          "images/exercises/workout-guide/weighted-pull-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/weighted-pull-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "weighted-pull-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_step_up",
      "name": "哑铃台阶上步",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀部肌群"
      ],
      "met": 3.5,
      "desc": "前脚向下踩实，带动身体站上台阶，后脚少蹬地。",
      "steps": [
        "双手持铃，单脚全脚掌放在稳固台阶上。",
        "前脚向下踩实，带动身体站上台阶，后脚少蹬地。",
        "用原支撑腿控制下降，再换侧完成。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "用原支撑腿控制下降，再换侧完成。",
      "aliases": [
        "Step-Up",
        "step up",
        "哑铃台阶上步"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "单侧",
      "tags": [
        "glutes",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/step-up/frame-1.svg",
          "images/exercises/workout-guide/step-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/step-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "step-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_standing_calf_raise",
      "name": "器械站姿提踵",
      "category": "calves",
      "muscles": [
        "小腿肌群"
      ],
      "met": 3.5,
      "desc": "脚踝发力抬高脚跟，身体沿竖直方向上升。",
      "steps": [
        "调好肩垫，前脚掌踩稳踏板，膝盖保持微屈。",
        "脚踝发力抬高脚跟，身体沿竖直方向上升。",
        "缓慢下降脚跟，避免屈膝弹跳代偿。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢下降脚跟，避免屈膝弹跳代偿。",
      "aliases": [
        "Standing Calf Raise",
        "standing calf raise",
        "器械站姿提踵"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "calves"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/standing-calf-raise/frame-1.svg",
          "images/exercises/workout-guide/standing-calf-raise/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/standing-calf-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "standing-calf-raise",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_bicep_curl",
      "name": "双臂哑铃弯举",
      "category": "biceps",
      "muscles": [
        "肱二头肌",
        "前臂肌群"
      ],
      "met": 3.5,
      "desc": "保持上臂位置，屈肘将两只哑铃提向肩前。",
      "steps": [
        "双手持铃垂于体侧，掌心向前，上臂贴近躯干。",
        "保持上臂位置，屈肘将两只哑铃提向肩前。",
        "控制伸肘回落，避免腰部后仰。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制伸肘回落，避免腰部后仰。",
      "aliases": [
        "Bicep Curl",
        "bicep curl",
        "双臂哑铃弯举"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "biceps",
        "forearms"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/bicep-curl/frame-1.svg",
          "images/exercises/workout-guide/bicep-curl/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/bicep-curl/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "bicep-curl",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_preacher_curl",
      "name": "器械牧师弯举",
      "category": "biceps",
      "muscles": [
        "肱二头肌",
        "前臂肌群"
      ],
      "met": 3.5,
      "desc": "上臂不离垫，屈肘拉动把手向肩前移动。",
      "steps": [
        "调座椅使上臂贴实斜垫，握好器械把手。",
        "上臂不离垫，屈肘拉动把手向肩前移动。",
        "缓慢伸肘返回，手肘不猛然锁死。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢伸肘返回，手肘不猛然锁死。",
      "aliases": [
        "Preacher Curl",
        "preacher curl",
        "器械牧师弯举"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "biceps",
        "forearms"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/preacher-curl/frame-1.svg",
          "images/exercises/workout-guide/preacher-curl/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/preacher-curl/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "preacher-curl",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_dip",
      "name": "双杠臂屈伸（三头侧重）",
      "category": "triceps",
      "muscles": [
        "肱三头肌",
        "胸大肌",
        "三角肌"
      ],
      "met": 3.0,
      "desc": "屈肘下降到肩部舒适范围，双肘靠近身体。",
      "steps": [
        "握稳双杠并撑起身体，躯干尽量直立。",
        "屈肘下降到肩部舒适范围，双肘靠近身体。",
        "推撑回到手臂接近伸直，避免耸肩与摆腿。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "推撑回到手臂接近伸直，避免耸肩与摆腿。",
      "aliases": [
        "Dip",
        "dip",
        "双杠臂屈伸（三头侧重）"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dip/frame-1.svg",
          "images/exercises/workout-guide/dip/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dip/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "dip",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_assisted_dip",
      "name": "坐姿器械臂屈伸",
      "category": "triceps",
      "muscles": [
        "肱三头肌",
        "胸大肌"
      ],
      "met": 3.5,
      "desc": "保持上臂靠近躯干，伸肘向下推把手。",
      "steps": [
        "坐稳并调整座椅，双手握住两侧下压把手。",
        "保持上臂靠近躯干，伸肘向下推把手。",
        "慢慢屈肘返回，肩膀不向前顶；此图为坐姿器械版本。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "慢慢屈肘返回，肩膀不向前顶；此图为坐姿器械版本。",
      "aliases": [
        "Assisted Dip",
        "assisted dip",
        "坐姿器械臂屈伸"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "assisted_bodyweight",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/assisted-dip/frame-1.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/assisted-dip/",
        "license": "CC BY-SA 4.0",
        "note": "保留与本动作对应的单张姿势图"
      },
      "catalogSlug": "assisted-dip",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_running",
      "name": "跑步机跑步",
      "category": "cardio",
      "muscles": [
        "下肢肌群"
      ],
      "met": null,
      "desc": "逐渐加速，脚步落在身体重心附近，双臂自然摆动。",
      "steps": [
        "系好鞋带并熟悉急停装置，先低速步行适应跑带。",
        "逐渐加速，脚步落在身体重心附近，双臂自然摆动。",
        "结束前逐步减速，再停机离开跑带。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "结束前逐步减速，再停机离开跑带。",
      "aliases": [
        "Running",
        "running",
        "跑步机跑步"
      ],
      "equipment": [
        "跑步机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "cardio",
        "legs"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "distance_duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/running/frame-1.svg",
          "images/exercises/workout-guide/running/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/running/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "running"
    },
    {
      "id": "wg_walking",
      "name": "跑步机步行",
      "category": "cardio",
      "muscles": [
        "下肢肌群"
      ],
      "met": null,
      "desc": "以自然步幅行走，双臂轻摆，不长时间吊在扶手上。",
      "steps": [
        "从低速开始，站在跑带中部并目视前方。",
        "以自然步幅行走，双臂轻摆，不长时间吊在扶手上。",
        "缓慢降速，停稳后再离开机器。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "缓慢降速，停稳后再离开机器。",
      "aliases": [
        "Walking",
        "walking",
        "跑步机步行"
      ],
      "equipment": [
        "跑步机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "cardio",
        "legs"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "distance_duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/walking/frame-1.svg",
          "images/exercises/workout-guide/walking/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/walking/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "walking"
    },
    {
      "id": "wg_cycling",
      "name": "室内单车骑行",
      "category": "cardio",
      "muscles": [
        "下肢肌群"
      ],
      "met": null,
      "desc": "保持骨盆稳定，均匀踩踏并按体感调阻力。",
      "steps": [
        "调座高，使踏板最低点时膝关节仍略弯，固定脚部。",
        "保持骨盆稳定，均匀踩踏并按体感调阻力。",
        "降低阻力进行放松，待踏板停稳后下车。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "降低阻力进行放松，待踏板停稳后下车。",
      "aliases": [
        "Cycling",
        "cycling",
        "室内单车骑行"
      ],
      "equipment": [
        "室内单车"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "cardio",
        "legs"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "distance_duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/cycling/frame-1.svg",
          "images/exercises/workout-guide/cycling/frame-2.svg",
          "images/exercises/workout-guide/cycling/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/cycling/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "cycling"
    },
    {
      "id": "wg_rowing",
      "name": "划船机划船",
      "category": "cardio",
      "muscles": [
        "背部肌群",
        "下肢肌群"
      ],
      "met": null,
      "desc": "先伸腿蹬出，再打开髋部，最后屈肘将手柄拉向下胸。",
      "steps": [
        "调好脚带，握柄，屈膝进入前端准备位。",
        "先伸腿蹬出，再打开髋部，最后屈肘将手柄拉向下胸。",
        "先伸臂再屈髋，最后屈膝滑回；不要先用腰猛拉。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "先伸臂再屈髋，最后屈膝滑回；不要先用腰猛拉。",
      "aliases": [
        "Rowing",
        "rowing",
        "划船机划船"
      ],
      "equipment": [
        "划船机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "back",
        "cardio",
        "legs"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "distance_duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/rowing/frame-1.svg",
          "images/exercises/workout-guide/rowing/frame-2.svg",
          "images/exercises/workout-guide/rowing/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/rowing/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "rowing"
    },
    {
      "id": "wg_stair_climber",
      "name": "登阶机踏步",
      "category": "cardio",
      "muscles": [
        "下肢肌群"
      ],
      "met": null,
      "desc": "脚掌稳定踩在踏阶上，髋膝配合向上迈步。",
      "steps": [
        "检查踏阶速度，扶稳把手后进入低速踏步。",
        "脚掌稳定踩在踏阶上，髋膝配合向上迈步。",
        "逐渐降速并按说明停机，不把体重长期压在扶手上。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "逐渐降速并按说明停机，不把体重长期压在扶手上。",
      "aliases": [
        "Stair Climber",
        "stair climber",
        "登阶机踏步"
      ],
      "equipment": [
        "登阶机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "cardio",
        "legs"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/stair-climber/frame-1.svg",
          "images/exercises/workout-guide/stair-climber/frame-2.svg",
          "images/exercises/workout-guide/stair-climber/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/stair-climber/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "stair-climber"
    },
    {
      "id": "wg_weighted_dip",
      "name": "负重双杠臂屈伸",
      "category": "triceps",
      "muscles": [
        "肱三头肌",
        "胸大肌",
        "三角肌"
      ],
      "met": 3.5,
      "desc": "双手撑稳双杠，屈肘控制下降至肩部舒适范围。",
      "steps": [
        "在稳定完成自重版本后，检查腰带并固定负重。",
        "双手撑稳双杠，屈肘控制下降至肩部舒适范围。",
        "伸肘撑起身体，负重不来回摆动。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "伸肘撑起身体，负重不来回摆动。",
      "aliases": [
        "Weighted Dip",
        "weighted dip",
        "负重双杠臂屈伸"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "advanced",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/weighted-dip/frame-1.svg",
          "images/exercises/workout-guide/weighted-dip/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/weighted-dip/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "weighted-dip",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_standing_dumbbell_press",
      "name": "站姿双臂哑铃推举",
      "category": "shoulders",
      "muscles": [
        "三角肌",
        "肱三头肌",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "沿自然轨迹向上推起双铃，避免腰部后仰。",
      "steps": [
        "双脚站稳，将哑铃举至肩旁，腹部收紧。",
        "沿自然轨迹向上推起双铃，避免腰部后仰。",
        "控制落回肩旁，前臂保持稳定。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制落回肩旁，前臂保持稳定。",
      "aliases": [
        "Standing Dumbbell Press",
        "standing dumbbell press",
        "站姿双臂哑铃推举"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/standing-dumbbell-press/frame-1.svg",
          "images/exercises/workout-guide/standing-dumbbell-press/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/standing-dumbbell-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "standing-dumbbell-press",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_machine_lateral_raise",
      "name": "器械侧平举",
      "category": "shoulders",
      "muscles": [
        "三角肌",
        "上背部"
      ],
      "met": 3.5,
      "desc": "双臂向两侧抬起至舒适高度，躯干不晃动。",
      "steps": [
        "调座椅，让上臂接触器械侧垫，肩膀自然下沉。",
        "双臂向两侧抬起至舒适高度，躯干不晃动。",
        "慢慢回落，避免配重砸回或耸肩代偿。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "慢慢回落，避免配重砸回或耸肩代偿。",
      "aliases": [
        "Machine Lateral Raise",
        "machine lateral raise",
        "器械侧平举"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/machine-lateral-raise/frame-1.svg",
          "images/exercises/workout-guide/machine-lateral-raise/frame-2.svg",
          "images/exercises/workout-guide/machine-lateral-raise/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/machine-lateral-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "machine-lateral-raise",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_cable_rear_delt_fly",
      "name": "绳索后束飞鸟",
      "category": "shoulders",
      "muscles": [
        "三角肌后束",
        "上背部"
      ],
      "met": 3.5,
      "desc": "双臂向两侧后方展开，保持肘部弯曲角度。",
      "steps": [
        "双手交叉握住对侧绳索，略屈髋，手肘微屈。",
        "双臂向两侧后方展开，保持肘部弯曲角度。",
        "控制合拢双臂，避免把动作做成屈肘划船。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制合拢双臂，避免把动作做成屈肘划船。",
      "aliases": [
        "Cable Rear Delt Fly",
        "cable rear delt fly",
        "绳索后束飞鸟"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/cable-rear-delt-fly/frame-1.svg",
          "images/exercises/workout-guide/cable-rear-delt-fly/frame-2.svg",
          "images/exercises/workout-guide/cable-rear-delt-fly/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/cable-rear-delt-fly/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "cable-rear-delt-fly",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_pendlay_row",
      "name": "潘德雷划船",
      "category": "back",
      "muscles": [
        "背部肌群",
        "肱二头肌",
        "三角肌后束"
      ],
      "met": 3.5,
      "desc": "保持躯干接近水平，将杠铃拉向下胸或上腹。",
      "steps": [
        "双脚站稳，屈髋俯身，正握地面杠铃，背部保持中立。",
        "保持躯干接近水平，将杠铃拉向下胸或上腹。",
        "控制放回地面，每次重新稳定躯干后再拉起。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制放回地面，每次重新稳定躯干后再拉起。",
      "aliases": [
        "Pendlay Row",
        "pendlay row",
        "潘德雷划船"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/pendlay-row/frame-1.svg",
          "images/exercises/workout-guide/pendlay-row/frame-2.svg",
          "images/exercises/workout-guide/pendlay-row/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/pendlay-row/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "pendlay-row",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_wide_grip_lat_pulldown",
      "name": "宽握高位下拉",
      "category": "back",
      "muscles": [
        "背阔肌",
        "肱二头肌"
      ],
      "met": 3.5,
      "desc": "肩胛下沉，双肘向下拉，使杆接近上胸。",
      "steps": [
        "坐稳并调好腿垫，双手正握长杆，握距略宽于肩。",
        "肩胛下沉，双肘向下拉，使杆接近上胸。",
        "控制伸臂返回，不把杆拉到颈后。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制伸臂返回，不把杆拉到颈后。",
      "aliases": [
        "Wide-Grip Lat Pulldown",
        "wide grip lat pulldown",
        "宽握高位下拉"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/wide-grip-lat-pulldown/frame-1.svg",
          "images/exercises/workout-guide/wide-grip-lat-pulldown/frame-2.svg",
          "images/exercises/workout-guide/wide-grip-lat-pulldown/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/wide-grip-lat-pulldown/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "wide-grip-lat-pulldown",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_assisted_chin_up",
      "name": "辅助反手引体向上",
      "category": "biceps",
      "muscles": [
        "肱二头肌",
        "背阔肌"
      ],
      "met": 3.5,
      "desc": "保持躯干稳定，屈肘将身体向上拉起。",
      "steps": [
        "选择合适辅助重量，反手握杠，膝或脚稳放辅助垫。",
        "保持躯干稳定，屈肘将身体向上拉起。",
        "控制下降，按照器械说明安全退出辅助垫。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制下降，按照器械说明安全退出辅助垫。",
      "aliases": [
        "Assisted Chin-up",
        "assisted chin up",
        "辅助反手引体向上"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "assisted_bodyweight",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/assisted-chin-up/frame-1.svg",
          "images/exercises/workout-guide/assisted-chin-up/frame-2.svg",
          "images/exercises/workout-guide/assisted-chin-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/assisted-chin-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "assisted-chin-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_weighted_chin_up",
      "name": "负重反手引体向上",
      "category": "biceps",
      "muscles": [
        "肱二头肌",
        "背阔肌"
      ],
      "met": 3.5,
      "desc": "肩胛下沉后屈肘上拉，不用腿部摆荡借力。",
      "steps": [
        "反手握稳单杠，检查负重腰带并稳定悬垂。",
        "肩胛下沉后屈肘上拉，不用腿部摆荡借力。",
        "缓慢下降，负重稳定后开始下一次。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢下降，负重稳定后开始下一次。",
      "aliases": [
        "Weighted Chin-up",
        "weighted chin up",
        "负重反手引体向上"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "advanced",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/weighted-chin-up/frame-1.svg",
          "images/exercises/workout-guide/weighted-chin-up/frame-2.svg",
          "images/exercises/workout-guide/weighted-chin-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/weighted-chin-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "weighted-chin-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_nordic_hamstring_curl",
      "name": "北欧腿弯举",
      "category": "hamstrings",
      "muscles": [
        "腘绳肌",
        "臀部肌群",
        "小腿肌群"
      ],
      "met": 3.0,
      "desc": "保持肩、髋、膝成一直线，缓慢向前倾，用腘绳肌控制下降。",
      "steps": [
        "双膝跪在软垫上，脚踝固定在可靠支撑下，髋部伸直。",
        "保持肩、髋、膝成一直线，缓慢向前倾，用腘绳肌控制下降。",
        "失去控制前双手接地辅助，逐步回到跪姿；先练辅助版本。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "失去控制前双手接地辅助，逐步回到跪姿；先练辅助版本。",
      "aliases": [
        "Nordic Hamstring Curl",
        "nordic hamstring curl",
        "北欧腿弯举"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "advanced",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "calves",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/nordic-hamstring-curl/frame-1.svg",
          "images/exercises/workout-guide/nordic-hamstring-curl/frame-2.svg",
          "images/exercises/workout-guide/nordic-hamstring-curl/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/nordic-hamstring-curl/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "nordic-hamstring-curl",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_single_leg_romanian_deadlift",
      "name": "哑铃单腿罗马尼亚硬拉",
      "category": "hamstrings",
      "muscles": [
        "腘绳肌",
        "臀部肌群",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "向后送髋并让另一腿后伸，躯干和后腿协同前倾。",
      "steps": [
        "双手持轻哑铃，单脚支撑，支撑膝微屈。",
        "向后送髋并让另一腿后伸，躯干和后腿协同前倾。",
        "支撑脚踩稳地面，用髋伸展站起，骨盆不向侧面翻开。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "支撑脚踩稳地面，用髋伸展站起，骨盆不向侧面翻开。",
      "aliases": [
        "Single-Leg Romanian Deadlift",
        "single leg romanian deadlift",
        "哑铃单腿罗马尼亚硬拉"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "单侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/single-leg-romanian-deadlift/frame-1.svg",
          "images/exercises/workout-guide/single-leg-romanian-deadlift/frame-2.svg",
          "images/exercises/workout-guide/single-leg-romanian-deadlift/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/single-leg-romanian-deadlift/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "single-leg-romanian-deadlift",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_reverse_lunge",
      "name": "哑铃后撤弓步",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀部肌群",
        "腘绳肌"
      ],
      "met": 3.5,
      "desc": "一脚向后迈步，双膝屈曲下降，重心保持在前脚。",
      "steps": [
        "双手持铃，双脚与髋同宽站稳。",
        "一脚向后迈步，双膝屈曲下降，重心保持在前脚。",
        "前脚踩地站起并收回后脚，再换侧。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "前脚踩地站起并收回后脚，再换侧。",
      "aliases": [
        "Reverse Lunge",
        "reverse lunge",
        "哑铃后撤弓步"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "单侧",
      "tags": [
        "glutes",
        "hamstrings",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/reverse-lunge/frame-1.svg",
          "images/exercises/workout-guide/reverse-lunge/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/reverse-lunge/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "reverse-lunge",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_barbell_glute_bridge",
      "name": "杠铃地面臀桥",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "双手稳住杠铃，用臀部发力抬髋至肩、髋、膝接近直线。",
      "steps": [
        "仰卧地垫，双肩落地，屈膝踩稳，将带护垫的杠铃置于髋前。",
        "双手稳住杠铃，用臀部发力抬髋至肩、髋、膝接近直线。",
        "缓慢落髋，保持头肩在地面，不改成背靠凳臀冲。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢落髋，保持头肩在地面，不改成背靠凳臀冲。",
      "aliases": [
        "Barbell Glute Bridge",
        "barbell glute bridge",
        "杠铃地面臀桥"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/wg_barbell_glute_bridge.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      },
      "catalogSlug": "barbell-glute-bridge",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_dumbbell_glute_bridge",
      "name": "哑铃地面臀桥",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "臀部发力抬髋，避免用腰部过伸顶高。",
      "steps": [
        "仰卧屈膝，双脚踩地，将哑铃稳放髋前并用双手固定。",
        "臀部发力抬髋，避免用腰部过伸顶高。",
        "缓慢落回地垫，哑铃始终保持稳定。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢落回地垫，哑铃始终保持稳定。",
      "aliases": [
        "Dumbbell Glute Bridge",
        "dumbbell glute bridge",
        "哑铃地面臀桥"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dumbbell-glute-bridge/frame-1.svg",
          "images/exercises/workout-guide/dumbbell-glute-bridge/frame-2.svg",
          "images/exercises/workout-guide/dumbbell-glute-bridge/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dumbbell-glute-bridge/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "dumbbell-glute-bridge",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_dumbbell_hip_thrust",
      "name": "哑铃臀冲",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "腘绳肌"
      ],
      "met": 3.5,
      "desc": "抬髋至躯干接近水平，下巴微收，肋骨不外翻。",
      "steps": [
        "上背靠稳固凳沿，双脚踩地，双手将哑铃固定于髋前。",
        "抬髋至躯干接近水平，下巴微收，肋骨不外翻。",
        "控制落髋，背部不在凳沿来回滑动。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制落髋，背部不在凳沿来回滑动。",
      "aliases": [
        "Dumbbell Hip Thrust",
        "dumbbell hip thrust",
        "哑铃臀冲"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dumbbell-hip-thrust/frame-1.svg",
          "images/exercises/workout-guide/dumbbell-hip-thrust/frame-2.svg",
          "images/exercises/workout-guide/dumbbell-hip-thrust/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dumbbell-hip-thrust/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "dumbbell-hip-thrust",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_smith_machine_hip_thrust",
      "name": "史密斯臀冲",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "确认安全挡位后解锁，双脚踩地抬髋。",
      "steps": [
        "将稳固凳置于史密斯机内，上背靠凳，横杆护垫置于髋前。",
        "确认安全挡位后解锁，双脚踩地抬髋。",
        "控制下降并按器械方式重新挂钩，避免直接压迫髋部。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制下降并按器械方式重新挂钩，避免直接压迫髋部。",
      "aliases": [
        "Smith Machine Hip Thrust",
        "smith machine hip thrust",
        "史密斯臀冲"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/smith-machine-hip-thrust/frame-1.svg",
          "images/exercises/workout-guide/smith-machine-hip-thrust/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/smith-machine-hip-thrust/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "smith-machine-hip-thrust",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_smith_machine_romanian_deadlift",
      "name": "史密斯罗马尼亚硬拉",
      "category": "hamstrings",
      "muscles": [
        "腘绳肌",
        "臀部肌群",
        "下背部"
      ],
      "met": 3.5,
      "desc": "向后送髋，让横杆沿导轨靠近腿部下降。",
      "steps": [
        "站在横杆前，双手正握，调好安全挡位，膝微屈。",
        "向后送髋，让横杆沿导轨靠近腿部下降。",
        "臀腿后侧发力站起，背部保持中立，不追求触地。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "臀腿后侧发力站起，背部保持中立，不追求触地。",
      "aliases": [
        "Smith Machine Romanian Deadlift",
        "smith machine romanian deadlift",
        "史密斯罗马尼亚硬拉"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/smith-machine-romanian-deadlift/frame-1.svg",
          "images/exercises/workout-guide/smith-machine-romanian-deadlift/frame-2.svg",
          "images/exercises/workout-guide/smith-machine-romanian-deadlift/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/smith-machine-romanian-deadlift/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "smith-machine-romanian-deadlift",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_kettlebell_romanian_deadlift",
      "name": "壶铃罗马尼亚硬拉",
      "category": "hamstrings",
      "muscles": [
        "腘绳肌",
        "臀部肌群",
        "下背部"
      ],
      "met": 3.5,
      "desc": "髋部向后移，壶铃贴近腿部下放，感受腿后侧张力。",
      "steps": [
        "双手握壶铃置于身前，双脚站稳、膝微屈。",
        "髋部向后移，壶铃贴近腿部下放，感受腿后侧张力。",
        "脚掌踩地伸髋站起，避免用手臂提拉。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "脚掌踩地伸髋站起，避免用手臂提拉。",
      "aliases": [
        "Kettlebell Romanian Deadlift",
        "kettlebell romanian deadlift",
        "壶铃罗马尼亚硬拉"
      ],
      "equipment": [
        "壶铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/kettlebell-romanian-deadlift/frame-1.svg",
          "images/exercises/workout-guide/kettlebell-romanian-deadlift/frame-2.svg",
          "images/exercises/workout-guide/kettlebell-romanian-deadlift/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/kettlebell-romanian-deadlift/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "kettlebell-romanian-deadlift",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_machine_glute_kickback",
      "name": "站姿绳索机后踢腿",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "腘绳肌"
      ],
      "met": 3.5,
      "desc": "保持骨盆朝前，训练腿向后伸展，不靠挺腰抬腿。",
      "steps": [
        "在低位滑轮固定踝带，面对器械扶稳，支撑腿微屈。",
        "保持骨盆朝前，训练腿向后伸展，不靠挺腰抬腿。",
        "缓慢收回训练腿，配重保持受控。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢收回训练腿，配重保持受控。",
      "aliases": [
        "Machine Glute Kickback",
        "machine glute kickback",
        "站姿绳索机后踢腿"
      ],
      "equipment": [
        "绳索机",
        "踝带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/machine-glute-kickback/frame-1.svg",
          "images/exercises/workout-guide/machine-glute-kickback/frame-2.svg",
          "images/exercises/workout-guide/machine-glute-kickback/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/machine-glute-kickback/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "machine-glute-kickback",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_cable_standing_hip_abduction",
      "name": "站姿绳索髋外展",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "骨盆保持水平，训练腿向身体外侧抬开。",
      "steps": [
        "低位滑轮连到外侧腿踝带，侧对器械并扶稳。",
        "骨盆保持水平，训练腿向身体外侧抬开。",
        "控制收回，不让躯干向相反方向倾倒。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制收回，不让躯干向相反方向倾倒。",
      "aliases": [
        "Cable Standing Hip Abduction",
        "cable standing hip abduction",
        "站姿绳索髋外展"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/cable-standing-hip-abduction/frame-1.svg",
          "images/exercises/workout-guide/cable-standing-hip-abduction/frame-2.svg",
          "images/exercises/workout-guide/cable-standing-hip-abduction/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/cable-standing-hip-abduction/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "cable-standing-hip-abduction",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_cable_standing_hip_adduction",
      "name": "站姿绳索髋内收",
      "category": "legs",
      "muscles": [
        "髋内收肌",
        "核心肌群",
        "臀部肌群"
      ],
      "met": 3.5,
      "desc": "支撑脚站稳，训练腿从外侧向身体中线内收。",
      "steps": [
        "低位滑轮连到靠器械一侧踝带，侧身扶稳。",
        "支撑脚站稳，训练腿从外侧向身体中线内收。",
        "缓慢返回起点，不用摆腿甩动配重。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢返回起点，不用摆腿甩动配重。",
      "aliases": [
        "Cable Standing Hip Adduction",
        "cable standing hip adduction",
        "站姿绳索髋内收"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "legs"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/cable-standing-hip-adduction/frame-1.svg",
          "images/exercises/workout-guide/cable-standing-hip-adduction/frame-2.svg",
          "images/exercises/workout-guide/cable-standing-hip-adduction/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/cable-standing-hip-adduction/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "cable-standing-hip-adduction",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_smith_machine_bulgarian_split_squat",
      "name": "史密斯保加利亚分腿蹲",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀部肌群",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "屈前膝控制下降，后脚只作平衡支撑。",
      "steps": [
        "横杆放于上背，后脚搭在稳固凳上，前脚站稳并调好安全挡位。",
        "屈前膝控制下降，后脚只作平衡支撑。",
        "前脚向下踩地站起，骨盆不旋转。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "前脚向下踩地站起，骨盆不旋转。",
      "aliases": [
        "Smith Machine Bulgarian Split Squat",
        "smith machine bulgarian split squat",
        "史密斯保加利亚分腿蹲"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/smith-machine-bulgarian-split-squat/frame-1.svg",
          "images/exercises/workout-guide/smith-machine-bulgarian-split-squat/frame-2.svg",
          "images/exercises/workout-guide/smith-machine-bulgarian-split-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/smith-machine-bulgarian-split-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "smith-machine-bulgarian-split-squat",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_smith_machine_reverse_lunge",
      "name": "史密斯后撤弓步",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "一脚向后迈步，前脚承重，控制屈膝下降。",
      "steps": [
        "横杆置于上背，确认导轨与安全挡位，双脚站稳。",
        "一脚向后迈步，前脚承重，控制屈膝下降。",
        "前脚发力站起并收回后脚，先用轻重量熟悉路径。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "前脚发力站起并收回后脚，先用轻重量熟悉路径。",
      "aliases": [
        "Smith Machine Reverse Lunge",
        "smith machine reverse lunge",
        "史密斯后撤弓步"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "单侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/smith-machine-reverse-lunge/frame-1.svg",
          "images/exercises/workout-guide/smith-machine-reverse-lunge/frame-2.svg",
          "images/exercises/workout-guide/smith-machine-reverse-lunge/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/smith-machine-reverse-lunge/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "smith-machine-reverse-lunge",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_dumbbell_sumo_deadlift",
      "name": "双哑铃相扑硬拉",
      "category": "compound",
      "muscles": [
        "后侧链",
        "臀部肌群",
        "股四头肌",
        "髋内收肌"
      ],
      "met": 3.5,
      "desc": "屈髋屈膝下放哑铃，膝盖与脚尖同向。",
      "steps": [
        "双脚宽于肩，脚尖略外开，双手持铃垂于腿间。",
        "屈髋屈膝下放哑铃，膝盖与脚尖同向。",
        "双脚踩地伸髋站起，双铃靠近身体。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "双脚踩地伸髋站起，双铃靠近身体。",
      "aliases": [
        "Dumbbell Sumo Deadlift",
        "dumbbell sumo deadlift",
        "双哑铃相扑硬拉"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "compound",
        "glutes",
        "legs",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dumbbell-sumo-deadlift/frame-1.svg",
          "images/exercises/workout-guide/dumbbell-sumo-deadlift/frame-2.svg",
          "images/exercises/workout-guide/dumbbell-sumo-deadlift/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dumbbell-sumo-deadlift/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "dumbbell-sumo-deadlift",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_front_foot_elevated_split_squat",
      "name": "前脚垫高哑铃分腿蹲",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀部肌群",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "保持前脚全脚掌受力，屈膝控制下降。",
      "steps": [
        "双手持铃，前脚放在低而稳固的平台，后脚落地。",
        "保持前脚全脚掌受力，屈膝控制下降。",
        "前腿发力回到起点，不借后腿猛蹬。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "前腿发力回到起点，不借后腿猛蹬。",
      "aliases": [
        "Front-Foot Elevated Split Squat",
        "front foot elevated split squat",
        "前脚垫高哑铃分腿蹲"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/front-foot-elevated-split-squat/frame-1.svg",
          "images/exercises/workout-guide/front-foot-elevated-split-squat/frame-2.svg",
          "images/exercises/workout-guide/front-foot-elevated-split-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/front-foot-elevated-split-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "front-foot-elevated-split-squat",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_deficit_reverse_lunge",
      "name": "垫高站姿哑铃后撤弓步",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "股四头肌",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "一脚向后撤到地面，支撑腿屈膝下降。",
      "steps": [
        "双手持铃，双脚站在低平台上，留出后撤空间。",
        "一脚向后撤到地面，支撑腿屈膝下降。",
        "平台上的前脚发力站回平台，先从低高度练习。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "平台上的前脚发力站回平台，先从低高度练习。",
      "aliases": [
        "Deficit Reverse Lunge",
        "deficit reverse lunge",
        "垫高站姿哑铃后撤弓步"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "单侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/deficit-reverse-lunge/frame-1.svg",
          "images/exercises/workout-guide/deficit-reverse-lunge/frame-2.svg",
          "images/exercises/workout-guide/deficit-reverse-lunge/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/deficit-reverse-lunge/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "deficit-reverse-lunge",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_dumbbell_lateral_lunge",
      "name": "哑铃侧向弓步",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀部肌群",
        "髋内收肌",
        "腘绳肌"
      ],
      "met": 3.5,
      "desc": "向侧面迈步并坐髋，迈出侧屈膝，另一腿自然伸展。",
      "steps": [
        "双手持铃站稳，预留两侧空间。",
        "向侧面迈步并坐髋，迈出侧屈膝，另一腿自然伸展。",
        "迈出侧脚掌发力蹬回起点，膝盖顺脚尖方向。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "迈出侧脚掌发力蹬回起点，膝盖顺脚尖方向。",
      "aliases": [
        "Dumbbell Lateral Lunge",
        "dumbbell lateral lunge",
        "哑铃侧向弓步"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "单侧",
      "tags": [
        "glutes",
        "hamstrings",
        "legs",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dumbbell-lateral-lunge/frame-1.svg",
          "images/exercises/workout-guide/dumbbell-lateral-lunge/frame-2.svg",
          "images/exercises/workout-guide/dumbbell-lateral-lunge/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dumbbell-lateral-lunge/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "dumbbell-lateral-lunge",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_dumbbell_curtsy_lunge",
      "name": "哑铃交叉后撤弓步",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "股四头肌",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "一脚小幅交叉向后迈，前腿控制下降，骨盆尽量朝前。",
      "steps": [
        "双手持轻哑铃，双脚站稳。",
        "一脚小幅交叉向后迈，前腿控制下降，骨盆尽量朝前。",
        "前脚发力回到站姿，膝部不适时改普通后撤弓步。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "前脚发力回到站姿，膝部不适时改普通后撤弓步。",
      "aliases": [
        "Dumbbell Curtsy Lunge",
        "dumbbell curtsy lunge",
        "哑铃交叉后撤弓步"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "单侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dumbbell-curtsy-lunge/frame-1.svg",
          "images/exercises/workout-guide/dumbbell-curtsy-lunge/frame-2.svg",
          "images/exercises/workout-guide/dumbbell-curtsy-lunge/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dumbbell-curtsy-lunge/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "dumbbell-curtsy-lunge",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_landmine_romanian_deadlift",
      "name": "地雷管罗马尼亚硬拉",
      "category": "hamstrings",
      "muscles": [
        "腘绳肌",
        "臀部肌群",
        "下背部"
      ],
      "met": 3.5,
      "desc": "向后送髋，使杠铃端靠近腿部下降。",
      "steps": [
        "确认杠铃一端固定，双手握自由端，膝微屈站稳。",
        "向后送髋，使杠铃端靠近腿部下降。",
        "臀腿后侧发力站起，背部不弓起或过伸。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "臀腿后侧发力站起，背部不弓起或过伸。",
      "aliases": [
        "Landmine Romanian Deadlift",
        "landmine romanian deadlift",
        "地雷管罗马尼亚硬拉"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/landmine-romanian-deadlift/frame-1.svg",
          "images/exercises/workout-guide/landmine-romanian-deadlift/frame-2.svg",
          "images/exercises/workout-guide/landmine-romanian-deadlift/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/landmine-romanian-deadlift/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "landmine-romanian-deadlift",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_glute_focused_back_extension",
      "name": "臀部侧重罗马椅挺身",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "腘绳肌",
        "下背部"
      ],
      "met": 3.0,
      "desc": "以髋关节为轴控制躯干下放，臀腿后侧保持张力。",
      "steps": [
        "调髋垫到髋折叠处，固定脚部，双手放胸前。",
        "以髋关节为轴控制躯干下放，臀腿后侧保持张力。",
        "用臀部带动躯干抬回与腿部一线，不向后折腰。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "用臀部带动躯干抬回与腿部一线，不向后折腰。",
      "aliases": [
        "Glute-Focused Back Extension",
        "glute focused back extension",
        "臀部侧重罗马椅挺身"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/glute-focused-back-extension/frame-1.svg",
          "images/exercises/workout-guide/glute-focused-back-extension/frame-2.svg",
          "images/exercises/workout-guide/glute-focused-back-extension/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/glute-focused-back-extension/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "glute-focused-back-extension",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_wall_sit",
      "name": "靠墙静蹲",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀部肌群",
        "核心肌群"
      ],
      "met": null,
      "desc": "沿墙缓慢下滑到可控深度，膝盖朝向脚尖。",
      "steps": [
        "背部贴墙，双脚向前移到能稳定承重的位置。",
        "沿墙缓慢下滑到可控深度，膝盖朝向脚尖。",
        "保持均匀呼吸，结束时沿墙站起，不必追求固定角度。"
      ],
      "mistakes": [
        "耸肩、塌腰或憋气，无法维持目标支撑姿势。"
      ],
      "tips": "保持均匀呼吸，结束时沿墙站起，不必追求固定角度。",
      "aliases": [
        "Wall Sit",
        "wall sit",
        "靠墙静蹲"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "支撑",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "quads"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/wall-sit/frame-1.svg",
          "images/exercises/workout-guide/wall-sit/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/wall-sit/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "wall-sit"
    },
    {
      "id": "wg_jump_squat",
      "name": "徒手深蹲跳",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀部肌群",
        "小腿肌群"
      ],
      "met": 3.0,
      "desc": "屈髋屈膝后向上跳起，落地时脚踝、膝、髋共同缓冲。",
      "steps": [
        "双脚与肩同宽，预留头顶和四周空间。",
        "屈髋屈膝后向上跳起，落地时脚踝、膝、髋共同缓冲。",
        "站稳再开始下一次，落地失控时改徒手深蹲。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "站稳再开始下一次，落地失控时改徒手深蹲。",
      "aliases": [
        "Jump Squat",
        "jump squat",
        "徒手深蹲跳"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "calves",
        "glutes",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/jump-squat/frame-1.svg",
          "images/exercises/workout-guide/jump-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/jump-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "jump-squat",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_ez_bar_curl",
      "name": "EZ曲杆弯举",
      "category": "biceps",
      "muscles": [
        "肱二头肌",
        "前臂肌群"
      ],
      "met": 3.5,
      "desc": "保持上臂位置，屈肘将曲杆提向肩前。",
      "steps": [
        "握住曲杆舒适斜握段，双脚站稳，上臂靠近躯干。",
        "保持上臂位置，屈肘将曲杆提向肩前。",
        "缓慢伸肘放回，避免腰部甩动。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢伸肘放回，避免腰部甩动。",
      "aliases": [
        "EZ-Bar Curl",
        "ez bar curl",
        "EZ曲杆弯举"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "biceps",
        "forearms"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/ez-bar-curl/frame-1.svg",
          "images/exercises/workout-guide/ez-bar-curl/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/ez-bar-curl/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "ez-bar-curl",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_rope_tricep_pushdown",
      "name": "绳索绳柄下压",
      "category": "triceps",
      "muscles": [
        "肱三头肌",
        "三角肌"
      ],
      "met": 3.5,
      "desc": "伸肘向下压，在末端自然分开绳柄两端。",
      "steps": [
        "将绳柄接到高位滑轮，上臂靠近身体，肘弯曲握稳。",
        "伸肘向下压，在末端自然分开绳柄两端。",
        "控制屈肘返回，上臂不跟着前后摆动。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制屈肘返回，上臂不跟着前后摆动。",
      "aliases": [
        "Rope Tricep Pushdown",
        "rope tricep pushdown",
        "绳索绳柄下压"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/rope-tricep-pushdown/frame-1.svg",
          "images/exercises/workout-guide/rope-tricep-pushdown/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/rope-tricep-pushdown/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "rope-tricep-pushdown",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_dumbbell_skull_crusher",
      "name": "双哑铃仰卧臂屈伸",
      "category": "triceps",
      "muscles": [
        "肱三头肌",
        "三角肌"
      ],
      "met": 3.5,
      "desc": "上臂尽量不动，屈肘让哑铃落向头部两侧。",
      "steps": [
        "仰卧平凳，每手一铃，上臂举于肩上方。",
        "上臂尽量不动，屈肘让哑铃落向头部两侧。",
        "肱三头肌发力伸肘，双铃不相互碰撞。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "肱三头肌发力伸肘，双铃不相互碰撞。",
      "aliases": [
        "Two Dumbbell Skullcrusher",
        "dumbbell skull crusher",
        "双哑铃仰卧臂屈伸"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dumbbell-skull-crusher/frame-1.svg",
          "images/exercises/workout-guide/dumbbell-skull-crusher/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dumbbell-skull-crusher/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "dumbbell-skull-crusher",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_single_dumbbell_skullcrusher",
      "name": "单臂哑铃仰卧臂屈伸",
      "category": "triceps",
      "muscles": [
        "肱三头肌",
        "三角肌"
      ],
      "met": 3.5,
      "desc": "上臂保持稳定，屈肘让哑铃受控靠近头侧。",
      "steps": [
        "仰卧平凳，单手持一只轻哑铃，上臂举于肩上方。",
        "上臂保持稳定，屈肘让哑铃受控靠近头侧。",
        "伸肘将哑铃举回，另一手可辅助稳定上臂，再换侧。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "伸肘将哑铃举回，另一手可辅助稳定上臂，再换侧。",
      "aliases": [
        "Single Dumbbell Skullcrusher",
        "single dumbbell skullcrusher",
        "单哑铃仰卧臂屈伸",
        "单臂哑铃仰卧臂屈伸",
        "单臂哑铃仰卧臂屈伸"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "单侧",
      "tags": [
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/single-dumbbell-skullcrusher/frame-1.svg",
          "images/exercises/workout-guide/single-dumbbell-skullcrusher/frame-2.svg",
          "images/exercises/workout-guide/single-dumbbell-skullcrusher/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/single-dumbbell-skullcrusher/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "single-dumbbell-skullcrusher",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_half_kneeling_pallof_press",
      "name": "半跪姿帕洛夫抗旋转推",
      "category": "core",
      "muscles": [
        "核心肌群",
        "臀部肌群",
        "三角肌"
      ],
      "met": 3.5,
      "desc": "保持骨盆朝前，双手缓慢向前推出，抵抗绳索拉转。",
      "steps": [
        "侧对胸高滑轮，一膝跪垫，双手把握柄抱在胸前。",
        "保持骨盆朝前，双手缓慢向前推出，抵抗绳索拉转。",
        "将双手收回胸前，再换另一侧朝向器械。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "将双手收回胸前，再换另一侧朝向器械。",
      "aliases": [
        "Half-Kneeling Pallof Press",
        "half kneeling pallof press",
        "半跪姿帕洛夫抗旋转推"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/half-kneeling-pallof-press/frame-1.svg",
          "images/exercises/workout-guide/half-kneeling-pallof-press/frame-2.svg",
          "images/exercises/workout-guide/half-kneeling-pallof-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/half-kneeling-pallof-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "half-kneeling-pallof-press",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_cable_pallof_hold",
      "name": "站姿绳索抗旋转保持",
      "category": "core",
      "muscles": [
        "核心肌群",
        "臀部肌群",
        "三角肌"
      ],
      "met": null,
      "desc": "向正前方伸臂并保持，肩、髋朝前，不跟随绳索旋转。",
      "steps": [
        "侧对滑轮站稳，双手握柄置于胸前。",
        "向正前方伸臂并保持，肩、髋朝前，不跟随绳索旋转。",
        "将把手收回胸前后放松，按保持时间练习。"
      ],
      "mistakes": [
        "耸肩、塌腰或憋气，无法维持目标支撑姿势。"
      ],
      "tips": "将把手收回胸前后放松，按保持时间练习。",
      "aliases": [
        "Cable Pallof Hold",
        "cable pallof hold",
        "站姿绳索抗旋转保持"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "支撑",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "shoulders"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/cable-pallof-hold/frame-1.svg",
          "images/exercises/workout-guide/cable-pallof-hold/frame-2.svg",
          "images/exercises/workout-guide/cable-pallof-hold/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/cable-pallof-hold/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "cable-pallof-hold"
    },
    {
      "id": "wg_captains_chair_knee_raise",
      "name": "肘撑架提膝",
      "category": "core",
      "muscles": [
        "核心肌群",
        "三角肌"
      ],
      "met": 3.5,
      "desc": "腹部发力屈膝上提，略带骨盆后倾，避免摆腿。",
      "steps": [
        "前臂放稳肘垫，背部轻贴靠垫，双腿自然垂下。",
        "腹部发力屈膝上提，略带骨盆后倾，避免摆腿。",
        "控制下放双腿，肩部不耸起。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制下放双腿，肩部不耸起。",
      "aliases": [
        "Captain's Chair Knee Raise",
        "captains chair knee raise",
        "肘撑架提膝"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/captains-chair-knee-raise/frame-1.svg",
          "images/exercises/workout-guide/captains-chair-knee-raise/frame-2.svg",
          "images/exercises/workout-guide/captains-chair-knee-raise/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/captains-chair-knee-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "captains-chair-knee-raise",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_decline_sit_up",
      "name": "下斜凳仰卧起坐",
      "category": "core",
      "muscles": [
        "核心肌群",
        "股四头肌"
      ],
      "met": 3.0,
      "desc": "从腹部控制卷起躯干，不用手拉头颈。",
      "steps": [
        "在低倾角下斜凳固定脚部，双手放胸前或头侧。",
        "从腹部控制卷起躯干，不用手拉头颈。",
        "缓慢回落到可控范围，腰部不适时改平地卷腹。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢回落到可控范围，腰部不适时改平地卷腹。",
      "aliases": [
        "Decline Sit-Up",
        "decline sit up",
        "下斜凳仰卧起坐"
      ],
      "equipment": [
        "下斜凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/decline-sit-up/frame-1.svg",
          "images/exercises/workout-guide/decline-sit-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/decline-sit-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "decline-sit-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_weighted_crunch",
      "name": "杠铃片负重卷腹",
      "category": "core",
      "muscles": [
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "呼气卷起肩胛，腰部不大幅离开地面。",
      "steps": [
        "仰卧屈膝，将轻杠铃片稳抱在胸前。",
        "呼气卷起肩胛，腰部不大幅离开地面。",
        "缓慢落下肩胛，避免把头颈用力前伸。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢落下肩胛，避免把头颈用力前伸。",
      "aliases": [
        "Weighted Crunch",
        "weighted crunch",
        "杠铃片负重卷腹"
      ],
      "equipment": [
        "杠铃片"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/weighted-crunch/frame-1.svg",
          "images/exercises/workout-guide/weighted-crunch/frame-2.svg",
          "images/exercises/workout-guide/weighted-crunch/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/weighted-crunch/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "weighted-crunch",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_weighted_russian_twist",
      "name": "哑铃负重俄罗斯转体",
      "category": "core",
      "muscles": [
        "核心肌群",
        "三角肌"
      ],
      "met": 3.5,
      "desc": "躯干轻微后倾，在可控范围向两侧转动胸廓。",
      "steps": [
        "坐姿屈膝，双脚先落地，双手稳持轻哑铃。",
        "躯干轻微后倾，在可控范围向两侧转动胸廓。",
        "回到中间再转向另一侧，不甩动哑铃或强扭腰。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "回到中间再转向另一侧，不甩动哑铃或强扭腰。",
      "aliases": [
        "Weighted Russian Twist",
        "weighted russian twist",
        "哑铃负重俄罗斯转体"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "weight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/weighted-russian-twist/frame-1.svg",
          "images/exercises/workout-guide/weighted-russian-twist/frame-2.svg",
          "images/exercises/workout-guide/weighted-russian-twist/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/weighted-russian-twist/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "weighted-russian-twist",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_elliptical",
      "name": "椭圆机训练",
      "category": "cardio",
      "muscles": [
        "下肢肌群"
      ],
      "met": null,
      "desc": "双脚随踏板作椭圆轨迹，双臂自然推拉，躯干保持稳定。",
      "steps": [
        "握稳把手后踏上踏板，从低阻力开始。",
        "双脚随踏板作椭圆轨迹，双臂自然推拉，躯干保持稳定。",
        "逐渐减速到踏板停稳，再扶稳下机。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "逐渐减速到踏板停稳，再扶稳下机。",
      "aliases": [
        "Elliptical",
        "elliptical",
        "椭圆机训练"
      ],
      "equipment": [
        "椭圆机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "cardio",
        "legs"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/elliptical/frame-1.svg",
          "images/exercises/workout-guide/elliptical/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/elliptical/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "elliptical"
    },
    {
      "id": "wg_swimming",
      "name": "自由泳",
      "category": "cardio",
      "muscles": [
        "背部肌群",
        "三角肌"
      ],
      "met": null,
      "desc": "身体尽量保持流线，双臂交替划水，双腿小幅打水。",
      "steps": [
        "在具备安全条件的泳池练习，先熟悉漂浮、吐气与换气。",
        "身体尽量保持流线，双臂交替划水，双腿小幅打水。",
        "按能力控制距离，体力不足时靠岸休息；初学者在指导下练习。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "按能力控制距离，体力不足时靠岸休息；初学者在指导下练习。",
      "aliases": [
        "Swimming",
        "swimming",
        "自由泳"
      ],
      "equipment": [
        "泳池"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "back",
        "cardio",
        "shoulders"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "distance_duration",
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/wg_swimming.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      },
      "catalogSlug": "swimming"
    },
    {
      "id": "wg_jump_rope",
      "name": "跳绳",
      "category": "cardio",
      "muscles": [
        "小腿肌群",
        "三角肌"
      ],
      "met": null,
      "desc": "用手腕带动绳子，小幅起跳，脚踝与膝盖柔和缓冲。",
      "steps": [
        "选择合适绳长，在防滑且有缓冲的地面站稳。",
        "用手腕带动绳子，小幅起跳，脚踝与膝盖柔和缓冲。",
        "保持轻落地的节奏，绊绳后停稳重新开始。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "保持轻落地的节奏，绊绳后停稳重新开始。",
      "aliases": [
        "Jump Rope",
        "jump rope",
        "跳绳"
      ],
      "equipment": [
        "跳绳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "calves",
        "cardio",
        "shoulders"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/jump-rope/frame-1.svg",
          "images/exercises/workout-guide/jump-rope/frame-2.svg",
          "images/exercises/workout-guide/jump-rope/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/jump-rope/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "jump-rope"
    },
    {
      "id": "wg_assault_bike",
      "name": "风阻单车",
      "category": "cardio",
      "muscles": [
        "下肢肌群",
        "三角肌"
      ],
      "met": null,
      "desc": "双腿踩踏、双臂推拉协同，按体感控制速度。",
      "steps": [
        "调好座高并固定脚部，握稳联动把手。",
        "双腿踩踏、双臂推拉协同，按体感控制速度。",
        "逐渐放缓，待踏板和把手停稳后下车。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "逐渐放缓，待踏板和把手停稳后下车。",
      "aliases": [
        "Assault Bike",
        "assault bike",
        "风阻单车"
      ],
      "equipment": [
        "风阻单车"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "cardio",
        "legs",
        "shoulders"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "distance_duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/assault-bike/frame-1.svg",
          "images/exercises/workout-guide/assault-bike/frame-2.svg",
          "images/exercises/workout-guide/assault-bike/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/assault-bike/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "assault-bike"
    },
    {
      "id": "wg_skierg",
      "name": "滑雪机下拉",
      "category": "cardio",
      "muscles": [
        "背部肌群",
        "肱三头肌",
        "核心肌群"
      ],
      "met": null,
      "desc": "手臂向下拉，同时略屈髋屈膝完成下压。",
      "steps": [
        "双脚站稳，握住高处手柄，膝髋自然微屈。",
        "手臂向下拉，同时略屈髋屈膝完成下压。",
        "受控伸髋站起，手柄沿自然轨迹回到上方。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "受控伸髋站起，手柄沿自然轨迹回到上方。",
      "aliases": [
        "SkiErg",
        "skierg",
        "滑雪机下拉"
      ],
      "equipment": [
        "滑雪机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "back",
        "cardio",
        "core",
        "triceps"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "distance_duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/skierg/frame-1.svg",
          "images/exercises/workout-guide/skierg/frame-2.svg",
          "images/exercises/workout-guide/skierg/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/skierg/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "skierg"
    },
    {
      "id": "wg_hiking",
      "name": "户外徒步",
      "category": "cardio",
      "muscles": [
        "下肢肌群",
        "臀部肌群"
      ],
      "met": null,
      "desc": "观察落脚点，以可控步幅行走，上坡时重心略向前。",
      "steps": [
        "选择适合自己的路线、鞋具和天气，调整背包与登山杖。",
        "观察落脚点，以可控步幅行走，上坡时重心略向前。",
        "下坡缩短步幅并稳定落脚，根据体力安排补给和返程。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "下坡缩短步幅并稳定落脚，根据体力安排补给和返程。",
      "aliases": [
        "Hiking",
        "hiking",
        "户外徒步"
      ],
      "equipment": [
        "户外路线",
        "登山杖（可选）"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "cardio",
        "glutes",
        "legs"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "distance_duration",
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/wg_hiking.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      },
      "catalogSlug": "hiking"
    },
    {
      "id": "wg_treadmill_incline_walk",
      "name": "跑步机坡度步行",
      "category": "cardio",
      "muscles": [
        "下肢肌群",
        "臀部肌群"
      ],
      "met": null,
      "desc": "保持自然步幅和轻微整体前倾，不弯腰吊在扶手上。",
      "steps": [
        "先低速步行，再逐步调整到可承受的坡度。",
        "保持自然步幅和轻微整体前倾，不弯腰吊在扶手上。",
        "先降坡度再逐步降速，停稳后离开机器。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "先降坡度再逐步降速，停稳后离开机器。",
      "aliases": [
        "Treadmill Incline Walk",
        "treadmill incline walk",
        "跑步机坡度步行"
      ],
      "equipment": [
        "跑步机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "cardio",
        "glutes",
        "legs"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "distance_duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/treadmill-incline-walk/frame-1.svg",
          "images/exercises/workout-guide/treadmill-incline-walk/frame-2.svg",
          "images/exercises/workout-guide/treadmill-incline-walk/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/treadmill-incline-walk/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "treadmill-incline-walk"
    },
    {
      "id": "wg_battle_ropes",
      "name": "战绳交替波浪",
      "category": "cardio",
      "muscles": [
        "三角肌",
        "核心肌群"
      ],
      "met": null,
      "desc": "双臂交替上下挥动，形成连续波浪，肩膀不过度耸起。",
      "steps": [
        "双手各握一端，双脚站稳，屈髋屈膝并收紧腹部。",
        "双臂交替上下挥动，形成连续波浪，肩膀不过度耸起。",
        "逐渐减小幅度后停止，握力和躯干失控时休息。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "逐渐减小幅度后停止，握力和躯干失控时休息。",
      "aliases": [
        "Battle Ropes",
        "battle ropes",
        "战绳交替波浪"
      ],
      "equipment": [
        "战绳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "cardio",
        "core",
        "shoulders"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/battle-ropes/frame-1.svg",
          "images/exercises/workout-guide/battle-ropes/frame-2.svg",
          "images/exercises/workout-guide/battle-ropes/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/battle-ropes/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "battle-ropes"
    },
    {
      "id": "wg_wide_push_up",
      "name": "宽距俯卧撑",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "三角肌",
        "肱三头肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "保持身体成直线，屈肘降低胸部，避免肩膀向前顶。",
      "steps": [
        "高平板位，双手比肩略宽，脚尖支撑地面。",
        "保持身体成直线，屈肘降低胸部，避免肩膀向前顶。",
        "双手推地返回，手距不必追求过宽。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "双手推地返回，手距不必追求过宽。",
      "aliases": [
        "Wide Push-up",
        "wide push up",
        "宽距俯卧撑"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "core",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/wide-push-up/frame-1.svg",
          "images/exercises/workout-guide/wide-push-up/frame-2.svg",
          "images/exercises/workout-guide/wide-push-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/wide-push-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "wide-push-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_pike_push_up",
      "name": "屈髋俯卧撑",
      "category": "shoulders",
      "muscles": [
        "三角肌",
        "肱三头肌",
        "胸大肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "屈肘让头部朝双手前方下降，保持颈部自然。",
      "steps": [
        "双手撑地，抬髋形成倒V形，脚尖踩稳。",
        "屈肘让头部朝双手前方下降，保持颈部自然。",
        "双手推地伸肘返回，不用头顶地面承重。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "双手推地伸肘返回，不用头顶地面承重。",
      "aliases": [
        "Pike Push-up",
        "pike push up",
        "屈髋俯卧撑"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "core",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/pike-push-up/frame-1.svg",
          "images/exercises/workout-guide/pike-push-up/frame-2.svg",
          "images/exercises/workout-guide/pike-push-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/pike-push-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "pike-push-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_feet_elevated_pike_push_up",
      "name": "垫脚屈髋俯卧撑",
      "category": "shoulders",
      "muscles": [
        "三角肌",
        "肱三头肌",
        "胸大肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "保持重心可控，屈肘让头部朝地面接近。",
      "steps": [
        "双脚放在低而稳固的平台，双手撑地并抬髋。",
        "保持重心可控，屈肘让头部朝地面接近。",
        "伸肘推回，先熟悉地面屈髋版本再抬高双脚。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "伸肘推回，先熟悉地面屈髋版本再抬高双脚。",
      "aliases": [
        "Feet-Elevated Pike Push-up",
        "feet elevated pike push up",
        "垫脚屈髋俯卧撑"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "core",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/feet-elevated-pike-push-up/frame-1.svg",
          "images/exercises/workout-guide/feet-elevated-pike-push-up/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/feet-elevated-pike-push-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "feet-elevated-pike-push-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_archer_push_up",
      "name": "弓箭手俯卧撑",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "肱三头肌",
        "三角肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "向一侧屈肘下降，另一臂保持较直，胸部移向屈肘侧。",
      "steps": [
        "双手宽撑地，身体保持高平板姿势。",
        "向一侧屈肘下降，另一臂保持较直，胸部移向屈肘侧。",
        "推回中间，再换另一侧，避免髋部塌陷。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "推回中间，再换另一侧，避免髋部塌陷。",
      "aliases": [
        "Archer Push-up",
        "archer push up",
        "弓箭手俯卧撑"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "advanced",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "core",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/archer-push-up/frame-1.svg",
          "images/exercises/workout-guide/archer-push-up/frame-2.svg",
          "images/exercises/workout-guide/archer-push-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/archer-push-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "archer-push-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_typewriter_push_up",
      "name": "打字机俯卧撑",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "肱三头肌",
        "三角肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "保持身体相对低位，将胸部从一侧横向移向另一侧。",
      "steps": [
        "宽距俯卧撑位，先下降至能控制的高度。",
        "保持身体相对低位，将胸部从一侧横向移向另一侧。",
        "推起回到高平板，幅度以肩部舒适为限。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "推起回到高平板，幅度以肩部舒适为限。",
      "aliases": [
        "Typewriter Push-up",
        "typewriter push up",
        "打字机俯卧撑"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "advanced",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "core",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/typewriter-push-up/frame-1.svg",
          "images/exercises/workout-guide/typewriter-push-up/frame-2.svg",
          "images/exercises/workout-guide/typewriter-push-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/typewriter-push-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "typewriter-push-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_explosive_push_up",
      "name": "爆发俯卧撑",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "肱三头肌",
        "三角肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "屈肘下降后快速推地，使双手短暂离地。",
      "steps": [
        "在能控制标准俯卧撑后，找有缓冲且不打滑的地面。",
        "屈肘下降后快速推地，使双手短暂离地。",
        "用屈肘缓冲落地，不必加入击掌。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "用屈肘缓冲落地，不必加入击掌。",
      "aliases": [
        "Explosive Push-up",
        "explosive push up",
        "爆发俯卧撑"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "advanced",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "core",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/explosive-push-up/frame-1.svg",
          "images/exercises/workout-guide/explosive-push-up/frame-2.svg",
          "images/exercises/workout-guide/explosive-push-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/explosive-push-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "explosive-push-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_hindu_push_up",
      "name": "印度式俯卧撑",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "三角肌",
        "肱三头肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "屈肘让胸部向前下方穿过，再在舒适范围伸展胸廓。",
      "steps": [
        "从倒V形开始，双手双脚踩稳。",
        "屈肘让胸部向前下方穿过，再在舒适范围伸展胸廓。",
        "控制回到倒V形，不用腰部硬顶或憋气。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制回到倒V形，不用腰部硬顶或憋气。",
      "aliases": [
        "Hindu Push-up",
        "hindu push up",
        "印度式俯卧撑"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "core",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/hindu-push-up/frame-1.svg",
          "images/exercises/workout-guide/hindu-push-up/frame-2.svg",
          "images/exercises/workout-guide/hindu-push-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/hindu-push-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "hindu-push-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_scapular_push_up",
      "name": "肩胛俯卧撑",
      "category": "back",
      "muscles": [
        "上背部",
        "胸大肌",
        "三角肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "只让肩胛骨向内靠近，使胸廓轻微下降。",
      "steps": [
        "高平板位，手肘保持接近伸直，腹部收紧。",
        "只让肩胛骨向内靠近，使胸廓轻微下降。",
        "推地让肩胛展开，肘部不跟随屈伸。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "推地让肩胛展开，肘部不跟随屈伸。",
      "aliases": [
        "Scapular Push-up",
        "scapular push up",
        "肩胛俯卧撑"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "chest",
        "core",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/scapular-push-up/frame-1.svg",
          "images/exercises/workout-guide/scapular-push-up/frame-2.svg",
          "images/exercises/workout-guide/scapular-push-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/scapular-push-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "scapular-push-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_push_up_shoulder_tap",
      "name": "高平板触肩（图库变式）",
      "category": "core",
      "muscles": [
        "核心肌群",
        "胸大肌",
        "三角肌",
        "肱三头肌"
      ],
      "met": 3.0,
      "desc": "一手离地触摸对侧肩，骨盆尽量不转动。",
      "steps": [
        "双手撑地、双脚略分开，建立稳定高平板。",
        "一手离地触摸对侧肩，骨盆尽量不转动。",
        "手放回再换侧；本图演示触肩，不包含完整俯卧撑。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "手放回再换侧；本图演示触肩，不包含完整俯卧撑。",
      "aliases": [
        "Push-up Shoulder Tap",
        "push up shoulder tap",
        "高平板触肩（图库变式）"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "core",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/push-up-shoulder-tap/frame-1.svg",
          "images/exercises/workout-guide/push-up-shoulder-tap/frame-2.svg",
          "images/exercises/workout-guide/push-up-shoulder-tap/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/push-up-shoulder-tap/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "push-up-shoulder-tap",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_wall_push_up",
      "name": "靠墙俯卧撑",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "肱三头肌",
        "三角肌"
      ],
      "met": 3.0,
      "desc": "保持身体成直线，屈肘将胸部靠近墙面。",
      "steps": [
        "面对稳固墙面，双手在胸高撑墙，双脚后移。",
        "保持身体成直线，屈肘将胸部靠近墙面。",
        "双手推墙返回，脚步越远难度越高。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "双手推墙返回，脚步越远难度越高。",
      "aliases": [
        "Wall Push-up",
        "wall push up",
        "靠墙俯卧撑"
      ],
      "equipment": [
        "墙面"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/wall-push-up/frame-1.svg",
          "images/exercises/workout-guide/wall-push-up/frame-2.svg",
          "images/exercises/workout-guide/wall-push-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/wall-push-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "wall-push-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_wall_walk",
      "name": "靠墙行走倒立",
      "category": "shoulders",
      "muscles": [
        "三角肌",
        "核心肌群",
        "胸大肌",
        "肱三头肌"
      ],
      "met": 3.0,
      "desc": "双脚逐步沿墙上移，双手小步向墙靠近。",
      "steps": [
        "确认墙边无杂物、地面防滑，从脚靠墙的高平板开始。",
        "双脚逐步沿墙上移，双手小步向墙靠近。",
        "保持可控距离后按原路退出；需要倒立基础与保护。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "保持可控距离后按原路退出；需要倒立基础与保护。",
      "aliases": [
        "Wall Walk",
        "wall walk",
        "靠墙行走倒立"
      ],
      "equipment": [
        "墙面"
      ],
      "difficulty": "advanced",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "core",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/wall-walk/frame-1.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/wall-walk/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 1 张姿势参考"
      },
      "catalogSlug": "wall-walk",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_wall_handstand_push_up",
      "name": "靠墙倒立撑",
      "category": "shoulders",
      "muscles": [
        "三角肌",
        "肱三头肌",
        "核心肌群",
        "胸大肌"
      ],
      "met": 3.0,
      "desc": "小幅屈肘控制下降，头颈不直接承重。",
      "steps": [
        "在保护条件下进入靠墙倒立，双手撑稳，肩部主动推地。",
        "小幅屈肘控制下降，头颈不直接承重。",
        "伸肘推回倒立，先练静态支撑再尝试屈伸。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "伸肘推回倒立，先练静态支撑再尝试屈伸。",
      "aliases": [
        "Wall Handstand Push-up",
        "wall handstand push up",
        "靠墙倒立撑"
      ],
      "equipment": [
        "墙面"
      ],
      "difficulty": "advanced",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "core",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/wall-handstand-push-up/frame-1.svg",
          "images/exercises/workout-guide/wall-handstand-push-up/frame-2.svg",
          "images/exercises/workout-guide/wall-handstand-push-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/wall-handstand-push-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "wall-handstand-push-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_handstand_push_up",
      "name": "自由倒立撑",
      "category": "shoulders",
      "muscles": [
        "三角肌",
        "肱三头肌",
        "核心肌群",
        "胸大肌"
      ],
      "met": 3.0,
      "desc": "保持身体平衡，屈肘进行可控小幅下降。",
      "steps": [
        "具备稳定自由倒立能力后，在软垫和保护下准备。",
        "保持身体平衡，屈肘进行可控小幅下降。",
        "双手推地伸肘返回，失去平衡时按已掌握方式安全退出。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "双手推地伸肘返回，失去平衡时按已掌握方式安全退出。",
      "aliases": [
        "Handstand Push-up",
        "handstand push up",
        "自由倒立撑"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "advanced",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "core",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/handstand-push-up/frame-1.svg",
          "images/exercises/workout-guide/handstand-push-up/frame-2.svg",
          "images/exercises/workout-guide/handstand-push-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/handstand-push-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "handstand-push-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_chair_dip",
      "name": "椅上臂屈伸",
      "category": "triceps",
      "muscles": [
        "肱三头肌",
        "胸大肌",
        "三角肌"
      ],
      "met": 3.0,
      "desc": "身体靠近椅缘，屈肘缓慢下降到肩部舒适范围。",
      "steps": [
        "使用靠墙且不会滑动的稳固椅子，双手扶住椅缘。",
        "身体靠近椅缘，屈肘缓慢下降到肩部舒适范围。",
        "伸肘推回，避免让肩部大幅向前顶。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "伸肘推回，避免让肩部大幅向前顶。",
      "aliases": [
        "Chair Dip",
        "chair dip",
        "椅上臂屈伸"
      ],
      "equipment": [
        "稳固椅子"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/chair-dip/frame-1.svg",
          "images/exercises/workout-guide/chair-dip/frame-2.svg",
          "images/exercises/workout-guide/chair-dip/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/chair-dip/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "chair-dip",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_doorway_row",
      "name": "门框划船",
      "category": "back",
      "muscles": [
        "背部肌群",
        "肱二头肌",
        "上背部",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "保持身体成直线，屈肘将胸部拉向门框。",
      "steps": [
        "确认门框稳固可承重，双手抓牢两侧，脚向前移。",
        "保持身体成直线，屈肘将胸部拉向门框。",
        "缓慢伸臂返回；不可靠的门框不能作为支撑。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢伸臂返回；不可靠的门框不能作为支撑。",
      "aliases": [
        "Doorway Row",
        "doorway row",
        "门框划船"
      ],
      "equipment": [
        "稳固门框"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps",
        "core"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/doorway-row/frame-1.svg",
          "images/exercises/workout-guide/doorway-row/frame-2.svg",
          "images/exercises/workout-guide/doorway-row/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/doorway-row/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "doorway-row",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_towel_row",
      "name": "固定毛巾划船",
      "category": "back",
      "muscles": [
        "背部肌群",
        "肱二头肌",
        "上背部",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "身体保持稳定，屈肘将胸口拉向固定点。",
      "steps": [
        "将结实毛巾固定在可靠锚点，先测试承重，双手握紧。",
        "身体保持稳定，屈肘将胸口拉向固定点。",
        "慢慢伸臂，毛巾或锚点滑动时立即停止。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "慢慢伸臂，毛巾或锚点滑动时立即停止。",
      "aliases": [
        "Towel Row",
        "towel row",
        "固定毛巾划船"
      ],
      "equipment": [
        "毛巾"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps",
        "core"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/towel-row/frame-2.svg",
          "images/exercises/workout-guide/towel-row/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/towel-row/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "towel-row",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_prone_y_raise",
      "name": "地面徒手Y字举",
      "category": "back",
      "muscles": [
        "上背部",
        "三角肌后束",
        "三角肌"
      ],
      "met": 3.0,
      "desc": "肩胛受控，轻抬双臂，颈部保持自然位置。",
      "steps": [
        "俯卧地垫，双臂向斜前方伸展成Y形，拇指自然向上。",
        "肩胛受控，轻抬双臂，颈部保持自然位置。",
        "缓慢放回地垫，不用腰部大幅反弓抬高。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢放回地垫，不用腰部大幅反弓抬高。",
      "aliases": [
        "Prone Y Raise",
        "prone y raise",
        "地面徒手Y字举"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/prone-y-raise/frame-1.svg",
          "images/exercises/workout-guide/prone-y-raise/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/prone-y-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "prone-y-raise",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_prone_t_raise",
      "name": "上斜凳哑铃T字举",
      "category": "back",
      "muscles": [
        "上背部",
        "三角肌后束",
        "三角肌"
      ],
      "met": 3.5,
      "desc": "双臂向两侧展开成T形，肘部保持微屈。",
      "steps": [
        "胸部贴上斜凳，双手持轻哑铃自然垂下。",
        "双臂向两侧展开成T形，肘部保持微屈。",
        "慢慢放回，胸部不离凳；图示为哑铃胸托版本。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "慢慢放回，胸部不离凳；图示为哑铃胸托版本。",
      "aliases": [
        "Prone T Raise",
        "prone t raise",
        "上斜凳哑铃T字举"
      ],
      "equipment": [
        "哑铃",
        "上斜凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/prone-t-raise/frame-1.svg",
          "images/exercises/workout-guide/prone-t-raise/frame-2.svg",
          "images/exercises/workout-guide/prone-t-raise/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/prone-t-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "prone-t-raise",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_superman",
      "name": "俯卧超人式",
      "category": "back",
      "muscles": [
        "下背部",
        "臀部肌群",
        "上背部",
        "腘绳肌"
      ],
      "met": 3.0,
      "desc": "在舒适范围轻抬双臂和双腿，不追求抬高。",
      "steps": [
        "俯卧地垫，双臂向前伸展，颈部保持自然。",
        "在舒适范围轻抬双臂和双腿，不追求抬高。",
        "缓慢放回地垫，腰部有挤压感时缩小幅度。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢放回地垫，腰部有挤压感时缩小幅度。",
      "aliases": [
        "Superman",
        "superman",
        "俯卧超人式"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/superman/frame-1.svg",
          "images/exercises/workout-guide/superman/frame-2.svg",
          "images/exercises/workout-guide/superman/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/superman/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "superman",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_superman_hold",
      "name": "俯卧超人保持",
      "category": "back",
      "muscles": [
        "下背部",
        "臀部肌群",
        "上背部",
        "腘绳肌"
      ],
      "met": null,
      "desc": "轻抬手脚并保持均匀呼吸，目视地面。",
      "steps": [
        "俯卧地垫，双臂前伸，先收紧腹部和臀部。",
        "轻抬手脚并保持均匀呼吸，目视地面。",
        "主动放回地垫休息，不长时间憋气。"
      ],
      "mistakes": [
        "耸肩、塌腰或憋气，无法维持目标支撑姿势。"
      ],
      "tips": "主动放回地垫休息，不长时间憋气。",
      "aliases": [
        "Superman Hold",
        "superman hold",
        "俯卧超人保持"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "支撑",
      "laterality": "双侧",
      "tags": [
        "back",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/superman-hold/frame-1.svg",
          "images/exercises/workout-guide/superman-hold/frame-2.svg",
          "images/exercises/workout-guide/superman-hold/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/superman-hold/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "superman-hold"
    },
    {
      "id": "wg_reverse_snow_angel",
      "name": "俯卧反向雪天使",
      "category": "back",
      "muscles": [
        "上背部",
        "三角肌后束",
        "下背部",
        "三角肌"
      ],
      "met": 3.0,
      "desc": "轻抬双臂，沿身体两侧向头顶方向缓慢划弧。",
      "steps": [
        "俯卧地垫，双臂放在体侧，额头保持舒适支撑。",
        "轻抬双臂，沿身体两侧向头顶方向缓慢划弧。",
        "沿原路回到体侧，避免耸肩或抬头挤压颈部。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "沿原路回到体侧，避免耸肩或抬头挤压颈部。",
      "aliases": [
        "Reverse Snow Angel",
        "reverse snow angel",
        "俯卧反向雪天使"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/reverse-snow-angel/frame-1.svg",
          "images/exercises/workout-guide/reverse-snow-angel/frame-2.svg",
          "images/exercises/workout-guide/reverse-snow-angel/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/reverse-snow-angel/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "reverse-snow-angel",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_dead_hang",
      "name": "被动悬垂",
      "category": "forearms",
      "muscles": [
        "前臂肌群",
        "背阔肌",
        "三角肌",
        "核心肌群"
      ],
      "met": null,
      "desc": "双脚离地自然悬垂，手臂伸展，保持正常呼吸。",
      "steps": [
        "检查单杠，双手正握，脚下留有安全落地点。",
        "双脚离地自然悬垂，手臂伸展，保持正常呼吸。",
        "在握力耗尽前踩回支撑，不突然松手坠落。"
      ],
      "mistakes": [
        "耸肩、塌腰或憋气，无法维持目标支撑姿势。"
      ],
      "tips": "在握力耗尽前踩回支撑，不突然松手坠落。",
      "aliases": [
        "Dead Hang",
        "dead hang",
        "被动悬垂"
      ],
      "equipment": [
        "单杠"
      ],
      "difficulty": "intermediate",
      "movementPattern": "支撑",
      "laterality": "双侧",
      "tags": [
        "back",
        "core",
        "forearms",
        "shoulders"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dead-hang/frame-1.svg",
          "images/exercises/workout-guide/dead-hang/frame-2.svg",
          "images/exercises/workout-guide/dead-hang/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dead-hang/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "dead-hang"
    },
    {
      "id": "wg_active_hang",
      "name": "主动悬垂",
      "category": "back",
      "muscles": [
        "背阔肌",
        "上背部",
        "前臂肌群",
        "核心肌群"
      ],
      "met": null,
      "desc": "肘部保持直，用肩胛下沉轻微抬高身体。",
      "steps": [
        "正握单杠，双手略宽于肩，稳定悬垂。",
        "肘部保持直，用肩胛下沉轻微抬高身体。",
        "保持短暂停留后受控放松，避免耸肩晃荡。"
      ],
      "mistakes": [
        "耸肩、塌腰或憋气，无法维持目标支撑姿势。"
      ],
      "tips": "保持短暂停留后受控放松，避免耸肩晃荡。",
      "aliases": [
        "Active Hang",
        "active hang",
        "主动悬垂"
      ],
      "equipment": [
        "单杠"
      ],
      "difficulty": "intermediate",
      "movementPattern": "支撑",
      "laterality": "双侧",
      "tags": [
        "back",
        "core",
        "forearms"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/active-hang/frame-1.svg",
          "images/exercises/workout-guide/active-hang/frame-2.svg",
          "images/exercises/workout-guide/active-hang/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/active-hang/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "active-hang"
    },
    {
      "id": "wg_scapular_pull_up",
      "name": "肩胛引体",
      "category": "back",
      "muscles": [
        "背阔肌",
        "上背部",
        "前臂肌群",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "通过肩胛下沉与回收使身体略微升高。",
      "steps": [
        "双手正握单杠，双肘保持直，躯干稳定。",
        "通过肩胛下沉与回收使身体略微升高。",
        "慢慢返回悬垂，不把动作做成屈肘引体。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "慢慢返回悬垂，不把动作做成屈肘引体。",
      "aliases": [
        "Scapular Pull-up",
        "scapular pull up",
        "肩胛引体"
      ],
      "equipment": [
        "单杠"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "core",
        "forearms"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/scapular-pull-up/frame-1.svg",
          "images/exercises/workout-guide/scapular-pull-up/frame-2.svg",
          "images/exercises/workout-guide/scapular-pull-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/scapular-pull-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "scapular-pull-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_negative_pull_up",
      "name": "离心引体向上",
      "category": "back",
      "muscles": [
        "背阔肌",
        "肱二头肌",
        "上背部",
        "前臂肌群"
      ],
      "met": 3.0,
      "desc": "移开脚部支撑，缓慢伸肘控制身体下降。",
      "steps": [
        "利用稳固踏台进入引体顶端，下巴接近横杠。",
        "移开脚部支撑，缓慢伸肘控制身体下降。",
        "脚回到踏台重新开始，不用疲劳后跳起抓杠。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "脚回到踏台重新开始，不用疲劳后跳起抓杠。",
      "aliases": [
        "Negative Pull-up",
        "negative pull up",
        "离心引体向上"
      ],
      "equipment": [
        "单杠"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps",
        "forearms"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/negative-pull-up/frame-1.svg",
          "images/exercises/workout-guide/negative-pull-up/frame-2.svg",
          "images/exercises/workout-guide/negative-pull-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/negative-pull-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "negative-pull-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_commando_pull_up",
      "name": "突击队引体向上",
      "category": "back",
      "muscles": [
        "背阔肌",
        "肱二头肌",
        "上背部",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "屈肘上拉，让头部从横杠一侧接近顶端。",
      "steps": [
        "身体沿横杠方向站位，双手前后相邻握杠。",
        "屈肘上拉，让头部从横杠一侧接近顶端。",
        "控制下降，下次从另一侧经过，并轮换前后手位。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制下降，下次从另一侧经过，并轮换前后手位。",
      "aliases": [
        "Commando Pull-up",
        "commando pull up",
        "突击队引体向上"
      ],
      "equipment": [
        "单杠"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps",
        "core"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/commando-pull-up/frame-1.svg",
          "images/exercises/workout-guide/commando-pull-up/frame-2.svg",
          "images/exercises/workout-guide/commando-pull-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/commando-pull-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "commando-pull-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_l_sit_pull_up",
      "name": "L型引体向上",
      "category": "back",
      "muscles": [
        "背阔肌",
        "肱二头肌",
        "核心肌群",
        "前臂肌群"
      ],
      "met": 3.0,
      "desc": "保持抬腿与腹部张力，屈肘上拉身体。",
      "steps": [
        "正握单杠，稳定悬垂并抬腿接近水平。",
        "保持抬腿与腹部张力，屈肘上拉身体。",
        "缓慢下降，抬腿失控时回到普通引体练习。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢下降，抬腿失控时回到普通引体练习。",
      "aliases": [
        "L-Sit Pull-up",
        "l sit pull up",
        "L型引体向上"
      ],
      "equipment": [
        "单杠"
      ],
      "difficulty": "advanced",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps",
        "core",
        "forearms"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/l-sit-pull-up/frame-1.svg",
          "images/exercises/workout-guide/l-sit-pull-up/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/l-sit-pull-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "l-sit-pull-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_towel_pull_up",
      "name": "毛巾引体向上",
      "category": "back",
      "muscles": [
        "背阔肌",
        "肱二头肌",
        "前臂肌群",
        "上背部"
      ],
      "met": 3.0,
      "desc": "先稳定悬垂，再屈肘把身体向上拉。",
      "steps": [
        "将结实毛巾搭过可靠单杠，双手各握一端并测试承重。",
        "先稳定悬垂，再屈肘把身体向上拉。",
        "控制下降，在握力不足前踩回支撑。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制下降，在握力不足前踩回支撑。",
      "aliases": [
        "Towel Pull-up",
        "towel pull up",
        "毛巾引体向上"
      ],
      "equipment": [
        "毛巾"
      ],
      "difficulty": "advanced",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps",
        "forearms"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/towel-pull-up/frame-1.svg",
          "images/exercises/workout-guide/towel-pull-up/frame-2.svg",
          "images/exercises/workout-guide/towel-pull-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/towel-pull-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "towel-pull-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_bodyweight_squat",
      "name": "徒手深蹲",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "屈髋屈膝下蹲，膝盖沿脚尖方向移动，脚掌踩实。",
      "steps": [
        "双脚与肩接近同宽，脚尖自然外开，双臂前伸。",
        "屈髋屈膝下蹲，膝盖沿脚尖方向移动，脚掌踩实。",
        "蹬地站起，不用腰部前后摆动。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "蹬地站起，不用腰部前后摆动。",
      "aliases": [
        "Bodyweight Squat",
        "bodyweight squat",
        "徒手深蹲"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/bodyweight-squat/frame-1.svg",
          "images/exercises/workout-guide/bodyweight-squat/frame-2.svg",
          "images/exercises/workout-guide/bodyweight-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/bodyweight-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "bodyweight-squat",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_pistol_squat",
      "name": "手枪深蹲",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "支撑腿屈髋屈膝下降，伸出的腿尽量不触地。",
      "steps": [
        "单脚站稳，另一腿向前伸，双臂前伸平衡。",
        "支撑腿屈髋屈膝下降，伸出的腿尽量不触地。",
        "全脚掌踩地站起，先练扶物或高箱辅助版本。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "全脚掌踩地站起，先练扶物或高箱辅助版本。",
      "aliases": [
        "Pistol Squat",
        "pistol squat",
        "手枪深蹲"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "advanced",
      "movementPattern": "力量",
      "laterality": "单侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/pistol-squat/frame-1.svg",
          "images/exercises/workout-guide/pistol-squat/frame-2.svg",
          "images/exercises/workout-guide/pistol-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/pistol-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "pistol-squat",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_assisted_pistol_squat",
      "name": "辅助手枪深蹲",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "借支撑帮助平衡，支撑腿控制下降。",
      "steps": [
        "双手扶稳固定支撑，一脚站地，另一腿前伸。",
        "借支撑帮助平衡，支撑腿控制下降。",
        "脚掌发力站起，手只提供需要的辅助。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "脚掌发力站起，手只提供需要的辅助。",
      "aliases": [
        "Assisted Pistol Squat",
        "assisted pistol squat",
        "辅助手枪深蹲"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "单侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/assisted-pistol-squat/frame-1.svg",
          "images/exercises/workout-guide/assisted-pistol-squat/frame-2.svg",
          "images/exercises/workout-guide/assisted-pistol-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/assisted-pistol-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "assisted-pistol-squat",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_shrimp_squat",
      "name": "扶物虾式深蹲",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "支撑腿屈膝下降，后膝向地面接近，骨盆保持稳定。",
      "steps": [
        "单手扶固定支撑，单腿站稳，另一腿屈膝收向身后。",
        "支撑腿屈膝下降，后膝向地面接近，骨盆保持稳定。",
        "支撑脚发力站起，保持扶物辅助，不照搬图中前伸腿姿势。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "支撑脚发力站起，保持扶物辅助，不照搬图中前伸腿姿势。",
      "aliases": [
        "Shrimp Squat",
        "shrimp squat",
        "扶物虾式深蹲"
      ],
      "equipment": [
        "自重",
        "固定支撑"
      ],
      "difficulty": "advanced",
      "movementPattern": "力量",
      "laterality": "单侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/shrimp-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/shrimp-squat/",
        "license": "CC BY-SA 4.0",
        "note": "保留与本动作对应的单张姿势图"
      },
      "catalogSlug": "shrimp-squat",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_cossack_squat",
      "name": "哥萨克深蹲",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "重心移向一侧并屈膝坐髋，另一腿伸展。",
      "steps": [
        "双脚宽站，脚尖自然外开，双手放胸前。",
        "重心移向一侧并屈膝坐髋，另一腿伸展。",
        "回到中间后换侧，幅度以脚掌和膝盖能控制为限。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "回到中间后换侧，幅度以脚掌和膝盖能控制为限。",
      "aliases": [
        "Cossack Squat",
        "cossack squat",
        "哥萨克深蹲"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/cossack-squat/frame-1.svg",
          "images/exercises/workout-guide/cossack-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/cossack-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "cossack-squat",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_sissy_squat",
      "name": "器械西西蹲",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "核心肌群",
        "小腿肌群"
      ],
      "met": 3.0,
      "desc": "躯干与大腿尽量成一线，屈膝缓慢后倾。",
      "steps": [
        "先检查西西蹲固定垫，按器械说明固定脚踝与小腿。",
        "躯干与大腿尽量成一线，屈膝缓慢后倾。",
        "股四头肌发力回到起点，先练扶物辅助版本。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "股四头肌发力回到起点，先练扶物辅助版本。",
      "aliases": [
        "Sissy Squat",
        "sissy squat",
        "器械西西蹲"
      ],
      "equipment": [
        "西西蹲固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "calves",
        "core",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/sissy-squat/frame-1.svg",
          "images/exercises/workout-guide/sissy-squat/frame-2.svg",
          "images/exercises/workout-guide/sissy-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/sissy-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "sissy-squat",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_skater_squat",
      "name": "滑冰式单腿蹲",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "支撑腿屈髋屈膝下降，后膝向地面接近。",
      "steps": [
        "单脚站立，另一腿屈膝向后悬空，双臂帮助平衡。",
        "支撑腿屈髋屈膝下降，后膝向地面接近。",
        "支撑脚踩地站起，骨盆不向侧面翻开。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "支撑脚踩地站起，骨盆不向侧面翻开。",
      "aliases": [
        "Skater Squat",
        "skater squat",
        "滑冰式单腿蹲"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "单侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/skater-squat/frame-1.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/skater-squat/",
        "license": "CC BY-SA 4.0",
        "note": "保留与本动作对应的单张姿势图"
      },
      "catalogSlug": "skater-squat",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_single_leg_box_squat",
      "name": "单腿坐箱深蹲",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "向后坐髋并屈膝，轻触箱面，不把重心完全砸在箱上。",
      "steps": [
        "背对稳固高箱单脚站立，另一腿前伸。",
        "向后坐髋并屈膝，轻触箱面，不把重心完全砸在箱上。",
        "支撑脚发力站起，可先选较高箱子。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "支撑脚发力站起，可先选较高箱子。",
      "aliases": [
        "Single-Leg Box Squat",
        "single leg box squat",
        "单腿坐箱深蹲"
      ],
      "equipment": [
        "稳固台阶"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "单侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/single-leg-box-squat/frame-1.svg",
          "images/exercises/workout-guide/single-leg-box-squat/frame-2.svg",
          "images/exercises/workout-guide/single-leg-box-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/single-leg-box-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "single-leg-box-squat",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_step_down",
      "name": "台阶下踏",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀部肌群",
        "腘绳肌",
        "小腿肌群"
      ],
      "met": 3.0,
      "desc": "支撑腿缓慢屈膝，让悬空脚轻触地面。",
      "steps": [
        "单脚站在低平台边缘，另一脚悬空，扶稳支撑物。",
        "支撑腿缓慢屈膝，让悬空脚轻触地面。",
        "平台上的脚发力站直，避免骨盆向一侧坠落。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "平台上的脚发力站直，避免骨盆向一侧坠落。",
      "aliases": [
        "Step-Down",
        "step down",
        "台阶下踏"
      ],
      "equipment": [
        "稳固台阶"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "单侧",
      "tags": [
        "calves",
        "glutes",
        "hamstrings",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/step-down/frame-1.svg",
          "images/exercises/workout-guide/step-down/frame-2.svg",
          "images/exercises/workout-guide/step-down/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/step-down/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "step-down",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_glute_bridge_march",
      "name": "臀桥交替抬脚",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "骨盆保持水平，交替轻抬一只脚。",
      "steps": [
        "仰卧屈膝，双脚踩地，抬髋进入臀桥。",
        "骨盆保持水平，交替轻抬一只脚。",
        "脚放回再换侧，腰部不塌陷或左右摇摆。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "脚放回再换侧，腰部不塌陷或左右摇摆。",
      "aliases": [
        "Glute Bridge March",
        "glute bridge march",
        "臀桥交替抬脚"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/glute-bridge-march/frame-1.svg",
          "images/exercises/workout-guide/glute-bridge-march/frame-2.svg",
          "images/exercises/workout-guide/glute-bridge-march/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/glute-bridge-march/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "glute-bridge-march",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_frog_pump",
      "name": "徒手蛙式臀桥",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "腘绳肌"
      ],
      "met": 3.0,
      "desc": "收紧臀部小幅抬髋，保持双脚接触。",
      "steps": [
        "仰卧地面，脚掌相对、双膝自然向外，双肩落地。",
        "收紧臀部小幅抬髋，保持双脚接触。",
        "缓慢落髋，双膝不强行压向地面。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢落髋，双膝不强行压向地面。",
      "aliases": [
        "Frog Pump",
        "frog pump",
        "徒手蛙式臀桥"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/frog-pump/frame-1.svg",
          "images/exercises/workout-guide/frog-pump/frame-2.svg",
          "images/exercises/workout-guide/frog-pump/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/frog-pump/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "frog-pump",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_donkey_kick",
      "name": "跪姿屈膝后抬腿",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "一侧腿保持屈膝，用髋伸展带动脚底朝后上方。",
      "steps": [
        "四点跪姿，手在肩下、膝在髋下，腹部收紧。",
        "一侧腿保持屈膝，用髋伸展带动脚底朝后上方。",
        "控制收回，不用腰部反弓换取高度。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制收回，不用腰部反弓换取高度。",
      "aliases": [
        "Donkey Kick",
        "donkey kick",
        "跪姿屈膝后抬腿"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/donkey-kick/frame-1.svg",
          "images/exercises/workout-guide/donkey-kick/frame-2.svg",
          "images/exercises/workout-guide/donkey-kick/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/donkey-kick/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "donkey-kick",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_clamshell",
      "name": "徒手蚌式开合",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "保持脚部接触，上侧膝盖向上打开。",
      "steps": [
        "侧卧屈髋屈膝，脚部相叠，骨盆垂直。",
        "保持脚部接触，上侧膝盖向上打开。",
        "慢慢合拢双膝，身体不向后滚动。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "慢慢合拢双膝，身体不向后滚动。",
      "aliases": [
        "Clamshell",
        "clamshell",
        "徒手蚌式开合"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/clamshell/frame-1.svg",
          "images/exercises/workout-guide/clamshell/frame-2.svg",
          "images/exercises/workout-guide/clamshell/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/clamshell/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "clamshell",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_hip_airplane",
      "name": "扶物髋飞机",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "围绕支撑髋轻微转动骨盆，控制打开再回正。",
      "steps": [
        "单脚站立，手扶稳固支撑，屈髋让另一腿后伸。",
        "围绕支撑髋轻微转动骨盆，控制打开再回正。",
        "保持支撑膝与脚尖方向协调，先用小幅度。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "保持支撑膝与脚尖方向协调，先用小幅度。",
      "aliases": [
        "Hip Airplane",
        "hip airplane",
        "扶物髋飞机"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/hip-airplane/frame-1.svg",
          "images/exercises/workout-guide/hip-airplane/frame-2.svg",
          "images/exercises/workout-guide/hip-airplane/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/hip-airplane/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "hip-airplane",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_side_lying_hip_abduction",
      "name": "肘撑侧卧髋外展",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "上侧腿伸直向上抬，脚尖尽量朝前。",
      "steps": [
        "侧卧并用前臂支撑上身，下侧腿微屈。",
        "上侧腿伸直向上抬，脚尖尽量朝前。",
        "缓慢落腿，骨盆不向后翻转。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢落腿，骨盆不向后翻转。",
      "aliases": [
        "Side-Lying Hip Abduction",
        "side lying hip abduction",
        "肘撑侧卧髋外展"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/side-lying-hip-abduction/frame-1.svg",
          "images/exercises/workout-guide/side-lying-hip-abduction/frame-2.svg",
          "images/exercises/workout-guide/side-lying-hip-abduction/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/side-lying-hip-abduction/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "side-lying-hip-abduction",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_side_lying_leg_raise",
      "name": "枕臂侧卧抬腿",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "保持骨盆叠放，上侧腿向上抬至可控高度。",
      "steps": [
        "侧卧地垫，下臂支撑头部，上侧腿伸直。",
        "保持骨盆叠放，上侧腿向上抬至可控高度。",
        "慢慢放下，避免脚尖过度转向天花板。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "慢慢放下，避免脚尖过度转向天花板。",
      "aliases": [
        "Side-Lying Leg Raise",
        "side lying leg raise",
        "枕臂侧卧抬腿"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/side-lying-leg-raise/frame-1.svg",
          "images/exercises/workout-guide/side-lying-leg-raise/frame-2.svg",
          "images/exercises/workout-guide/side-lying-leg-raise/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/side-lying-leg-raise/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "side-lying-leg-raise",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_lying_hamstring_walkout",
      "name": "臀桥脚跟走出",
      "category": "hamstrings",
      "muscles": [
        "腘绳肌",
        "臀部肌群",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "脚跟交替小步向前走，使膝盖逐渐伸展。",
      "steps": [
        "仰卧屈膝、脚跟着地，抬髋进入臀桥。",
        "脚跟交替小步向前走，使膝盖逐渐伸展。",
        "再交替走回起点，臀部保持受控，不用腰部顶高。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "再交替走回起点，臀部保持受控，不用腰部顶高。",
      "aliases": [
        "Lying Hamstring Walkout",
        "lying hamstring walkout",
        "臀桥脚跟走出"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/wg_lying_hamstring_walkout.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      },
      "catalogSlug": "lying-hamstring-walkout",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_towel_hamstring_curl",
      "name": "毛巾滑动腿弯举",
      "category": "hamstrings",
      "muscles": [
        "腘绳肌",
        "臀部肌群",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "抬髋后屈膝，将毛巾和脚跟向臀部拖近。",
      "steps": [
        "仰卧光滑地面，双脚跟放毛巾上，双肩落地。",
        "抬髋后屈膝，将毛巾和脚跟向臀部拖近。",
        "受控伸膝滑远，不改成用毛巾拉脚的静态拉伸。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "受控伸膝滑远，不改成用毛巾拉脚的静态拉伸。",
      "aliases": [
        "Towel Hamstring Curl",
        "towel hamstring curl",
        "毛巾滑动腿弯举"
      ],
      "equipment": [
        "毛巾"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/wg_towel_hamstring_curl.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      },
      "catalogSlug": "towel-hamstring-curl",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_stability_ball_hamstring_curl",
      "name": "健身球仰卧腿弯举",
      "category": "hamstrings",
      "muscles": [
        "腘绳肌",
        "臀部肌群",
        "核心肌群"
      ],
      "met": 3.0,
      "desc": "抬髋并屈膝，将球朝臀部滚近。",
      "steps": [
        "仰卧地面，双脚跟放健身球上，双臂扶地保持平衡。",
        "抬髋并屈膝，将球朝臀部滚近。",
        "控制伸膝滚远，始终保持仰卧，不做俯撑收膝。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制伸膝滚远，始终保持仰卧，不做俯撑收膝。",
      "aliases": [
        "Stability Ball Hamstring Curl",
        "stability ball hamstring curl",
        "健身球仰卧腿弯举"
      ],
      "equipment": [
        "健身球"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/wg_stability_ball_hamstring_curl.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      },
      "catalogSlug": "stability-ball-hamstring-curl",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_banded_glute_bridge",
      "name": "弹力带臀桥",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "膝盖对抗环带保持间距，同时臀部发力抬髋。",
      "steps": [
        "仰卧屈膝，将小环带置于膝上，脚掌踩稳地面。",
        "膝盖对抗环带保持间距，同时臀部发力抬髋。",
        "缓慢落髋，膝盖不向内扣。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢落髋，膝盖不向内扣。",
      "aliases": [
        "Banded Glute Bridge",
        "banded glute bridge",
        "弹力带臀桥"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/banded-glute-bridge/frame-1.svg",
          "images/exercises/workout-guide/banded-glute-bridge/frame-2.svg",
          "images/exercises/workout-guide/banded-glute-bridge/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/banded-glute-bridge/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "banded-glute-bridge",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_banded_hip_thrust",
      "name": "弹力带臀冲",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "保持膝盖与脚尖同向，抬髋至躯干接近水平。",
      "steps": [
        "上背靠稳固凳，环带置于膝上，双脚踩地。",
        "保持膝盖与脚尖同向，抬髋至躯干接近水平。",
        "控制落髋，不用腰部过伸顶高。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制落髋，不用腰部过伸顶高。",
      "aliases": [
        "Banded Hip Thrust",
        "banded hip thrust",
        "弹力带臀冲"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/banded-hip-thrust/frame-1.svg",
          "images/exercises/workout-guide/banded-hip-thrust/frame-2.svg",
          "images/exercises/workout-guide/banded-hip-thrust/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/banded-hip-thrust/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "banded-hip-thrust",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_banded_frog_pump",
      "name": "弹力带蛙式臀桥",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "腘绳肌"
      ],
      "met": 3.5,
      "desc": "头肩留在地面，保持环带张力，臀部发力抬髋。",
      "steps": [
        "仰卧地面，环带放在膝上，脚掌相对，双膝外开。",
        "头肩留在地面，保持环带张力，臀部发力抬髋。",
        "缓慢落下，不做双手向后撑地的反向桌式。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢落下，不做双手向后撑地的反向桌式。",
      "aliases": [
        "Banded Frog Pump",
        "banded frog pump",
        "弹力带蛙式臀桥"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/wg_banded_frog_pump.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      },
      "catalogSlug": "banded-frog-pump",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_banded_monster_walk",
      "name": "弹力带怪兽走",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "股四头肌",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "保持环带张力，斜前方小步交替移动。",
      "steps": [
        "小环带置于膝上或踝部，双脚略宽于髋，屈髋屈膝。",
        "保持环带张力，斜前方小步交替移动。",
        "按相同方式斜后方退回，膝盖不内扣。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "按相同方式斜后方退回，膝盖不内扣。",
      "aliases": [
        "Banded Monster Walk",
        "banded monster walk",
        "弹力带怪兽走"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/banded-monster-walk/frame-1.svg",
          "images/exercises/workout-guide/banded-monster-walk/frame-2.svg",
          "images/exercises/workout-guide/banded-monster-walk/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/banded-monster-walk/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "banded-monster-walk",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_banded_squat",
      "name": "弹力带深蹲",
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "维持膝盖朝向脚尖，屈髋屈膝下蹲。",
      "steps": [
        "双脚踩住长弹力带，将两端稳握在肩旁，检查带体无破损。",
        "维持膝盖朝向脚尖，屈髋屈膝下蹲。",
        "脚掌踩实站起，保持两端握持稳定。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "脚掌踩实站起，保持两端握持稳定。",
      "aliases": [
        "Banded Squat",
        "banded squat",
        "弹力带深蹲"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/banded-squat/frame-1.svg",
          "images/exercises/workout-guide/banded-squat/frame-2.svg",
          "images/exercises/workout-guide/banded-squat/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/banded-squat/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "banded-squat",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_banded_donkey_kick",
      "name": "弹力带跪姿后抬腿",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "保持训练腿屈膝，向后上方抬起，对抗弹力带。",
      "steps": [
        "四点跪姿，环带按图稳放在大腿，双手撑稳。",
        "保持训练腿屈膝，向后上方抬起，对抗弹力带。",
        "控制收回，躯干不旋转或塌腰。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制收回，躯干不旋转或塌腰。",
      "aliases": [
        "Banded Donkey Kick",
        "banded donkey kick",
        "弹力带跪姿后抬腿"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/banded-donkey-kick/frame-1.svg",
          "images/exercises/workout-guide/banded-donkey-kick/frame-2.svg",
          "images/exercises/workout-guide/banded-donkey-kick/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/banded-donkey-kick/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "banded-donkey-kick",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_banded_fire_hydrant",
      "name": "弹力带跪姿侧抬腿",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "一侧膝盖向外抬开，骨盆尽量不随之翻转。",
      "steps": [
        "四点跪姿，环带置于膝上，腹部保持张力。",
        "一侧膝盖向外抬开，骨盆尽量不随之翻转。",
        "缓慢收回至起点，双侧轮换。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢收回至起点，双侧轮换。",
      "aliases": [
        "Banded Fire Hydrant",
        "banded fire hydrant",
        "弹力带跪姿侧抬腿"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/banded-fire-hydrant/frame-1.svg",
          "images/exercises/workout-guide/banded-fire-hydrant/frame-2.svg",
          "images/exercises/workout-guide/banded-fire-hydrant/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/banded-fire-hydrant/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "banded-fire-hydrant",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_banded_kickback",
      "name": "弹力带站姿后踢腿",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "腘绳肌",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "训练腿向后伸展，骨盆保持朝前。",
      "steps": [
        "环带连接双踝，单手扶稳固支撑，支撑膝微屈。",
        "训练腿向后伸展，骨盆保持朝前。",
        "控制回到起点，避免靠后仰摆腿。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制回到起点，避免靠后仰摆腿。",
      "aliases": [
        "Banded Kickback",
        "banded kickback",
        "弹力带站姿后踢腿"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/banded-kickback/frame-1.svg",
          "images/exercises/workout-guide/banded-kickback/frame-2.svg",
          "images/exercises/workout-guide/banded-kickback/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/banded-kickback/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "banded-kickback",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_banded_standing_hip_abduction",
      "name": "弹力带站姿髋外展",
      "category": "glutes",
      "muscles": [
        "臀部肌群",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "一腿向外侧抬开，躯干保持直立。",
      "steps": [
        "环带置于双踝或膝上，双脚站稳，可扶固定支撑。",
        "一腿向外侧抬开，躯干保持直立。",
        "慢慢收回，支撑膝不向内扣。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "慢慢收回，支撑膝不向内扣。",
      "aliases": [
        "Banded Standing Hip Abduction",
        "banded standing hip abduction",
        "弹力带站姿髋外展"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/banded-standing-hip-abduction/frame-1.svg",
          "images/exercises/workout-guide/banded-standing-hip-abduction/frame-2.svg",
          "images/exercises/workout-guide/banded-standing-hip-abduction/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/banded-standing-hip-abduction/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "banded-standing-hip-abduction",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_banded_face_pull",
      "name": "弹力带面拉",
      "category": "back",
      "muscles": [
        "上背部",
        "三角肌后束",
        "三角肌"
      ],
      "met": 3.5,
      "desc": "双肘向外后方打开，把手拉向脸两侧。",
      "steps": [
        "将长弹力带固定在脸部高度的可靠锚点，双手握稳。",
        "双肘向外后方打开，把手拉向脸两侧。",
        "受控伸臂返回，先检查固定点与弹力带。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "受控伸臂返回，先检查固定点与弹力带。",
      "aliases": [
        "Banded Face Pull",
        "banded face pull",
        "弹力带面拉"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/banded-face-pull/frame-1.svg",
          "images/exercises/workout-guide/banded-face-pull/frame-2.svg",
          "images/exercises/workout-guide/banded-face-pull/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/banded-face-pull/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "banded-face-pull",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_banded_row",
      "name": "弹力带划船",
      "category": "back",
      "muscles": [
        "背部肌群",
        "肱二头肌",
        "上背部"
      ],
      "met": 3.5,
      "desc": "肩胛稳定，屈肘将双手拉向腰侧。",
      "steps": [
        "将弹力带固定在可靠锚点，双脚站稳，双手握带。",
        "肩胛稳定，屈肘将双手拉向腰侧。",
        "缓慢伸臂返回，躯干不前后甩动。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢伸臂返回，躯干不前后甩动。",
      "aliases": [
        "Banded Row",
        "banded row",
        "弹力带划船"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/banded-row/frame-1.svg",
          "images/exercises/workout-guide/banded-row/frame-2.svg",
          "images/exercises/workout-guide/banded-row/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/banded-row/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "banded-row",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_banded_lat_pulldown",
      "name": "弹力带高位下拉",
      "category": "back",
      "muscles": [
        "背阔肌",
        "肱二头肌",
        "核心肌群"
      ],
      "met": 3.5,
      "desc": "肩胛下沉，双肘向下拉向体侧。",
      "steps": [
        "将弹力带固定于可靠高位锚点，坐姿或跪姿握稳两端。",
        "肩胛下沉，双肘向下拉向体侧。",
        "控制伸臂，不用后仰代替下拉。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "控制伸臂，不用后仰代替下拉。",
      "aliases": [
        "Banded Lat Pulldown",
        "banded lat pulldown",
        "弹力带高位下拉"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps",
        "core"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/banded-lat-pulldown/frame-1.svg",
          "images/exercises/workout-guide/banded-lat-pulldown/frame-2.svg",
          "images/exercises/workout-guide/banded-lat-pulldown/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/banded-lat-pulldown/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "banded-lat-pulldown",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_banded_pallof_press",
      "name": "弹力带抗旋转推",
      "category": "core",
      "muscles": [
        "核心肌群",
        "臀部肌群",
        "三角肌"
      ],
      "met": 3.5,
      "desc": "保持肩髋朝前，将双手向前推出。",
      "steps": [
        "侧对胸高锚点站稳，双手握带放胸前。",
        "保持肩髋朝前，将双手向前推出。",
        "缓慢收回胸前，再换另一侧朝向锚点。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢收回胸前，再换另一侧朝向锚点。",
      "aliases": [
        "Banded Pallof Press",
        "banded pallof press",
        "弹力带抗旋转推"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/banded-pallof-press/frame-1.svg",
          "images/exercises/workout-guide/banded-pallof-press/frame-2.svg",
          "images/exercises/workout-guide/banded-pallof-press/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/banded-pallof-press/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "banded-pallof-press",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_banded_woodchop",
      "name": "弹力带伐木",
      "category": "core",
      "muscles": [
        "核心肌群",
        "三角肌",
        "臀部肌群"
      ],
      "met": 3.5,
      "desc": "肩髋协调转动，将双手沿斜线带向另一侧。",
      "steps": [
        "将弹力带固定在侧方可靠锚点，双脚站稳、双手握带。",
        "肩髋协调转动，将双手沿斜线带向另一侧。",
        "受控回到起点，不只用腰部强扭。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "受控回到起点，不只用腰部强扭。",
      "aliases": [
        "Banded Woodchop",
        "banded woodchop",
        "弹力带伐木"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/banded-woodchop/frame-1.svg",
          "images/exercises/workout-guide/banded-woodchop/frame-2.svg",
          "images/exercises/workout-guide/banded-woodchop/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/banded-woodchop/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "banded-woodchop",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_banded_dead_bug",
      "name": "弹力带死虫式",
      "category": "core",
      "muscles": [
        "核心肌群",
        "臀部肌群",
        "三角肌"
      ],
      "met": 3.5,
      "desc": "保持腰腹稳定，缓慢伸展一条腿并维持带的张力。",
      "steps": [
        "仰卧屈髋屈膝，弹力带按示意连接手脚，先确认不会滑脱。",
        "保持腰腹稳定，缓慢伸展一条腿并维持带的张力。",
        "收回后换腿，腰部拱起时缩小幅度。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "收回后换腿，腰部拱起时缩小幅度。",
      "aliases": [
        "Banded Dead Bug",
        "banded dead bug",
        "弹力带死虫式"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/banded-dead-bug/frame-1.svg",
          "images/exercises/workout-guide/banded-dead-bug/frame-2.svg",
          "images/exercises/workout-guide/banded-dead-bug/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/banded-dead-bug/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "banded-dead-bug",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02054",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_hollow_rock",
      "name": "中空摇摆",
      "category": "core",
      "muscles": [
        "核心肌群",
        "股四头肌"
      ],
      "met": 3.0,
      "desc": "保持身体弧形与腰腹控制，作小幅前后摇动。",
      "steps": [
        "仰卧，收紧腹部，让肩胛与双脚轻离地面。",
        "保持身体弧形与腰腹控制，作小幅前后摇动。",
        "主动停止回到仰卧，不靠甩臂或腰椎反弓。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "主动停止回到仰卧，不靠甩臂或腰椎反弓。",
      "aliases": [
        "Hollow Rock",
        "hollow rock",
        "中空摇摆"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/hollow-rock/frame-1.svg",
          "images/exercises/workout-guide/hollow-rock/frame-2.svg",
          "images/exercises/workout-guide/hollow-rock/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/hollow-rock/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "hollow-rock",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_v_up",
      "name": "V字两头起",
      "category": "core",
      "muscles": [
        "核心肌群",
        "股四头肌"
      ],
      "met": 3.0,
      "desc": "腹部发力抬起躯干与双腿，让双手靠近脚部。",
      "steps": [
        "仰卧伸腿，双臂向头顶方向伸展。",
        "腹部发力抬起躯干与双腿，让双手靠近脚部。",
        "缓慢展开返回，先练屈膝版本再增加难度。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢展开返回，先练屈膝版本再增加难度。",
      "aliases": [
        "V-Up",
        "v up",
        "V字两头起"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/v-up/frame-1.svg",
          "images/exercises/workout-guide/v-up/frame-2.svg",
          "images/exercises/workout-guide/v-up/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/v-up/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "v-up",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_flutter_kick",
      "name": "仰卧交替打腿",
      "category": "core",
      "muscles": [
        "核心肌群",
        "股四头肌"
      ],
      "met": null,
      "desc": "双腿交替小幅上下摆动，保持腰腹稳定。",
      "steps": [
        "仰卧，腹部收紧，双腿轻离地面，可双臂扶地。",
        "双腿交替小幅上下摆动，保持腰腹稳定。",
        "腰部拱起时抬高腿或屈膝，按可控时间练习。"
      ],
      "mistakes": [
        "耸肩、塌腰或憋气，无法维持目标支撑姿势。"
      ],
      "tips": "腰部拱起时抬高腿或屈膝，按可控时间练习。",
      "aliases": [
        "Flutter Kick",
        "flutter kick",
        "仰卧交替打腿"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "支撑",
      "laterality": "双侧",
      "tags": [
        "core",
        "quads"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/flutter-kick/frame-1.svg",
          "images/exercises/workout-guide/flutter-kick/frame-2.svg",
          "images/exercises/workout-guide/flutter-kick/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/flutter-kick/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "flutter-kick"
    },
    {
      "id": "wg_toe_touch",
      "name": "站姿体前屈触脚",
      "category": "mobility",
      "muscles": [
        "核心肌群"
      ],
      "met": null,
      "desc": "从髋部缓慢前折，让双手朝脚部接近，不强求触地。",
      "steps": [
        "双脚站稳，膝盖不锁死，双臂自然下垂。",
        "从髋部缓慢前折，让双手朝脚部接近，不强求触地。",
        "受控站起，不靠弹震或猛甩躯干增加幅度。"
      ],
      "mistakes": [
        "憋气、弹震，或强行压到超出舒适牵伸的幅度。"
      ],
      "tips": "受控站起，不靠弹震或猛甩躯干增加幅度。",
      "aliases": [
        "Toe Touch",
        "toe touch",
        "站姿体前屈触脚"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "beginner",
      "movementPattern": "支撑",
      "laterality": "双侧",
      "tags": [
        "core",
        "mobility"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/toe-touch/frame-1.svg",
          "images/exercises/workout-guide/toe-touch/frame-2.svg",
          "images/exercises/workout-guide/toe-touch/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/toe-touch/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "toe-touch"
    },
    {
      "id": "wg_plank_jack",
      "name": "高平板开合跳",
      "category": "cardio",
      "muscles": [
        "核心肌群",
        "三角肌"
      ],
      "met": null,
      "desc": "双脚小幅向两侧跳开，再跳回靠近位置。",
      "steps": [
        "进入高平板，双手在肩下，躯干保持直线。",
        "双脚小幅向两侧跳开，再跳回靠近位置。",
        "轻落地并保持骨盆稳定，必要时改成单脚侧迈。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "轻落地并保持骨盆稳定，必要时改成单脚侧迈。",
      "aliases": [
        "Plank Jack",
        "plank jack",
        "高平板开合跳"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "cardio",
        "core",
        "shoulders"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/plank-jack/frame-1.svg",
          "images/exercises/workout-guide/plank-jack/frame-2.svg",
          "images/exercises/workout-guide/plank-jack/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/plank-jack/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "plank-jack"
    },
    {
      "id": "wg_bear_plank",
      "name": "熊式悬膝支撑",
      "category": "core",
      "muscles": [
        "核心肌群",
        "股四头肌",
        "三角肌"
      ],
      "met": null,
      "desc": "双膝轻离地面，背部保持稳定，均匀呼吸。",
      "steps": [
        "四点跪姿，双手位于肩下，脚尖踩地。",
        "双膝轻离地面，背部保持稳定，均匀呼吸。",
        "双膝放回地垫休息，避免抬臀变成高平板。"
      ],
      "mistakes": [
        "耸肩、塌腰或憋气，无法维持目标支撑姿势。"
      ],
      "tips": "双膝放回地垫休息，避免抬臀变成高平板。",
      "aliases": [
        "Bear Plank",
        "bear plank",
        "熊式悬膝支撑"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "支撑",
      "laterality": "双侧",
      "tags": [
        "core",
        "quads",
        "shoulders"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/bear-plank/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/bear-plank/",
        "license": "CC BY-SA 4.0",
        "note": "保留与本动作对应的单张姿势图"
      },
      "catalogSlug": "bear-plank"
    },
    {
      "id": "wg_crab_walk",
      "name": "螃蟹爬",
      "category": "triceps",
      "muscles": [
        "肱三头肌",
        "臀部肌群",
        "核心肌群",
        "三角肌"
      ],
      "met": null,
      "desc": "抬髋后手脚交替小步移动，肩部不耸起。",
      "steps": [
        "坐姿屈膝，双手放身后舒适位置，双脚踩稳。",
        "抬髋后手脚交替小步移动，肩部不耸起。",
        "受控落髋休息，手腕不适时停止或改动作。"
      ],
      "mistakes": [
        "耸肩、塌腰或憋气，无法维持目标支撑姿势。"
      ],
      "tips": "受控落髋休息，手腕不适时停止或改动作。",
      "aliases": [
        "Crab Walk",
        "crab walk",
        "螃蟹爬"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "支撑",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/crab-walk/frame-1.svg",
          "images/exercises/workout-guide/crab-walk/frame-2.svg",
          "images/exercises/workout-guide/crab-walk/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/crab-walk/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "crab-walk"
    },
    {
      "id": "wg_inchworm",
      "name": "毛毛虫爬",
      "category": "core",
      "muscles": [
        "核心肌群",
        "三角肌",
        "腘绳肌",
        "胸大肌"
      ],
      "met": 3.0,
      "desc": "双手逐步向前走至高平板，保持腰腹稳定。",
      "steps": [
        "双脚站稳，从髋部前折，双手落地，膝可微屈。",
        "双手逐步向前走至高平板，保持腰腹稳定。",
        "双手小步走回脚边后站起，动作缓慢可控。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "双手小步走回脚边后站起，动作缓慢可控。",
      "aliases": [
        "Inchworm",
        "inchworm",
        "毛毛虫爬"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "chest",
        "core",
        "hamstrings",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/inchworm/frame-1.svg",
          "images/exercises/workout-guide/inchworm/frame-2.svg",
          "images/exercises/workout-guide/inchworm/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/inchworm/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "inchworm",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_l_sit_hold",
      "name": "双杠L型支撑",
      "category": "core",
      "muscles": [
        "核心肌群",
        "肱三头肌",
        "股四头肌",
        "三角肌"
      ],
      "met": null,
      "desc": "抬腿至前方接近水平，保持腹部张力。",
      "steps": [
        "握稳双杠或平行把手，双肩下沉，伸肘撑起。",
        "抬腿至前方接近水平，保持腹部张力。",
        "双脚受控落回支撑，先从屈膝支撑开始。"
      ],
      "mistakes": [
        "耸肩、塌腰或憋气，无法维持目标支撑姿势。"
      ],
      "tips": "双脚受控落回支撑，先从屈膝支撑开始。",
      "aliases": [
        "L-Sit Hold",
        "l sit hold",
        "双杠L型支撑"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "advanced",
      "movementPattern": "支撑",
      "laterality": "双侧",
      "tags": [
        "core",
        "quads",
        "shoulders",
        "triceps"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/l-sit-hold/frame-1.svg",
          "images/exercises/workout-guide/l-sit-hold/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/l-sit-hold/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "l-sit-hold"
    },
    {
      "id": "wg_seated_knee_tuck",
      "name": "支撑收膝",
      "category": "core",
      "muscles": [
        "核心肌群",
        "股四头肌"
      ],
      "met": 3.0,
      "desc": "腹部发力屈膝收向胸前，肩部持续主动支撑。",
      "steps": [
        "双手握稳平行支撑，身体撑起，双腿前伸或自然下垂。",
        "腹部发力屈膝收向胸前，肩部持续主动支撑。",
        "缓慢伸腿，避免身体来回摆荡。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "缓慢伸腿，避免身体来回摆荡。",
      "aliases": [
        "Seated Knee Tuck",
        "seated knee tuck",
        "支撑收膝"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/seated-knee-tuck/frame-1.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/seated-knee-tuck/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 1 张姿势参考"
      },
      "catalogSlug": "seated-knee-tuck",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_side_plank_hip_dip",
      "name": "侧平板落髋抬起",
      "category": "core",
      "muscles": [
        "核心肌群",
        "三角肌",
        "臀部肌群"
      ],
      "met": 3.0,
      "desc": "控制髋部小幅接近地面，再用侧腹抬起。",
      "steps": [
        "前臂撑地，身体侧向排列，双脚前后或上下叠放。",
        "控制髋部小幅接近地面，再用侧腹抬起。",
        "回到肩髋踝接近一线的位置，不用肩部耸起代偿。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "回到肩髋踝接近一线的位置，不用肩部耸起代偿。",
      "aliases": [
        "Side Plank Hip Dip",
        "side plank hip dip",
        "侧平板落髋抬起"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "shoulders"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/side-plank-hip-dip/frame-1.svg",
          "images/exercises/workout-guide/side-plank-hip-dip/frame-2.svg",
          "images/exercises/workout-guide/side-plank-hip-dip/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/side-plank-hip-dip/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "side-plank-hip-dip",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_dragon_flag",
      "name": "龙旗",
      "category": "core",
      "muscles": [
        "核心肌群",
        "背阔肌",
        "股四头肌"
      ],
      "met": 3.0,
      "desc": "以肩胛附近作支撑，保持躯干稳定并缓慢降低双腿。",
      "steps": [
        "仰卧稳固凳，双手握住头后固定支撑，先练屈膝变式。",
        "以肩胛附近作支撑，保持躯干稳定并缓慢降低双腿。",
        "受控回收，不让颈部承重；需要充分核心力量基础。"
      ],
      "mistakes": [
        "用躯干摆动或惯性甩动代替目标关节发力。",
        "为增加次数而失去器械、身体或落地控制。"
      ],
      "tips": "受控回收，不让颈部承重；需要充分核心力量基础。",
      "aliases": [
        "Dragon Flag",
        "dragon flag",
        "龙旗"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "advanced",
      "movementPattern": "力量",
      "laterality": "双侧",
      "tags": [
        "back",
        "core",
        "quads"
      ],
      "recordingMode": "strength",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/dragon-flag/frame-1.svg",
          "images/exercises/workout-guide/dragon-flag/frame-2.svg",
          "images/exercises/workout-guide/dragon-flag/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/dragon-flag/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "dragon-flag",
      "metSource": {
        "url": "https://pacompendium.com/conditioning-exercise/",
        "code": "02056",
        "basis": "训练类别估算，并非该动作实测值"
      }
    },
    {
      "id": "wg_half_burpee",
      "name": "半波比跳",
      "category": "cardio",
      "muscles": [
        "核心肌群",
        "下肢肌群",
        "三角肌"
      ],
      "met": null,
      "desc": "双脚向后移至高平板，再收回到手旁。",
      "steps": [
        "从站姿屈髋屈膝，双手落到脚前地面。",
        "双脚向后移至高平板，再收回到手旁。",
        "站起完成，不包含俯卧撑与腾空跳跃。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "站起完成，不包含俯卧撑与腾空跳跃。",
      "aliases": [
        "Half Burpee",
        "half burpee",
        "半波比跳"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "cardio",
        "core",
        "legs",
        "shoulders"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/half-burpee/frame-1.svg",
          "images/exercises/workout-guide/half-burpee/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/half-burpee/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "half-burpee"
    },
    {
      "id": "wg_squat_thrust",
      "name": "蹲撑跳",
      "category": "cardio",
      "muscles": [
        "核心肌群",
        "下肢肌群",
        "三角肌"
      ],
      "met": null,
      "desc": "双脚同时后跳至高平板，再收回蹲姿。",
      "steps": [
        "下蹲后双手撑地，双脚准备向后移动。",
        "双脚同时后跳至高平板，再收回蹲姿。",
        "站稳后重复，可改成双脚交替后迈降低难度。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "站稳后重复，可改成双脚交替后迈降低难度。",
      "aliases": [
        "Squat Thrust",
        "squat thrust",
        "蹲撑跳"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "cardio",
        "core",
        "legs",
        "shoulders"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/squat-thrust/frame-1.svg",
          "images/exercises/workout-guide/squat-thrust/frame-2.svg",
          "images/exercises/workout-guide/squat-thrust/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/squat-thrust/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "squat-thrust"
    },
    {
      "id": "wg_high_knees",
      "name": "原地高抬腿",
      "category": "cardio",
      "muscles": [
        "下肢肌群",
        "核心肌群"
      ],
      "met": null,
      "desc": "左右交替抬膝，脚步轻快，躯干保持直立。",
      "steps": [
        "站稳并预留空间，双臂自然屈肘。",
        "左右交替抬膝，脚步轻快，躯干保持直立。",
        "逐渐降低节奏，避免只追求抬高而后仰。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "逐渐降低节奏，避免只追求抬高而后仰。",
      "aliases": [
        "High Knees",
        "high knees",
        "原地高抬腿"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "cardio",
        "core",
        "legs"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/high-knees/frame-1.svg",
          "images/exercises/workout-guide/high-knees/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/high-knees/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "high-knees"
    },
    {
      "id": "wg_jumping_jack",
      "name": "开合跳",
      "category": "cardio",
      "muscles": [
        "下肢肌群",
        "三角肌",
        "小腿肌群"
      ],
      "met": null,
      "desc": "双脚向两侧跳开，同时双臂向头顶举起。",
      "steps": [
        "双脚并拢站立，双臂放体侧。",
        "双脚向两侧跳开，同时双臂向头顶举起。",
        "双脚跳回并放下双臂，轻落地；可改交替侧迈。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "双脚跳回并放下双臂，轻落地；可改交替侧迈。",
      "aliases": [
        "Jumping Jack",
        "jumping jack",
        "开合跳"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "calves",
        "cardio",
        "legs",
        "shoulders"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/jumping-jack/frame-1.svg",
          "images/exercises/workout-guide/jumping-jack/frame-2.svg",
          "images/exercises/workout-guide/jumping-jack/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/jumping-jack/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "jumping-jack"
    },
    {
      "id": "wg_skater_hop",
      "name": "滑冰式侧跳",
      "category": "cardio",
      "muscles": [
        "下肢肌群",
        "臀部肌群",
        "小腿肌群"
      ],
      "met": null,
      "desc": "向侧方蹬跳，用另一脚柔和落地，后腿自然向后交叉平衡。",
      "steps": [
        "单脚微屈站稳，向侧面预留空间。",
        "向侧方蹬跳，用另一脚柔和落地，后腿自然向后交叉平衡。",
        "先站稳再跳回，避免膝盖内扣。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "先站稳再跳回，避免膝盖内扣。",
      "aliases": [
        "Skater Hop",
        "skater hop",
        "滑冰式侧跳"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "单侧",
      "tags": [
        "calves",
        "cardio",
        "glutes",
        "legs"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/skater-hop/frame-1.svg",
          "images/exercises/workout-guide/skater-hop/frame-2.svg",
          "images/exercises/workout-guide/skater-hop/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/skater-hop/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "skater-hop"
    },
    {
      "id": "wg_lateral_shuffle",
      "name": "侧向滑步",
      "category": "cardio",
      "muscles": [
        "下肢肌群",
        "臀部肌群",
        "小腿肌群"
      ],
      "met": null,
      "desc": "向一侧小步移动，另一脚跟进，双脚不交叉。",
      "steps": [
        "双脚略宽于髋，屈髋屈膝，目视前方。",
        "向一侧小步移动，另一脚跟进，双脚不交叉。",
        "按相同姿势换方向，先慢后快。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "按相同姿势换方向，先慢后快。",
      "aliases": [
        "Lateral Shuffle",
        "lateral shuffle",
        "侧向滑步"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "calves",
        "cardio",
        "glutes",
        "legs"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/lateral-shuffle/frame-1.svg",
          "images/exercises/workout-guide/lateral-shuffle/frame-2.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/lateral-shuffle/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 2 张姿势参考，可暂停或逐张查看"
      },
      "catalogSlug": "lateral-shuffle"
    },
    {
      "id": "wg_fast_feet",
      "name": "敏捷梯快速小步",
      "category": "cardio",
      "muscles": [
        "小腿肌群",
        "下肢肌群"
      ],
      "met": null,
      "desc": "小步交替进入梯格，保持脚步轻快与躯干稳定。",
      "steps": [
        "将敏捷梯铺平，确认地面不滑，双脚在梯前准备。",
        "小步交替进入梯格，保持脚步轻快与躯干稳定。",
        "逐步减速，不为追速度踩绊梯带。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "逐步减速，不为追速度踩绊梯带。",
      "aliases": [
        "Fast Feet",
        "fast feet",
        "敏捷梯快速小步"
      ],
      "equipment": [
        "敏捷梯"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "calves",
        "cardio",
        "legs"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/fast-feet/frame-1.svg",
          "images/exercises/workout-guide/fast-feet/frame-2.svg",
          "images/exercises/workout-guide/fast-feet/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/fast-feet/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "fast-feet"
    },
    {
      "id": "wg_sprawl",
      "name": "后撤蹲撑",
      "category": "cardio",
      "muscles": [
        "下肢肌群",
        "核心肌群",
        "三角肌"
      ],
      "met": null,
      "desc": "双脚后跳至稳定高平板，保持腹部张力。",
      "steps": [
        "站立屈髋屈膝后双手撑地。",
        "双脚后跳至稳定高平板，保持腹部张力。",
        "双脚收回到手旁再站起，不让腰部直接砸向地面。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "双脚收回到手旁再站起，不让腰部直接砸向地面。",
      "aliases": [
        "Sprawl",
        "sprawl",
        "后撤蹲撑"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "cardio",
        "core",
        "legs",
        "shoulders"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "bodyweight_reps",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/sprawl/frame-1.svg",
          "images/exercises/workout-guide/sprawl/frame-2.svg",
          "images/exercises/workout-guide/sprawl/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/sprawl/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "sprawl"
    },
    {
      "id": "wg_seal_jack",
      "name": "海豹开合跳",
      "category": "cardio",
      "muscles": [
        "胸大肌",
        "三角肌",
        "下肢肌群"
      ],
      "met": null,
      "desc": "双脚向两侧跳开，同时双臂水平展开成T形。",
      "steps": [
        "双脚并拢，双臂在胸前前伸，手掌接近。",
        "双脚向两侧跳开，同时双臂水平展开成T形。",
        "跳回并合拢双臂，轻落地，不把手臂举向头顶。"
      ],
      "mistakes": [
        "为追求速度而失去落脚、握持或躯干控制，疲劳后继续勉强动作。"
      ],
      "tips": "跳回并合拢双臂，轻落地，不把手臂举向头顶。",
      "aliases": [
        "Seal Jack",
        "seal jack",
        "海豹开合跳"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "有氧",
      "laterality": "双侧",
      "tags": [
        "cardio",
        "chest",
        "legs",
        "shoulders"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/wg_seal_jack.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      },
      "catalogSlug": "seal-jack"
    },
    {
      "id": "wg_cat_cow_stretch",
      "name": "猫牛式活动",
      "category": "mobility",
      "muscles": [
        "背部肌群",
        "核心肌群"
      ],
      "met": null,
      "desc": "配合呼吸缓慢拱背，再在舒适范围伸展胸廓与骨盆。",
      "steps": [
        "四点跪姿，双手在肩下，双膝在髋下。",
        "配合呼吸缓慢拱背，再在舒适范围伸展胸廓与骨盆。",
        "在两种姿势间平缓切换，不挤压颈腰。"
      ],
      "mistakes": [
        "憋气、弹震，或强行压到超出舒适牵伸的幅度。"
      ],
      "tips": "在两种姿势间平缓切换，不挤压颈腰。",
      "aliases": [
        "Cat-Cow Stretch",
        "cat cow stretch",
        "猫牛式活动"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "beginner",
      "movementPattern": "拉伸",
      "laterality": "双侧",
      "tags": [
        "back",
        "core",
        "mobility"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/cat-cow-stretch/frame-1.svg",
          "images/exercises/workout-guide/cat-cow-stretch/frame-2.svg",
          "images/exercises/workout-guide/cat-cow-stretch/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/cat-cow-stretch/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "cat-cow-stretch"
    },
    {
      "id": "wg_arm_circles",
      "name": "手臂绕环",
      "category": "mobility",
      "muscles": [
        "三角肌",
        "胸大肌",
        "上背部"
      ],
      "met": null,
      "desc": "双肩带动双臂作小圈，再逐步增加到可控幅度。",
      "steps": [
        "双脚站稳，双臂向侧面抬至舒适高度。",
        "双肩带动双臂作小圈，再逐步增加到可控幅度。",
        "换方向绕环，躯干不跟着甩动。"
      ],
      "mistakes": [
        "憋气、弹震，或强行压到超出舒适牵伸的幅度。"
      ],
      "tips": "换方向绕环，躯干不跟着甩动。",
      "aliases": [
        "Arm Circles",
        "arm circles",
        "手臂绕环"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "beginner",
      "movementPattern": "拉伸",
      "laterality": "双侧",
      "tags": [
        "back",
        "chest",
        "mobility",
        "shoulders"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/arm-circles/frame-1.svg",
          "images/exercises/workout-guide/arm-circles/frame-2.svg",
          "images/exercises/workout-guide/arm-circles/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/arm-circles/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "arm-circles"
    },
    {
      "id": "wg_worlds_greatest_stretch",
      "name": "弓步转体综合拉伸",
      "category": "mobility",
      "muscles": [
        "髋周肌群",
        "腘绳肌",
        "上背部"
      ],
      "met": null,
      "desc": "一只手保持支撑，胸廓朝前腿侧旋转，另一手向上展开。",
      "steps": [
        "进入长弓步，后腿伸展，双手在前脚内侧撑地。",
        "一只手保持支撑，胸廓朝前腿侧旋转，另一手向上展开。",
        "手放回地面并换侧，幅度以平稳呼吸为限。"
      ],
      "mistakes": [
        "憋气、弹震，或强行压到超出舒适牵伸的幅度。"
      ],
      "tips": "手放回地面并换侧，幅度以平稳呼吸为限。",
      "aliases": [
        "World's Greatest Stretch",
        "worlds greatest stretch",
        "弓步转体综合拉伸"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "beginner",
      "movementPattern": "拉伸",
      "laterality": "双侧",
      "tags": [
        "back",
        "hamstrings",
        "mobility"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/worlds-greatest-stretch/frame-1.svg",
          "images/exercises/workout-guide/worlds-greatest-stretch/frame-2.svg",
          "images/exercises/workout-guide/worlds-greatest-stretch/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/worlds-greatest-stretch/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "worlds-greatest-stretch"
    },
    {
      "id": "wg_leg_swings_stretch",
      "name": "扶物前后摆腿",
      "category": "mobility",
      "muscles": [
        "髋周肌群",
        "腘绳肌",
        "股四头肌"
      ],
      "met": null,
      "desc": "另一腿在舒适范围前后摆动，不靠腰部猛甩。",
      "steps": [
        "一手扶固定支撑，单脚站稳，躯干直立。",
        "另一腿在舒适范围前后摆动，不靠腰部猛甩。",
        "降低幅度后停稳，再换另一腿。"
      ],
      "mistakes": [
        "憋气、弹震，或强行压到超出舒适牵伸的幅度。"
      ],
      "tips": "降低幅度后停稳，再换另一腿。",
      "aliases": [
        "Leg Swings",
        "leg swings stretch",
        "扶物前后摆腿"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "beginner",
      "movementPattern": "拉伸",
      "laterality": "双侧",
      "tags": [
        "hamstrings",
        "mobility",
        "quads"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/leg-swings-stretch/frame-1.svg",
          "images/exercises/workout-guide/leg-swings-stretch/frame-2.svg",
          "images/exercises/workout-guide/leg-swings-stretch/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/leg-swings-stretch/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "leg-swings-stretch"
    },
    {
      "id": "wg_torso_twist_stretch",
      "name": "站姿躯干转动",
      "category": "mobility",
      "muscles": [
        "核心肌群",
        "背部肌群"
      ],
      "met": null,
      "desc": "骨盆尽量稳定，胸廓小幅向左右交替转动。",
      "steps": [
        "双脚与髋同宽，双膝微屈，双手自然放胸前。",
        "骨盆尽量稳定，胸廓小幅向左右交替转动。",
        "回到中间再换侧，不负重或强扭腰。"
      ],
      "mistakes": [
        "憋气、弹震，或强行压到超出舒适牵伸的幅度。"
      ],
      "tips": "回到中间再换侧，不负重或强扭腰。",
      "aliases": [
        "Torso Twists",
        "torso twist stretch",
        "站姿躯干转动"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "beginner",
      "movementPattern": "拉伸",
      "laterality": "双侧",
      "tags": [
        "back",
        "core",
        "mobility"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "FitFuel",
        "label": "FitFuel 补绘 · 生成式示意",
        "images": [
          "images/exercises/fitfuel/wg_torso_twist_stretch.webp"
        ],
        "tone": "native",
        "sourceUrl": "exercise-sources.html#fitfuel",
        "license": "原创补绘",
        "note": "姿势示意，配合文字阅读"
      },
      "catalogSlug": "torso-twist-stretch"
    },
    {
      "id": "wg_doorway_chest_stretch",
      "name": "门框胸部拉伸",
      "category": "mobility",
      "muscles": [
        "胸大肌",
        "三角肌"
      ],
      "met": null,
      "desc": "向前小步移重心，感受胸前轻柔牵伸。",
      "steps": [
        "站在门口，前臂轻放门框，肘部位于舒适高度。",
        "向前小步移重心，感受胸前轻柔牵伸。",
        "缓慢退回，肩前侧挤压或麻痛时停止。"
      ],
      "mistakes": [
        "憋气、弹震，或强行压到超出舒适牵伸的幅度。"
      ],
      "tips": "缓慢退回，肩前侧挤压或麻痛时停止。",
      "aliases": [
        "Doorway Chest Stretch",
        "doorway chest stretch",
        "门框胸部拉伸"
      ],
      "equipment": [
        "稳固门框"
      ],
      "difficulty": "beginner",
      "movementPattern": "拉伸",
      "laterality": "双侧",
      "tags": [
        "chest",
        "mobility",
        "shoulders"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/doorway-chest-stretch/frame-1.svg",
          "images/exercises/workout-guide/doorway-chest-stretch/frame-2.svg",
          "images/exercises/workout-guide/doorway-chest-stretch/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/doorway-chest-stretch/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "doorway-chest-stretch"
    },
    {
      "id": "wg_childs_pose",
      "name": "婴儿式伸展",
      "category": "mobility",
      "muscles": [
        "背部肌群",
        "三角肌",
        "髋周肌群"
      ],
      "met": null,
      "desc": "双手向前延伸，臀部缓慢靠近脚跟，均匀呼吸。",
      "steps": [
        "跪坐地垫，双膝分开到舒适宽度。",
        "双手向前延伸，臀部缓慢靠近脚跟，均匀呼吸。",
        "双手走回后起身，膝部不适时加垫或换姿势。"
      ],
      "mistakes": [
        "憋气、弹震，或强行压到超出舒适牵伸的幅度。"
      ],
      "tips": "双手走回后起身，膝部不适时加垫或换姿势。",
      "aliases": [
        "Child's Pose",
        "childs pose",
        "婴儿式伸展"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "beginner",
      "movementPattern": "拉伸",
      "laterality": "双侧",
      "tags": [
        "back",
        "mobility",
        "shoulders"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/childs-pose/frame-1.svg",
          "images/exercises/workout-guide/childs-pose/frame-2.svg",
          "images/exercises/workout-guide/childs-pose/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/childs-pose/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "childs-pose"
    },
    {
      "id": "wg_kneeling_hip_flexor_stretch",
      "name": "半跪髋屈肌拉伸",
      "category": "mobility",
      "muscles": [
        "髋周肌群",
        "股四头肌"
      ],
      "met": null,
      "desc": "轻收骨盆并小幅前移，感受后侧髋前方牵伸。",
      "steps": [
        "一膝跪软垫，另一脚放身前，躯干保持直立。",
        "轻收骨盆并小幅前移，感受后侧髋前方牵伸。",
        "缓慢回到中间再换侧，不靠腰部后仰增加幅度。"
      ],
      "mistakes": [
        "憋气、弹震，或强行压到超出舒适牵伸的幅度。"
      ],
      "tips": "缓慢回到中间再换侧，不靠腰部后仰增加幅度。",
      "aliases": [
        "Kneeling Hip Flexor Stretch",
        "kneeling hip flexor stretch",
        "半跪髋屈肌拉伸"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "beginner",
      "movementPattern": "拉伸",
      "laterality": "双侧",
      "tags": [
        "mobility",
        "quads"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/kneeling-hip-flexor-stretch/frame-1.svg",
          "images/exercises/workout-guide/kneeling-hip-flexor-stretch/frame-2.svg",
          "images/exercises/workout-guide/kneeling-hip-flexor-stretch/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/kneeling-hip-flexor-stretch/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "kneeling-hip-flexor-stretch"
    },
    {
      "id": "wg_hamstring_stretch",
      "name": "站姿抬腿腘绳肌拉伸",
      "category": "mobility",
      "muscles": [
        "腘绳肌",
        "小腿肌群"
      ],
      "met": null,
      "desc": "保持背部自然，从髋部向前折叠至轻柔牵伸。",
      "steps": [
        "将一只脚跟放在低而稳固的支撑上，膝微屈。",
        "保持背部自然，从髋部向前折叠至轻柔牵伸。",
        "慢慢站直再换腿，不含胸强压或弹震。"
      ],
      "mistakes": [
        "憋气、弹震，或强行压到超出舒适牵伸的幅度。"
      ],
      "tips": "慢慢站直再换腿，不含胸强压或弹震。",
      "aliases": [
        "Hamstring Stretch",
        "hamstring stretch",
        "站姿抬腿腘绳肌拉伸"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "beginner",
      "movementPattern": "拉伸",
      "laterality": "双侧",
      "tags": [
        "calves",
        "hamstrings",
        "mobility"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/hamstring-stretch/frame-1.svg",
          "images/exercises/workout-guide/hamstring-stretch/frame-2.svg",
          "images/exercises/workout-guide/hamstring-stretch/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/hamstring-stretch/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "hamstring-stretch"
    },
    {
      "id": "wg_standing_quad_stretch",
      "name": "站姿股四头肌拉伸",
      "category": "mobility",
      "muscles": [
        "股四头肌",
        "髋周肌群"
      ],
      "met": null,
      "desc": "膝盖朝下、骨盆稳定，将脚跟轻靠近臀部。",
      "steps": [
        "单手扶固定支撑，另一手握住同侧脚踝。",
        "膝盖朝下、骨盆稳定，将脚跟轻靠近臀部。",
        "缓慢放下脚并换侧，不强拉脚踝或向外扭膝。"
      ],
      "mistakes": [
        "憋气、弹震，或强行压到超出舒适牵伸的幅度。"
      ],
      "tips": "缓慢放下脚并换侧，不强拉脚踝或向外扭膝。",
      "aliases": [
        "Standing Quad Stretch",
        "standing quad stretch",
        "站姿股四头肌拉伸"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "beginner",
      "movementPattern": "拉伸",
      "laterality": "双侧",
      "tags": [
        "mobility",
        "quads"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/standing-quad-stretch/frame-1.svg",
          "images/exercises/workout-guide/standing-quad-stretch/frame-2.svg",
          "images/exercises/workout-guide/standing-quad-stretch/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/standing-quad-stretch/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "standing-quad-stretch"
    },
    {
      "id": "wg_seated_forward_fold_stretch",
      "name": "坐姿前屈伸展",
      "category": "mobility",
      "muscles": [
        "腘绳肌",
        "背部肌群",
        "小腿肌群"
      ],
      "met": null,
      "desc": "从髋部慢慢向前折叠，双手沿小腿方向前伸。",
      "steps": [
        "坐在地垫，双腿前伸，膝盖可微屈。",
        "从髋部慢慢向前折叠，双手沿小腿方向前伸。",
        "在舒适牵伸处保持呼吸，再缓慢坐直。"
      ],
      "mistakes": [
        "憋气、弹震，或强行压到超出舒适牵伸的幅度。"
      ],
      "tips": "在舒适牵伸处保持呼吸，再缓慢坐直。",
      "aliases": [
        "Seated Forward Fold",
        "seated forward fold stretch",
        "坐姿前屈伸展"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "beginner",
      "movementPattern": "拉伸",
      "laterality": "双侧",
      "tags": [
        "back",
        "calves",
        "hamstrings",
        "mobility"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/seated-forward-fold-stretch/frame-1.svg",
          "images/exercises/workout-guide/seated-forward-fold-stretch/frame-2.svg",
          "images/exercises/workout-guide/seated-forward-fold-stretch/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/seated-forward-fold-stretch/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "seated-forward-fold-stretch"
    },
    {
      "id": "wg_cross_body_shoulder_stretch",
      "name": "横跨胸前肩部拉伸",
      "category": "mobility",
      "muscles": [
        "三角肌",
        "上背部"
      ],
      "met": null,
      "desc": "另一手轻托上臂，将其向胸前靠近，肩膀下沉。",
      "steps": [
        "站姿或坐姿，一臂横放胸前。",
        "另一手轻托上臂，将其向胸前靠近，肩膀下沉。",
        "缓慢松开再换侧，不直接压迫肘关节。"
      ],
      "mistakes": [
        "憋气、弹震，或强行压到超出舒适牵伸的幅度。"
      ],
      "tips": "缓慢松开再换侧，不直接压迫肘关节。",
      "aliases": [
        "Cross-Body Shoulder Stretch",
        "cross body shoulder stretch",
        "横跨胸前肩部拉伸"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "beginner",
      "movementPattern": "拉伸",
      "laterality": "双侧",
      "tags": [
        "back",
        "mobility",
        "shoulders"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/cross-body-shoulder-stretch/frame-1.svg",
          "images/exercises/workout-guide/cross-body-shoulder-stretch/frame-2.svg",
          "images/exercises/workout-guide/cross-body-shoulder-stretch/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/cross-body-shoulder-stretch/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "cross-body-shoulder-stretch"
    },
    {
      "id": "wg_wall_calf_stretch",
      "name": "扶墙小腿拉伸",
      "category": "mobility",
      "muscles": [
        "小腿肌群"
      ],
      "met": null,
      "desc": "后腿保持较直、后脚跟踩地，身体整体轻向前移。",
      "steps": [
        "双手扶墙，前后分腿，后脚脚尖朝前。",
        "后腿保持较直、后脚跟踩地，身体整体轻向前移。",
        "慢慢退回再换侧，避免后脚外翻。"
      ],
      "mistakes": [
        "憋气、弹震，或强行压到超出舒适牵伸的幅度。"
      ],
      "tips": "慢慢退回再换侧，避免后脚外翻。",
      "aliases": [
        "Wall Calf Stretch",
        "wall calf stretch",
        "扶墙小腿拉伸"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "beginner",
      "movementPattern": "拉伸",
      "laterality": "双侧",
      "tags": [
        "calves",
        "mobility"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/wall-calf-stretch/frame-1.svg",
          "images/exercises/workout-guide/wall-calf-stretch/frame-2.svg",
          "images/exercises/workout-guide/wall-calf-stretch/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/wall-calf-stretch/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "wall-calf-stretch"
    },
    {
      "id": "wg_butterfly_stretch",
      "name": "坐姿蝴蝶式拉伸",
      "category": "mobility",
      "muscles": [
        "髋周肌群",
        "大腿内侧"
      ],
      "met": null,
      "desc": "保持背部自然挺直，从髋部轻向前倾至舒适牵伸。",
      "steps": [
        "坐在地垫，脚掌相对，双膝自然向两侧打开。",
        "保持背部自然挺直，从髋部轻向前倾至舒适牵伸。",
        "平缓呼吸后坐直，不用手猛压膝盖。"
      ],
      "mistakes": [
        "憋气、弹震，或强行压到超出舒适牵伸的幅度。"
      ],
      "tips": "平缓呼吸后坐直，不用手猛压膝盖。",
      "aliases": [
        "Butterfly Stretch",
        "butterfly stretch",
        "坐姿蝴蝶式拉伸"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "beginner",
      "movementPattern": "拉伸",
      "laterality": "双侧",
      "tags": [
        "mobility"
      ],
      "recordingMode": "reference",
      "sourceExerciseType": "duration",
      "art": {
        "provider": "Workout Guide",
        "label": "Bryl Lim / Everkinetic · CC BY-SA 4.0",
        "images": [
          "images/exercises/workout-guide/butterfly-stretch/frame-1.svg",
          "images/exercises/workout-guide/butterfly-stretch/frame-2.svg",
          "images/exercises/workout-guide/butterfly-stretch/frame-3.svg"
        ],
        "tone": "native",
        "sourceUrl": "https://bryllim.github.io/workout-guide/exercises/butterfly-stretch/",
        "license": "CC BY-SA 4.0",
        "note": "同动作 3 张图示，可暂停或逐张查看"
      },
      "catalogSlug": "butterfly-stretch"
    }
  ],
  "FOODS": [
    {
      "name": "鸡胸肉",
      "cat": "肉类",
      "kcal": 133,
      "protein": 24.6,
      "fat": 2.5,
      "carb": 0.6,
      "gi": 0,
      "id": "food_51f141375478",
      "brand": "",
      "category": "肉类",
      "aliases": [
        "鸡胸",
        "chicken breast"
      ],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鸡腿肉(去皮)",
      "cat": "肉类",
      "kcal": 161,
      "protein": 19.1,
      "fat": 9,
      "carb": 0,
      "gi": 0,
      "id": "food_ec6206208889",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "牛里脊(瘦)",
      "cat": "肉类",
      "kcal": 133,
      "protein": 22.2,
      "fat": 4.6,
      "carb": 0,
      "gi": 0,
      "id": "food_4a8e7680c777",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "西冷牛排",
      "cat": "肉类",
      "kcal": 230,
      "protein": 21,
      "fat": 16,
      "carb": 0,
      "gi": 0,
      "id": "food_886a47039446",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "猪里脊",
      "cat": "肉类",
      "kcal": 155,
      "protein": 20.2,
      "fat": 7.9,
      "carb": 0,
      "gi": 0,
      "id": "food_53fc41baa135",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "三文鱼",
      "cat": "鱼虾",
      "kcal": 208,
      "protein": 20.4,
      "fat": 13.4,
      "carb": 0,
      "gi": 0,
      "id": "food_d32ca84c89cb",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鳕鱼",
      "cat": "鱼虾",
      "kcal": 82,
      "protein": 17.8,
      "fat": 0.7,
      "carb": 0,
      "gi": 0,
      "id": "food_639f562dde3f",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "虾仁",
      "cat": "鱼虾",
      "kcal": 99,
      "protein": 20.8,
      "fat": 1.1,
      "carb": 0.3,
      "gi": 0,
      "id": "food_5d8f75f8129c",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "金枪鱼罐头(水浸)",
      "cat": "鱼虾",
      "kcal": 116,
      "protein": 25.5,
      "fat": 1,
      "carb": 0,
      "gi": 0,
      "id": "food_e00f4e306ef4",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鸡蛋",
      "cat": "蛋奶",
      "kcal": 143,
      "protein": 12.6,
      "fat": 9.5,
      "carb": 0.7,
      "gi": 0,
      "id": "food_e9f5b71a472d",
      "brand": "",
      "category": "蛋奶",
      "aliases": [
        "全蛋",
        "egg"
      ],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "蛋清",
      "cat": "蛋奶",
      "kcal": 52,
      "protein": 11,
      "fat": 0.2,
      "carb": 0.7,
      "gi": 0,
      "id": "food_73d109387663",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鸭胸肉",
      "cat": "肉类",
      "kcal": 240,
      "protein": 19,
      "fat": 18,
      "carb": 0,
      "gi": 0,
      "id": "food_aa74d64412c6",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "白米饭(熟)",
      "cat": "谷物",
      "kcal": 116,
      "protein": 2.6,
      "fat": 0.3,
      "carb": 25.9,
      "gi": 83,
      "id": "food_8beb4d195473",
      "brand": "",
      "category": "谷物",
      "aliases": [
        "米饭",
        "白饭"
      ],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "糙米饭(熟)",
      "cat": "谷物",
      "kcal": 112,
      "protein": 2.6,
      "fat": 0.9,
      "carb": 23,
      "gi": 68,
      "id": "food_4cc3235c3eb9",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "燕麦片(干)",
      "cat": "谷物",
      "kcal": 389,
      "protein": 16.9,
      "fat": 6.9,
      "carb": 66.3,
      "gi": 55,
      "id": "food_22ad2ed474ec",
      "brand": "",
      "category": "谷物",
      "aliases": [
        "燕麦",
        "oats"
      ],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "全麦面包",
      "cat": "谷物",
      "kcal": 247,
      "protein": 13,
      "fat": 3.4,
      "carb": 41,
      "gi": 69,
      "id": "food_d2283ad932b8",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "意大利面(熟)",
      "cat": "谷物",
      "kcal": 158,
      "protein": 5.8,
      "fat": 0.9,
      "carb": 31,
      "gi": 49,
      "id": "food_b75416eed66d",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "红薯",
      "cat": "薯类",
      "kcal": 86,
      "protein": 1.6,
      "fat": 0.1,
      "carb": 20.1,
      "gi": 54,
      "id": "food_acf383cef376",
      "brand": "",
      "category": "薯类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "紫薯",
      "cat": "薯类",
      "kcal": 82,
      "protein": 2.3,
      "fat": 0.2,
      "carb": 18,
      "gi": 54,
      "id": "food_0dc92df77a1b",
      "brand": "",
      "category": "薯类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "玉米(鲜)",
      "cat": "谷物",
      "kcal": 96,
      "protein": 3.4,
      "fat": 1.2,
      "carb": 21,
      "gi": 55,
      "id": "food_47be451e2491",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "藜麦(熟)",
      "cat": "谷物",
      "kcal": 120,
      "protein": 4.4,
      "fat": 1.9,
      "carb": 21.3,
      "gi": 53,
      "id": "food_8dac241dc326",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "荞麦面(熟)",
      "cat": "谷物",
      "kcal": 99,
      "protein": 3.4,
      "fat": 0.7,
      "carb": 20.8,
      "gi": 59,
      "id": "food_3222e921be12",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "西兰花",
      "cat": "蔬菜",
      "kcal": 34,
      "protein": 2.8,
      "fat": 0.4,
      "carb": 7,
      "gi": 15,
      "id": "food_1fdb83f31be2",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "菠菜",
      "cat": "蔬菜",
      "kcal": 23,
      "protein": 2.9,
      "fat": 0.4,
      "carb": 3.6,
      "gi": 15,
      "id": "food_2babb323b714",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "生菜",
      "cat": "蔬菜",
      "kcal": 15,
      "protein": 1.4,
      "fat": 0.2,
      "carb": 2.9,
      "gi": 15,
      "id": "food_9a5267bf4b3a",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "番茄",
      "cat": "蔬菜",
      "kcal": 18,
      "protein": 0.9,
      "fat": 0.2,
      "carb": 3.9,
      "gi": 15,
      "id": "food_516f6a50c4a8",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "黄瓜",
      "cat": "蔬菜",
      "kcal": 15,
      "protein": 0.7,
      "fat": 0.1,
      "carb": 3.6,
      "gi": 15,
      "id": "food_e1337e15ca73",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "胡萝卜",
      "cat": "蔬菜",
      "kcal": 41,
      "protein": 0.9,
      "fat": 0.2,
      "carb": 9.6,
      "gi": 71,
      "id": "food_dd1a68cb2c35",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "白菜",
      "cat": "蔬菜",
      "kcal": 13,
      "protein": 1.5,
      "fat": 0.2,
      "carb": 2.2,
      "gi": 15,
      "id": "food_9b8bc1b61d69",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "芦笋",
      "cat": "蔬菜",
      "kcal": 20,
      "protein": 2.2,
      "fat": 0.1,
      "carb": 3.9,
      "gi": 15,
      "id": "food_46c20ccccc5a",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "彩椒",
      "cat": "蔬菜",
      "kcal": 31,
      "protein": 1,
      "fat": 0.3,
      "carb": 6,
      "gi": 15,
      "id": "food_f4a262725fed",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "口蘑",
      "cat": "蔬菜",
      "kcal": 22,
      "protein": 3.1,
      "fat": 0.3,
      "carb": 3.3,
      "gi": 15,
      "id": "food_11322f63e632",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "苹果",
      "cat": "水果",
      "kcal": 52,
      "protein": 0.3,
      "fat": 0.2,
      "carb": 13.8,
      "gi": 36,
      "id": "food_50537dab7650",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "香蕉",
      "cat": "水果",
      "kcal": 89,
      "protein": 1.1,
      "fat": 0.3,
      "carb": 22.8,
      "gi": 51,
      "id": "food_dbf9f9c94fc9",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "蓝莓",
      "cat": "水果",
      "kcal": 57,
      "protein": 0.7,
      "fat": 0.3,
      "carb": 14.5,
      "gi": 53,
      "id": "food_d23250b7c80a",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "橙子",
      "cat": "水果",
      "kcal": 47,
      "protein": 0.9,
      "fat": 0.1,
      "carb": 11.8,
      "gi": 43,
      "id": "food_c8d3209aaa4a",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "草莓",
      "cat": "水果",
      "kcal": 32,
      "protein": 0.7,
      "fat": 0.3,
      "carb": 7.7,
      "gi": 40,
      "id": "food_c76f6a79f6db",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "牛油果",
      "cat": "水果",
      "kcal": 160,
      "protein": 2,
      "fat": 14.7,
      "carb": 8.5,
      "gi": 15,
      "id": "food_09f00a522e02",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "葡萄",
      "cat": "水果",
      "kcal": 69,
      "protein": 0.7,
      "fat": 0.2,
      "carb": 18.1,
      "gi": 53,
      "id": "food_ae86f9a1daef",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "西瓜",
      "cat": "水果",
      "kcal": 30,
      "protein": 0.6,
      "fat": 0.2,
      "carb": 7.6,
      "gi": 72,
      "id": "food_3e3f03caa043",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "猕猴桃",
      "cat": "水果",
      "kcal": 61,
      "protein": 1.1,
      "fat": 0.5,
      "carb": 14.7,
      "gi": 52,
      "id": "food_6743bd96fb2d",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "全脂牛奶",
      "cat": "蛋奶",
      "kcal": 64,
      "protein": 3.3,
      "fat": 3.6,
      "carb": 4.8,
      "gi": 27,
      "id": "food_0a9259268d75",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "脱脂牛奶",
      "cat": "蛋奶",
      "kcal": 34,
      "protein": 3.4,
      "fat": 0.2,
      "carb": 5,
      "gi": 32,
      "id": "food_92f52a38180c",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "希腊酸奶(无糖)",
      "cat": "蛋奶",
      "kcal": 59,
      "protein": 10,
      "fat": 0.4,
      "carb": 3.6,
      "gi": 35,
      "id": "food_1a301a46a880",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "普通酸奶",
      "cat": "蛋奶",
      "kcal": 72,
      "protein": 3.5,
      "fat": 2.7,
      "carb": 8.6,
      "gi": 33,
      "id": "food_3d4c41f4bf60",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "切达奶酪",
      "cat": "蛋奶",
      "kcal": 403,
      "protein": 25,
      "fat": 33,
      "carb": 1.3,
      "gi": 0,
      "id": "food_dd6a0c5de947",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "乳清蛋白粉",
      "cat": "蛋奶",
      "kcal": 380,
      "protein": 80,
      "fat": 5,
      "carb": 8,
      "gi": 0,
      "id": "food_30622a52916e",
      "brand": "",
      "category": "蛋奶",
      "aliases": [
        "蛋白粉",
        "whey protein"
      ],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "黄豆(干)",
      "cat": "豆类",
      "kcal": 359,
      "protein": 35,
      "fat": 16,
      "carb": 34,
      "gi": 18,
      "id": "food_5d9892a8f53c",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "黑豆(熟)",
      "cat": "豆类",
      "kcal": 132,
      "protein": 8.9,
      "fat": 0.5,
      "carb": 23.7,
      "gi": 30,
      "id": "food_ecad2f1b84cd",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "北豆腐",
      "cat": "豆类",
      "kcal": 116,
      "protein": 12.2,
      "fat": 6.9,
      "carb": 2.6,
      "gi": 15,
      "id": "food_5847041be96e",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "无糖豆浆",
      "cat": "豆类",
      "kcal": 31,
      "protein": 3,
      "fat": 1.6,
      "carb": 1.2,
      "gi": 34,
      "id": "food_9fc2445d1607",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鹰嘴豆(熟)",
      "cat": "豆类",
      "kcal": 164,
      "protein": 8.9,
      "fat": 2.6,
      "carb": 27.4,
      "gi": 28,
      "id": "food_dc2e1c068df4",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "红豆(熟)",
      "cat": "豆类",
      "kcal": 127,
      "protein": 7.5,
      "fat": 0.5,
      "carb": 22,
      "gi": 26,
      "id": "food_48048a2f77c2",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "杏仁",
      "cat": "坚果",
      "kcal": 579,
      "protein": 21.2,
      "fat": 49.9,
      "carb": 21.6,
      "gi": 15,
      "id": "food_423d45adea4b",
      "brand": "",
      "category": "坚果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "核桃",
      "cat": "坚果",
      "kcal": 654,
      "protein": 15.2,
      "fat": 65.2,
      "carb": 13.7,
      "gi": 15,
      "id": "food_c7a897444f3d",
      "brand": "",
      "category": "坚果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "花生",
      "cat": "坚果",
      "kcal": 567,
      "protein": 25.8,
      "fat": 49.2,
      "carb": 16.1,
      "gi": 14,
      "id": "food_7739ff2ac7a8",
      "brand": "",
      "category": "坚果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "腰果",
      "cat": "坚果",
      "kcal": 553,
      "protein": 18.2,
      "fat": 43.9,
      "carb": 30.2,
      "gi": 22,
      "id": "food_29ffcbc62ecb",
      "brand": "",
      "category": "坚果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "橄榄油",
      "cat": "油脂",
      "kcal": 884,
      "protein": 0,
      "fat": 100,
      "carb": 0,
      "gi": 0,
      "id": "food_69fb53686970",
      "brand": "",
      "category": "油脂",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "花生酱",
      "cat": "坚果",
      "kcal": 588,
      "protein": 25,
      "fat": 50,
      "carb": 20,
      "gi": 14,
      "id": "food_0265340a04a1",
      "brand": "",
      "category": "坚果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "火鸡胸肉",
      "cat": "肉类",
      "kcal": 114,
      "protein": 23.7,
      "fat": 1.5,
      "carb": 0,
      "gi": null,
      "id": "food_ea96c272031c",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "瘦牛肉",
      "cat": "肉类",
      "kcal": 125,
      "protein": 20.2,
      "fat": 4.2,
      "carb": 0,
      "gi": null,
      "id": "food_bb53090ec0a3",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "瘦羊肉",
      "cat": "肉类",
      "kcal": 143,
      "protein": 20.6,
      "fat": 6.5,
      "carb": 0,
      "gi": null,
      "id": "food_9fedaf434317",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "兔肉",
      "cat": "肉类",
      "kcal": 102,
      "protein": 19.7,
      "fat": 2.2,
      "carb": 0,
      "gi": null,
      "id": "food_560299c45a86",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "猪肝",
      "cat": "肉类",
      "kcal": 129,
      "protein": 19.3,
      "fat": 3.5,
      "carb": 5,
      "gi": null,
      "id": "food_17f65ff32314",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鲈鱼",
      "cat": "鱼虾",
      "kcal": 105,
      "protein": 18.6,
      "fat": 3.4,
      "carb": 0,
      "gi": null,
      "id": "food_5653c77d3e94",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鲫鱼",
      "cat": "鱼虾",
      "kcal": 108,
      "protein": 17.1,
      "fat": 2.7,
      "carb": 3.8,
      "gi": null,
      "id": "food_661c6c319c24",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "带鱼",
      "cat": "鱼虾",
      "kcal": 127,
      "protein": 17.7,
      "fat": 4.9,
      "carb": 3.1,
      "gi": null,
      "id": "food_aedf436d605c",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鲭鱼",
      "cat": "鱼虾",
      "kcal": 205,
      "protein": 18.6,
      "fat": 13.9,
      "carb": 0,
      "gi": null,
      "id": "food_6f92c09b1a32",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "扇贝",
      "cat": "鱼虾",
      "kcal": 69,
      "protein": 12.1,
      "fat": 0.6,
      "carb": 3.2,
      "gi": null,
      "id": "food_00e049869898",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "蛤蜊",
      "cat": "鱼虾",
      "kcal": 62,
      "protein": 10.1,
      "fat": 1.1,
      "carb": 2.8,
      "gi": null,
      "id": "food_195f7932237e",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鱿鱼",
      "cat": "鱼虾",
      "kcal": 92,
      "protein": 15.6,
      "fat": 1.4,
      "carb": 3.1,
      "gi": null,
      "id": "food_6e80048a5ad8",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鹌鹑蛋",
      "cat": "蛋奶",
      "kcal": 158,
      "protein": 13.1,
      "fat": 11.1,
      "carb": 0.4,
      "gi": null,
      "id": "food_999a17e34b6e",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "低脂牛奶",
      "cat": "蛋奶",
      "kcal": 46,
      "protein": 3.4,
      "fat": 1.5,
      "carb": 4.9,
      "gi": null,
      "id": "food_7c2a1ad2910b",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "无糖酸奶",
      "cat": "蛋奶",
      "kcal": 63,
      "protein": 5.3,
      "fat": 1.6,
      "carb": 7,
      "gi": null,
      "id": "food_eef87ca850cf",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "茅屋奶酪",
      "cat": "蛋奶",
      "kcal": 98,
      "protein": 11.1,
      "fat": 4.3,
      "carb": 3.4,
      "gi": null,
      "id": "food_cb22f239c5cf",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "小米粥(熟)",
      "cat": "谷物",
      "kcal": 46,
      "protein": 1.4,
      "fat": 0.7,
      "carb": 8.4,
      "gi": null,
      "id": "food_2bf4a0fd29c0",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "大米(干)",
      "cat": "谷物",
      "kcal": 346,
      "protein": 7.4,
      "fat": 0.8,
      "carb": 77.9,
      "gi": null,
      "id": "food_b8cba4467d9e",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "黑米(干)",
      "cat": "谷物",
      "kcal": 341,
      "protein": 9.4,
      "fat": 2.5,
      "carb": 72.2,
      "gi": null,
      "id": "food_459eefd52ec2",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "大麦(熟)",
      "cat": "谷物",
      "kcal": 123,
      "protein": 2.3,
      "fat": 0.4,
      "carb": 28.2,
      "gi": null,
      "id": "food_df3d75af4697",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "馒头",
      "cat": "谷物",
      "kcal": 223,
      "protein": 7,
      "fat": 1.1,
      "carb": 47,
      "gi": null,
      "id": "food_04e983910437",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "全麦意面(熟)",
      "cat": "谷物",
      "kcal": 149,
      "protein": 6,
      "fat": 1.7,
      "carb": 30.1,
      "gi": null,
      "id": "food_1de82cf3de9e",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "土豆",
      "cat": "薯类",
      "kcal": 77,
      "protein": 2,
      "fat": 0.1,
      "carb": 17.5,
      "gi": null,
      "id": "food_a64a92c86530",
      "brand": "",
      "category": "薯类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "山药",
      "cat": "薯类",
      "kcal": 56,
      "protein": 1.9,
      "fat": 0.2,
      "carb": 12.4,
      "gi": null,
      "id": "food_714304a5fe9d",
      "brand": "",
      "category": "薯类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "芋头",
      "cat": "薯类",
      "kcal": 112,
      "protein": 1.5,
      "fat": 0.2,
      "carb": 26.5,
      "gi": null,
      "id": "food_a25211ce5c81",
      "brand": "",
      "category": "薯类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "木薯",
      "cat": "薯类",
      "kcal": 160,
      "protein": 1.4,
      "fat": 0.3,
      "carb": 38.1,
      "gi": null,
      "id": "food_d639199126c2",
      "brand": "",
      "category": "薯类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "毛豆",
      "cat": "豆类",
      "kcal": 131,
      "protein": 13.1,
      "fat": 5,
      "carb": 10.5,
      "gi": null,
      "id": "food_a620962e36d0",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "绿豆(熟)",
      "cat": "豆类",
      "kcal": 105,
      "protein": 7,
      "fat": 0.4,
      "carb": 19.2,
      "gi": null,
      "id": "food_bfdb99c02724",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "扁豆(熟)",
      "cat": "豆类",
      "kcal": 116,
      "protein": 9,
      "fat": 0.4,
      "carb": 20.1,
      "gi": null,
      "id": "food_b0065b7bffb4",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "豌豆",
      "cat": "豆类",
      "kcal": 81,
      "protein": 5.4,
      "fat": 0.4,
      "carb": 14.5,
      "gi": null,
      "id": "food_3d6229ff65c6",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "豆腐干",
      "cat": "豆类",
      "kcal": 140,
      "protein": 16.2,
      "fat": 3.6,
      "carb": 11.5,
      "gi": null,
      "id": "food_90fb0af42060",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "花菜",
      "cat": "蔬菜",
      "kcal": 25,
      "protein": 1.9,
      "fat": 0.3,
      "carb": 5,
      "gi": null,
      "id": "food_467c55eef522",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "茄子",
      "cat": "蔬菜",
      "kcal": 25,
      "protein": 1,
      "fat": 0.2,
      "carb": 6,
      "gi": null,
      "id": "food_8ac7c1f48e31",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "西葫芦",
      "cat": "蔬菜",
      "kcal": 17,
      "protein": 1.2,
      "fat": 0.3,
      "carb": 3.1,
      "gi": null,
      "id": "food_e9666eb42587",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "南瓜",
      "cat": "蔬菜",
      "kcal": 26,
      "protein": 1,
      "fat": 0.1,
      "carb": 6.5,
      "gi": null,
      "id": "food_85bc0873e245",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "洋葱",
      "cat": "蔬菜",
      "kcal": 40,
      "protein": 1.1,
      "fat": 0.1,
      "carb": 9.3,
      "gi": null,
      "id": "food_edc855182ce2",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "芹菜",
      "cat": "蔬菜",
      "kcal": 16,
      "protein": 0.7,
      "fat": 0.2,
      "carb": 3,
      "gi": null,
      "id": "food_c1755c51d3a2",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "冬瓜",
      "cat": "蔬菜",
      "kcal": 13,
      "protein": 0.4,
      "fat": 0.2,
      "carb": 3,
      "gi": null,
      "id": "food_4404ea8981d2",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "莲藕",
      "cat": "蔬菜",
      "kcal": 74,
      "protein": 2.6,
      "fat": 0.1,
      "carb": 17.2,
      "gi": null,
      "id": "food_74a93f5f0f95",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "梨",
      "cat": "水果",
      "kcal": 57,
      "protein": 0.4,
      "fat": 0.1,
      "carb": 15.2,
      "gi": null,
      "id": "food_a5a79a17f934",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "桃",
      "cat": "水果",
      "kcal": 39,
      "protein": 0.9,
      "fat": 0.3,
      "carb": 9.5,
      "gi": null,
      "id": "food_8555b2922fe3",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "芒果",
      "cat": "水果",
      "kcal": 60,
      "protein": 0.8,
      "fat": 0.4,
      "carb": 15,
      "gi": null,
      "id": "food_b8246e4fd893",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "菠萝",
      "cat": "水果",
      "kcal": 50,
      "protein": 0.5,
      "fat": 0.1,
      "carb": 13.1,
      "gi": null,
      "id": "food_1e93a661562a",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "樱桃",
      "cat": "水果",
      "kcal": 63,
      "protein": 1.1,
      "fat": 0.2,
      "carb": 16,
      "gi": null,
      "id": "food_9f1aa4ba71d8",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "火龙果",
      "cat": "水果",
      "kcal": 57,
      "protein": 1.1,
      "fat": 0.2,
      "carb": 13,
      "gi": null,
      "id": "food_6c4d7161654b",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "柚子",
      "cat": "水果",
      "kcal": 38,
      "protein": 0.8,
      "fat": 0,
      "carb": 9.6,
      "gi": null,
      "id": "food_9ef8346f7304",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "开心果",
      "cat": "坚果",
      "kcal": 562,
      "protein": 20.2,
      "fat": 45.3,
      "carb": 27.2,
      "gi": null,
      "id": "food_538adc2ecfda",
      "brand": "",
      "category": "坚果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "南瓜籽",
      "cat": "坚果",
      "kcal": 559,
      "protein": 30.2,
      "fat": 49,
      "carb": 10.7,
      "gi": null,
      "id": "food_569ab93bc969",
      "brand": "",
      "category": "坚果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "奇亚籽",
      "cat": "坚果",
      "kcal": 486,
      "protein": 16.5,
      "fat": 30.7,
      "carb": 42.1,
      "gi": null,
      "id": "food_bfb80c738b56",
      "brand": "",
      "category": "坚果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "菜籽油",
      "cat": "油脂",
      "kcal": 884,
      "protein": 0,
      "fat": 100,
      "carb": 0,
      "gi": null,
      "id": "food_aa59aa8e8a7e",
      "brand": "",
      "category": "油脂",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "黑巧克力",
      "cat": "其他",
      "kcal": 598,
      "protein": 7.8,
      "fat": 42.6,
      "carb": 45.9,
      "gi": null,
      "id": "food_5bd05b5a44ec",
      "brand": "",
      "category": "其他",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    }
  ],
  "CARDIO_TYPES": [
    {
      "id": "running",
      "name": "跑步 (Running)",
      "met": {
        "low": 7,
        "moderate": 9.8,
        "high": 12.5
      }
    },
    {
      "id": "cycling",
      "name": "骑行 (Cycling)",
      "met": {
        "low": 4,
        "moderate": 7,
        "high": 10
      }
    },
    {
      "id": "swimming",
      "name": "游泳 (Swimming)",
      "met": {
        "low": 5,
        "moderate": 7,
        "high": 10
      }
    },
    {
      "id": "jump_rope",
      "name": "跳绳 (Jump Rope)",
      "met": {
        "low": 8.8,
        "moderate": 11,
        "high": 12.3
      }
    },
    {
      "id": "elliptical",
      "name": "椭圆机 (Elliptical)",
      "met": {
        "low": 4.6,
        "moderate": 6.5,
        "high": 8.5
      }
    },
    {
      "id": "rowing",
      "name": "划船机 (Rowing)",
      "met": {
        "low": 4.8,
        "moderate": 7,
        "high": 10
      }
    },
    {
      "id": "hiit",
      "name": "HIIT (高强度间歇)",
      "met": {
        "low": 6,
        "moderate": 8,
        "high": 12
      }
    },
    {
      "id": "walking",
      "name": "快走 (Brisk Walking)",
      "met": {
        "low": 3.5,
        "moderate": 4.5,
        "high": 6
      }
    },
    {
      "id": "yoga",
      "name": "瑜伽 (Yoga)",
      "met": {
        "low": 2,
        "moderate": 3,
        "high": 4.5
      }
    },
    {
      "id": "stair",
      "name": "爬楼梯 (Stair Climber)",
      "met": {
        "low": 5,
        "moderate": 8,
        "high": 11
      }
    },
    {
      "id": "boxing",
      "name": "拳击 (Boxing)",
      "met": {
        "low": 5.5,
        "moderate": 8,
        "high": 11
      }
    }
  ],
  "CARDIO_COACH": {
    "running": {
      "name": "跑步",
      "tech": "落地时脚掌中前部先着地，步频维持在170-180步/分，躯干微前倾、手臂前后摆动。",
      "err": "步幅过大导致膝盖冲击、含胸驼背、手臂左右横摆。",
      "pro": "每周跑量增幅不超过10%，配合力量训练可显著降低受伤率。"
    },
    "cycling": {
      "name": "骑行",
      "tech": "坐垫高度使踏板最低点时膝盖微屈约25-35度，踩踏保持圆形轨迹。",
      "err": "坐垫过低导致膝盖压力大、踩踏只有下压没有提拉。",
      "pro": "踏频保持80-90rpm，配合锁鞋能提升踩踏效率。"
    },
    "swimming": {
      "name": "游泳",
      "tech": "自由泳高肘抱水，身体保持流线型，换气时头部随身体转动而非单独抬颈。",
      "err": "抬头换气破坏流线、划水时手掌过度张开。",
      "pro": "先用浮板分解练习打腿与划手，再组合整套动作。"
    },
    "jump_rope": {
      "name": "跳绳",
      "tech": "手腕发力摇绳，膝盖微屈、前脚掌轻落地，绳长以脚踩绳后手柄到腋下为宜。",
      "err": "用大臂摇绳、跳得过高消耗过大、全脚掌砸地。",
      "pro": "初学者可采用30秒跳+30秒休息的间歇方式逐步提升。"
    },
    "elliptical": {
      "name": "椭圆机",
      "tech": "全程脚掌贴实踏板，躯干直立、核心收紧，推拉手柄与腿部动作同步。",
      "err": "身体前倾压在扶手上、只用腿不用手臂。",
      "pro": "增大阻力并提高踏频，比单纯延长时长更有效。"
    },
    "rowing": {
      "name": "划船机",
      "tech": "顺序为蹬腿→后仰→拉手，回程为手→身→腿，核心全程参与。",
      "err": "先拉手后蹬腿、回程顺序颠倒、弓背。",
      "pro": "把60%的力量放在蹬腿阶段，能显著提升功率。"
    },
    "hiit": {
      "name": "HIIT",
      "tech": "高强度段达到最大心率的85%-95%，低强度段降至60%-70%进行主动恢复。",
      "err": "高强度段强度不够、组间休息过长导致训练效果打折。",
      "pro": "每周HIIT不超过3次，避免与下肢大重量训练安排在同一天。"
    },
    "walking": {
      "name": "快走",
      "tech": "步幅自然加大，手臂配合摆动，速度以微微气喘但能说话为宜。",
      "err": "速度过慢达不到强度、低头看手机。",
      "pro": "可在跑步机上设置5%-8%坡度，燃脂效率明显提升。"
    },
    "yoga": {
      "name": "瑜伽",
      "tech": "呼吸与动作同步，每个体式保持5-8个呼吸，脊柱保持延展。",
      "err": "屏气发力、强行进入超出柔韧范围的体式。",
      "pro": "早晨练力量型流瑜伽，睡前练舒缓型阴瑜伽。"
    },
    "stair": {
      "name": "爬楼梯",
      "tech": "全脚掌踩实台阶，重心微前倾，手臂自然摆动或扶扶手辅助。",
      "err": "只用脚尖踩台阶、下楼梯速度过快伤膝。",
      "pro": "上楼发力、下楼坐电梯，可有效保护膝关节。"
    },
    "boxing": {
      "name": "拳击",
      "tech": "出拳时转髋送肩，收拳回到下巴与肋骨位置，全程保持移动与防守意识。",
      "err": "只用手臂出拳不转髋、出拳后不回收护头。",
      "pro": "从空击与沙袋开始，重点体会转髋发力的链条。"
    }
  },
  "PRESET_PLANS": {
    "push": [
      {
        "id": "bench_press",
        "sets": 4,
        "reps": 8,
        "weight": 60
      },
      {
        "id": "incline_dumbbell",
        "sets": 3,
        "reps": 10,
        "weight": 22
      },
      {
        "id": "dumbbell_shoulder_press",
        "sets": 4,
        "reps": 10,
        "weight": 18
      },
      {
        "id": "lateral_raise",
        "sets": 4,
        "reps": 15,
        "weight": 8
      },
      {
        "id": "tricep_pushdown",
        "sets": 4,
        "reps": 12,
        "weight": 25
      },
      {
        "id": "overhead_ext",
        "sets": 3,
        "reps": 12,
        "weight": 20
      }
    ],
    "pull": [
      {
        "id": "pullup",
        "sets": 4,
        "reps": 8,
        "weight": 0
      },
      {
        "id": "barbell_row",
        "sets": 4,
        "reps": 8,
        "weight": 55
      },
      {
        "id": "lat_pulldown",
        "sets": 3,
        "reps": 12,
        "weight": 50
      },
      {
        "id": "seated_row",
        "sets": 3,
        "reps": 12,
        "weight": 45
      },
      {
        "id": "face_pull",
        "sets": 3,
        "reps": 15,
        "weight": 20
      },
      {
        "id": "barbell_curl",
        "sets": 4,
        "reps": 10,
        "weight": 25
      },
      {
        "id": "hammer_curl",
        "sets": 3,
        "reps": 12,
        "weight": 12
      }
    ],
    "legs": [
      {
        "id": "squat",
        "sets": 5,
        "reps": 6,
        "weight": 80
      },
      {
        "id": "hack_squat",
        "sets": 4,
        "reps": 10,
        "weight": 100
      },
      {
        "id": "rdl",
        "sets": 4,
        "reps": 8,
        "weight": 70
      },
      {
        "id": "leg_press",
        "sets": 4,
        "reps": 12,
        "weight": 140
      },
      {
        "id": "leg_curl",
        "sets": 3,
        "reps": 12,
        "weight": 40
      },
      {
        "id": "hip_thrust",
        "sets": 4,
        "reps": 12,
        "weight": 60
      },
      {
        "id": "hip_adduction",
        "sets": 4,
        "reps": 15,
        "weight": 40
      },
      {
        "id": "hip_abduction",
        "sets": 4,
        "reps": 15,
        "weight": 40
      },
      {
        "id": "calf_raise",
        "sets": 4,
        "reps": 15,
        "weight": 60
      }
    ],
    "shoulders": [
      {
        "id": "ohp",
        "sets": 4,
        "reps": 8,
        "weight": 40
      },
      {
        "id": "dumbbell_shoulder_press",
        "sets": 3,
        "reps": 10,
        "weight": 18
      },
      {
        "id": "lateral_raise",
        "sets": 4,
        "reps": 15,
        "weight": 8
      },
      {
        "id": "rear_delt_fly",
        "sets": 4,
        "reps": 15,
        "weight": 8
      },
      {
        "id": "face_pull",
        "sets": 3,
        "reps": 15,
        "weight": 20
      },
      {
        "id": "shrug",
        "sets": 4,
        "reps": 12,
        "weight": 60
      }
    ],
    "fullbody": [
      {
        "id": "squat",
        "sets": 3,
        "reps": 8,
        "weight": 60
      },
      {
        "id": "bench_press",
        "sets": 3,
        "reps": 8,
        "weight": 55
      },
      {
        "id": "barbell_row",
        "sets": 3,
        "reps": 10,
        "weight": 50
      },
      {
        "id": "ohp",
        "sets": 3,
        "reps": 10,
        "weight": 35
      },
      {
        "id": "plank",
        "sets": 3,
        "reps": 60,
        "weight": 0
      },
      {
        "id": "crunch",
        "sets": 3,
        "reps": 20,
        "weight": 0
      }
    ]
  },
  "FOOD_CATEGORIES": [
    "肉类",
    "鱼虾",
    "蛋奶",
    "谷物",
    "薯类",
    "豆类",
    "蔬菜",
    "水果",
    "坚果",
    "油脂",
    "其他"
  ],
  "EXERCISE_FILTERS": [
    [
      "all",
      "全部"
    ],
    [
      "chest",
      "胸"
    ],
    [
      "back",
      "背"
    ],
    [
      "shoulders",
      "肩"
    ],
    [
      "legs",
      "腿"
    ],
    [
      "quads",
      "股四头"
    ],
    [
      "hamstrings",
      "腘绳肌"
    ],
    [
      "glutes",
      "臀"
    ],
    [
      "biceps",
      "二头"
    ],
    [
      "triceps",
      "三头"
    ],
    [
      "forearms",
      "前臂"
    ],
    [
      "core",
      "核心"
    ],
    [
      "calves",
      "小腿"
    ],
    [
      "compound",
      "复合动作"
    ],
    [
      "cardio",
      "有氧"
    ],
    [
      "mobility",
      "拉伸 / 活动度"
    ]
  ],
  "EXERCISE_CATALOG": {
    "sourceCount": 302,
    "originalCount": 184,
    "addedCount": 163,
    "totalCount": 347,
    "sources": {
      "bench-press": "bench_press",
      "dumbbell-bench-press": "dumbbell_press",
      "incline-bench-press": "incline_bench",
      "incline-dumbbell-press": "incline_dumbbell",
      "decline-bench-press": "decline_press",
      "dumbbell-fly": "dumbbell_fly",
      "push-up": "pushup",
      "chest-dip": "dips",
      "pull-up": "pullup",
      "lat-pulldown": "lat_pulldown",
      "barbell-row": "barbell_row",
      "one-arm-dumbbell-row": "dumbbell_row",
      "seated-row": "seated_row",
      "t-bar-row": "t_bar_row",
      "straight-arm-pulldown": "straight_arm_pulldown",
      "deadlift": "deadlift",
      "chin-up": "chinup",
      "overhead-press": "ohp",
      "seated-dumbbell-press": "dumbbell_shoulder_press",
      "lateral-raise": "lateral_raise",
      "front-raise": "front_raise",
      "bent-over-rear-delt-raise": "rear_delt_fly",
      "face-pull": "face_pull",
      "arnold-press": "arnold_press",
      "shrug": "shrug",
      "squat": "squat",
      "front-squat": "front_squat",
      "leg-press": "leg_press",
      "romanian-deadlift": "rdl",
      "bulgarian-split-squat": "bulgarian_split",
      "leg-extension": "leg_extension",
      "lying-leg-curl": "leg_curl",
      "hip-thrust": "hip_thrust",
      "calf-raise": "calf_raise",
      "forward-lunge": "lunge",
      "hack-squat": "hack_squat",
      "hip-adduction-machine": "hip_adduction",
      "hip-abduction-machine": "hip_abduction",
      "hammer-curl": "hammer_curl",
      "tricep-pushdown": "tricep_pushdown",
      "skull-crusher": "skull_crusher",
      "close-grip-bench-press": "close_grip_bench",
      "dumbbell-overhead-tricep-extension": "overhead_ext",
      "crunch": "crunch",
      "plank": "plank",
      "hanging-leg-raise": "hanging_leg_raise",
      "russian-twist": "russian_twist",
      "ab-wheel": "ab_wheel",
      "side-plank": "side_plank",
      "machine-chest-press": "machine_chest_press",
      "incline-cable-fly": "incline_cable_fly",
      "incline-push-up": "incline_pushup",
      "decline-push-up": "decline_pushup",
      "assisted-pull-up": "assisted_pullup",
      "single-arm-cable-row": "single_cable_row",
      "inverted-row": "inverted_row",
      "rack-pull": "rack_pull",
      "landmine-press": "landmine_press",
      "cable-lateral-raise": "cable_lateral_raise",
      "machine-shoulder-press": "machine_shoulder_press",
      "reverse-pec-deck": "reverse_pec_deck",
      "goblet-squat": "goblet_squat",
      "smith-machine-squat": "smith_squat",
      "glute-bridge": "glute_bridge",
      "seated-calf-raise": "seated_calf_raise",
      "cable-curl": "cable_curl",
      "reverse-curl": "reverse_curl",
      "pallof-press": "pallof_press",
      "dead-bug": "dead_bug",
      "bird-dog": "bird_dog",
      "smith-machine-bench-press": "smith_bench_press",
      "decline-dumbbell-press": "decline_dumbbell_press",
      "pec-deck": "pec_deck",
      "diamond-push-up": "diamond_pushup",
      "knee-push-up": "kneeling_pushup",
      "neutral-grip-pull-up": "neutral_pullup",
      "close-grip-lat-pulldown": "close_pulldown",
      "machine-row": "machine_row",
      "meadows-row": "meadows_row",
      "push-press": "push_press",
      "cable-front-raise": "cable_front_raise",
      "plate-front-raise": "plate_front_raise",
      "dumbbell-shrug": "dumbbell_shrug",
      "band-pull-apart": "band_pull_apart",
      "dumbbell-sumo-squat": "sumo_squat",
      "split-squat": "split_squat",
      "walking-lunge": "walking_lunge",
      "lateral-lunge": "lateral_lunge",
      "curtsy-lunge": "curtsy_lunge",
      "heel-elevated-goblet-squat": "heel_elevated_goblet",
      "landmine-squat": "landmine_squat",
      "belt-squat": "belt_squat",
      "smith-machine-split-squat": "smith_split_squat",
      "seated-leg-curl": "seated_leg_curl",
      "good-morning": "good_morning",
      "dumbbell-romanian-deadlift": "dumbbell_rdl",
      "cable-pull-through": "cable_pull_through",
      "sumo-deadlift": "sumo_deadlift",
      "trap-bar-deadlift": "trap_bar_deadlift",
      "single-leg-glute-bridge": "single_glute_bridge",
      "cable-kickback": "cable_kickback",
      "fire-hydrant": "quadruped_abduction",
      "banded-clamshell": "clamshell",
      "banded-lateral-walk": "band_lateral_walk",
      "reverse-hyperextension": "reverse_hyper",
      "back-extension": "back_extension",
      "banded-seated-hip-abduction": "seated_band_abduction",
      "single-leg-calf-raise": "single_calf_raise",
      "leg-press-calf-raise": "leg_press_calf_raise",
      "donkey-calf-raise": "donkey_calf_raise",
      "incline-dumbbell-curl": "incline_dumbbell_curl",
      "concentration-curl": "concentration_curl",
      "spider-curl": "spider_curl",
      "drag-curl": "drag_curl",
      "rope-hammer-curl": "cable_hammer_curl",
      "wrist-curl": "wrist_curl",
      "wrist-extension": "reverse_wrist_curl",
      "farmer-carry": "farmer_carry",
      "tricep-kickback": "dumbbell_kickback",
      "overhead-tricep-extension": "cable_overhead_extension",
      "bench-dip": "bench_dip",
      "reverse-crunch": "reverse_crunch",
      "bicycle-crunch": "bicycle_crunch",
      "heel-tap": "heel_touch",
      "lying-leg-raise": "lying_leg_raise",
      "hanging-knee-raise": "hanging_knee_raise",
      "cable-crunch": "cable_crunch",
      "cable-woodchop": "cable_woodchop",
      "hollow-body-hold": "hollow_hold",
      "mountain-climber": "mountain_climber",
      "plank-shoulder-tap": "plank_shoulder_tap",
      "bear-crawl": "bear_crawl",
      "dumbbell-side-bend": "dumbbell_side_bend",
      "copenhagen-plank": "copenhagen_plank",
      "kettlebell-swing": "kettlebell_swing",
      "burpee": "burpee",
      "rear-delt-fly": "rear_delt_fly",
      "leg-curl": "leg_curl",
      "single-arm-dumbbell-tricep-extension": "single_overhead_extension",
      "cable-fly": "wg_cable_fly",
      "weighted-push-up": "wg_weighted_push_up",
      "upright-row": "wg_upright_row",
      "dumbbell-bent-over-row": "wg_dumbbell_bent_over_row",
      "chest-supported-row": "wg_chest_supported_row",
      "weighted-pull-up": "wg_weighted_pull_up",
      "step-up": "wg_step_up",
      "standing-calf-raise": "wg_standing_calf_raise",
      "bicep-curl": "wg_bicep_curl",
      "preacher-curl": "wg_preacher_curl",
      "dip": "wg_dip",
      "assisted-dip": "wg_assisted_dip",
      "running": "wg_running",
      "walking": "wg_walking",
      "cycling": "wg_cycling",
      "rowing": "wg_rowing",
      "stair-climber": "wg_stair_climber",
      "weighted-dip": "wg_weighted_dip",
      "standing-dumbbell-press": "wg_standing_dumbbell_press",
      "machine-lateral-raise": "wg_machine_lateral_raise",
      "cable-rear-delt-fly": "wg_cable_rear_delt_fly",
      "pendlay-row": "wg_pendlay_row",
      "wide-grip-lat-pulldown": "wg_wide_grip_lat_pulldown",
      "assisted-chin-up": "wg_assisted_chin_up",
      "weighted-chin-up": "wg_weighted_chin_up",
      "nordic-hamstring-curl": "wg_nordic_hamstring_curl",
      "single-leg-romanian-deadlift": "wg_single_leg_romanian_deadlift",
      "reverse-lunge": "wg_reverse_lunge",
      "barbell-glute-bridge": "wg_barbell_glute_bridge",
      "dumbbell-glute-bridge": "wg_dumbbell_glute_bridge",
      "dumbbell-hip-thrust": "wg_dumbbell_hip_thrust",
      "smith-machine-hip-thrust": "wg_smith_machine_hip_thrust",
      "smith-machine-romanian-deadlift": "wg_smith_machine_romanian_deadlift",
      "kettlebell-romanian-deadlift": "wg_kettlebell_romanian_deadlift",
      "machine-glute-kickback": "wg_machine_glute_kickback",
      "cable-standing-hip-abduction": "wg_cable_standing_hip_abduction",
      "cable-standing-hip-adduction": "wg_cable_standing_hip_adduction",
      "smith-machine-bulgarian-split-squat": "wg_smith_machine_bulgarian_split_squat",
      "smith-machine-reverse-lunge": "wg_smith_machine_reverse_lunge",
      "dumbbell-sumo-deadlift": "wg_dumbbell_sumo_deadlift",
      "front-foot-elevated-split-squat": "wg_front_foot_elevated_split_squat",
      "deficit-reverse-lunge": "wg_deficit_reverse_lunge",
      "dumbbell-lateral-lunge": "wg_dumbbell_lateral_lunge",
      "dumbbell-curtsy-lunge": "wg_dumbbell_curtsy_lunge",
      "landmine-romanian-deadlift": "wg_landmine_romanian_deadlift",
      "glute-focused-back-extension": "wg_glute_focused_back_extension",
      "wall-sit": "wg_wall_sit",
      "jump-squat": "wg_jump_squat",
      "ez-bar-curl": "wg_ez_bar_curl",
      "rope-tricep-pushdown": "wg_rope_tricep_pushdown",
      "dumbbell-skull-crusher": "wg_dumbbell_skull_crusher",
      "single-dumbbell-skullcrusher": "wg_single_dumbbell_skullcrusher",
      "half-kneeling-pallof-press": "wg_half_kneeling_pallof_press",
      "cable-pallof-hold": "wg_cable_pallof_hold",
      "captains-chair-knee-raise": "wg_captains_chair_knee_raise",
      "decline-sit-up": "wg_decline_sit_up",
      "weighted-crunch": "wg_weighted_crunch",
      "weighted-russian-twist": "wg_weighted_russian_twist",
      "elliptical": "wg_elliptical",
      "swimming": "wg_swimming",
      "jump-rope": "wg_jump_rope",
      "assault-bike": "wg_assault_bike",
      "skierg": "wg_skierg",
      "hiking": "wg_hiking",
      "treadmill-incline-walk": "wg_treadmill_incline_walk",
      "battle-ropes": "wg_battle_ropes",
      "wide-push-up": "wg_wide_push_up",
      "pike-push-up": "wg_pike_push_up",
      "feet-elevated-pike-push-up": "wg_feet_elevated_pike_push_up",
      "archer-push-up": "wg_archer_push_up",
      "typewriter-push-up": "wg_typewriter_push_up",
      "explosive-push-up": "wg_explosive_push_up",
      "hindu-push-up": "wg_hindu_push_up",
      "scapular-push-up": "wg_scapular_push_up",
      "push-up-shoulder-tap": "wg_push_up_shoulder_tap",
      "wall-push-up": "wg_wall_push_up",
      "wall-walk": "wg_wall_walk",
      "wall-handstand-push-up": "wg_wall_handstand_push_up",
      "handstand-push-up": "wg_handstand_push_up",
      "chair-dip": "wg_chair_dip",
      "doorway-row": "wg_doorway_row",
      "towel-row": "wg_towel_row",
      "prone-y-raise": "wg_prone_y_raise",
      "prone-t-raise": "wg_prone_t_raise",
      "superman": "wg_superman",
      "superman-hold": "wg_superman_hold",
      "reverse-snow-angel": "wg_reverse_snow_angel",
      "dead-hang": "wg_dead_hang",
      "active-hang": "wg_active_hang",
      "scapular-pull-up": "wg_scapular_pull_up",
      "negative-pull-up": "wg_negative_pull_up",
      "commando-pull-up": "wg_commando_pull_up",
      "l-sit-pull-up": "wg_l_sit_pull_up",
      "towel-pull-up": "wg_towel_pull_up",
      "bodyweight-squat": "wg_bodyweight_squat",
      "pistol-squat": "wg_pistol_squat",
      "assisted-pistol-squat": "wg_assisted_pistol_squat",
      "shrimp-squat": "wg_shrimp_squat",
      "cossack-squat": "wg_cossack_squat",
      "sissy-squat": "wg_sissy_squat",
      "skater-squat": "wg_skater_squat",
      "single-leg-box-squat": "wg_single_leg_box_squat",
      "step-down": "wg_step_down",
      "glute-bridge-march": "wg_glute_bridge_march",
      "frog-pump": "wg_frog_pump",
      "donkey-kick": "wg_donkey_kick",
      "clamshell": "wg_clamshell",
      "hip-airplane": "wg_hip_airplane",
      "side-lying-hip-abduction": "wg_side_lying_hip_abduction",
      "side-lying-leg-raise": "wg_side_lying_leg_raise",
      "lying-hamstring-walkout": "wg_lying_hamstring_walkout",
      "towel-hamstring-curl": "wg_towel_hamstring_curl",
      "stability-ball-hamstring-curl": "wg_stability_ball_hamstring_curl",
      "banded-glute-bridge": "wg_banded_glute_bridge",
      "banded-hip-thrust": "wg_banded_hip_thrust",
      "banded-frog-pump": "wg_banded_frog_pump",
      "banded-monster-walk": "wg_banded_monster_walk",
      "banded-squat": "wg_banded_squat",
      "banded-donkey-kick": "wg_banded_donkey_kick",
      "banded-fire-hydrant": "wg_banded_fire_hydrant",
      "banded-kickback": "wg_banded_kickback",
      "banded-standing-hip-abduction": "wg_banded_standing_hip_abduction",
      "banded-face-pull": "wg_banded_face_pull",
      "banded-row": "wg_banded_row",
      "banded-lat-pulldown": "wg_banded_lat_pulldown",
      "banded-pallof-press": "wg_banded_pallof_press",
      "banded-woodchop": "wg_banded_woodchop",
      "banded-dead-bug": "wg_banded_dead_bug",
      "hollow-rock": "wg_hollow_rock",
      "v-up": "wg_v_up",
      "flutter-kick": "wg_flutter_kick",
      "toe-touch": "wg_toe_touch",
      "plank-jack": "wg_plank_jack",
      "bear-plank": "wg_bear_plank",
      "crab-walk": "wg_crab_walk",
      "inchworm": "wg_inchworm",
      "l-sit-hold": "wg_l_sit_hold",
      "seated-knee-tuck": "wg_seated_knee_tuck",
      "side-plank-hip-dip": "wg_side_plank_hip_dip",
      "dragon-flag": "wg_dragon_flag",
      "half-burpee": "wg_half_burpee",
      "squat-thrust": "wg_squat_thrust",
      "high-knees": "wg_high_knees",
      "jumping-jack": "wg_jumping_jack",
      "skater-hop": "wg_skater_hop",
      "lateral-shuffle": "wg_lateral_shuffle",
      "fast-feet": "wg_fast_feet",
      "sprawl": "wg_sprawl",
      "seal-jack": "wg_seal_jack",
      "cat-cow-stretch": "wg_cat_cow_stretch",
      "arm-circles": "wg_arm_circles",
      "worlds-greatest-stretch": "wg_worlds_greatest_stretch",
      "leg-swings-stretch": "wg_leg_swings_stretch",
      "torso-twist-stretch": "wg_torso_twist_stretch",
      "doorway-chest-stretch": "wg_doorway_chest_stretch",
      "childs-pose": "wg_childs_pose",
      "kneeling-hip-flexor-stretch": "wg_kneeling_hip_flexor_stretch",
      "hamstring-stretch": "wg_hamstring_stretch",
      "standing-quad-stretch": "wg_standing_quad_stretch",
      "seated-forward-fold-stretch": "wg_seated_forward_fold_stretch",
      "cross-body-shoulder-stretch": "wg_cross_body_shoulder_stretch",
      "wall-calf-stretch": "wg_wall_calf_stretch",
      "butterfly-stretch": "wg_butterfly_stretch"
    }
  }
};
