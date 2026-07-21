module.exports = [
"[project]/lib/questions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "practicalTasks",
    ()=>practicalTasks,
    "scaleLabels",
    ()=>scaleLabels,
    "surveyQuestions",
    ()=>surveyQuestions
]);
const surveyQuestions = [
    {
        id: "I1",
        scale: "interest",
        text: "Мне нравится находить закономерности и понимать, почему они работают."
    },
    {
        id: "I2",
        scale: "interest",
        text: "Мне интересно разбираться, как устроены программы, сайты, игры или приложения."
    },
    {
        id: "I3",
        scale: "interest",
        text: "Мне нравится создавать на компьютере что-то своё, а не только пользоваться готовыми программами."
    },
    {
        id: "I4",
        scale: "interest",
        reverse: true,
        text: "Задачи, в которых нужно долго рассуждать и искать решение, обычно кажутся мне скучными."
    },
    {
        id: "I5",
        scale: "interest",
        text: "Мне было бы интересно научиться создавать программы, которые решают полезные задачи."
    },
    {
        id: "U1",
        scale: "study",
        text: "Я могу регулярно заниматься предметом, даже если не каждое задание оказывается интересным."
    },
    {
        id: "U2",
        scale: "study",
        text: "Если тема осталась непонятной, я готов вернуться к ней и разобрать ещё раз."
    },
    {
        id: "U3",
        scale: "study",
        reverse: true,
        text: "Я обычно начинаю серьёзно заниматься только перед контрольной работой или другим важным сроком."
    },
    {
        id: "U4",
        scale: "study",
        text: "Мне важно понять ход решения, а не просто запомнить правильный ответ."
    },
    {
        id: "U5",
        scale: "study",
        text: "Я готов выделять время на подготовку к выбранному экзамену каждую неделю."
    },
    {
        id: "T1",
        scale: "resilience",
        text: "Если задача не получается сразу, я пробую изменить способ решения."
    },
    {
        id: "T2",
        scale: "resilience",
        text: "Если мой ответ оказался неправильным, я обычно пытаюсь понять, на каком шаге ошибся."
    },
    {
        id: "T3",
        scale: "resilience",
        reverse: true,
        text: "После первой неудачной попытки мне часто хочется бросить задачу."
    },
    {
        id: "T4",
        scale: "resilience",
        text: "Если мне дали подсказку, я стараюсь не просто получить ответ, а понять ход решения."
    },
    {
        id: "T5",
        scale: "resilience",
        text: "Мне бывает интересно найти причину, по которой программа, устройство или решение работает неправильно."
    },
    {
        id: "V1",
        scale: "attention",
        text: "Перед тем как дать ответ, я обычно перечитываю важные условия задачи."
    },
    {
        id: "V2",
        scale: "attention",
        reverse: true,
        text: "В заданиях с несколькими условиями я иногда забываю учесть одно из них."
    },
    {
        id: "V3",
        scale: "attention",
        text: "Я часто замечаю небольшие ошибки или несоответствия в таблицах, схемах и инструкциях."
    },
    {
        id: "V4",
        scale: "attention",
        text: "После решения я проверяю, действительно ли полученный ответ соответствует вопросу задачи."
    }
];
const practicalTasks = [
    {
        id: "task1",
        title: "Последовательность команд",
        prompt: "Число 8 увеличили на 5, результат умножили на 2, затем вычли 9. Какое число получилось?",
        answerType: "input",
        inputMode: "number",
        placeholder: "Введите целое число",
        correctAnswer: "17",
        maxScore: 1,
        explanation: "8 + 5 = 13, затем 13 × 2 = 26, после чего 26 − 9 = 17.",
        logic: true
    },
    {
        id: "task2",
        title: "Поиск закономерности",
        prompt: "Какое число должно стоять следующим: 3, 7, 15, 31, …?",
        answerType: "input",
        inputMode: "number",
        placeholder: "Введите следующее число",
        correctAnswer: "63",
        maxScore: 2,
        hints: [
            "Сравни каждое число с предыдущим: 3 → 7, 7 → 15, 15 → 31.",
            "Каждое число умножают на 2 и прибавляют 1."
        ],
        explanation: "Последовательность строится по правилу: предыдущее число умножить на 2 и прибавить 1. Поэтому 31 × 2 + 1 = 63.",
        logic: true
    },
    {
        id: "task3",
        title: "Условие на Python",
        prompt: "Какое условие проверяет, что число x находится от 10 до 20 включительно и при этом является чётным?",
        answerType: "choice",
        options: [
            {
                id: "a",
                label: "x > 10 and x < 20 and x % 2 == 0"
            },
            {
                id: "b",
                label: "x >= 10 and x <= 20 and x % 2 == 0"
            },
            {
                id: "c",
                label: "x >= 10 or x <= 20 or x % 2 == 0"
            },
            {
                id: "d",
                label: "x >= 10 and x <= 20 and x % 2 == 1"
            }
        ],
        correctOptionId: "b",
        maxScore: 2,
        hints: [
            "Слова «включительно» означают, что подходят также числа 10 и 20.",
            "Чётное число при делении на 2 даёт остаток 0. Все требования должны выполняться одновременно."
        ],
        explanation: "Нужны границы >= 10 и <= 20, проверка чётности x % 2 == 0 и оператор and между всеми условиями.",
        logic: true,
        attention: true,
        code: true
    },
    {
        id: "task4",
        title: "Переменные в программе",
        prompt: "Какое число выведет программа? Выполняй строки строго сверху вниз.",
        codeBlock: `a = 6
b = a + 4
a = b * 2
b = a - b
print(a + b)`,
        answerType: "input",
        inputMode: "number",
        placeholder: "Введите результат программы",
        correctAnswer: "30",
        maxScore: 2,
        hints: [
            "После каждой строки записывай текущие значения a и b.",
            "Перед последней строкой a = 20, а b = 10."
        ],
        explanation: "Получаем: a = 6; b = 10; a = 20; b = 10. Поэтому программа выводит 20 + 10 = 30.",
        logic: true,
        code: true
    },
    {
        id: "task5",
        title: "Выбор по нескольким условиям",
        prompt: "Для учебного проекта нужен ноутбук с оперативной памятью не менее 16 ГБ, SSD не менее 512 ГБ и ценой не выше 90 000 ₽. Какая модель подходит?",
        details: [
            "А — 8 ГБ ОЗУ, SSD 1024 ГБ, 70 000 ₽",
            "Б — 16 ГБ ОЗУ, SSD 256 ГБ, 75 000 ₽",
            "В — 16 ГБ ОЗУ, SSD 512 ГБ, 88 000 ₽",
            "Г — 32 ГБ ОЗУ, SSD 512 ГБ, 96 000 ₽"
        ],
        answerType: "choice",
        options: [
            "А",
            "Б",
            "В",
            "Г"
        ].map((label)=>({
                id: label,
                label: `Модель ${label}`
            })),
        correctOptionId: "В",
        maxScore: 2,
        hints: [
            "Проверяй каждую модель сразу по трём требованиям.",
            "Модель Г подходит по характеристикам, но превышает допустимую цену."
        ],
        explanation: "Только модель В удовлетворяет всем условиям: 16 ГБ ОЗУ, SSD 512 ГБ и цена 88 000 ₽.",
        attention: true
    },
    {
        id: "task6",
        title: "Цикл for",
        prompt: "Какое число выведет программа? В Python range(1, 6) перебирает числа 1, 2, 3, 4 и 5.",
        codeBlock: `total = 0

for i in range(1, 6):
    total = total + i

print(total)`,
        answerType: "input",
        inputMode: "number",
        placeholder: "Введите результат программы",
        correctAnswer: "15",
        maxScore: 2,
        hints: [
            "Переменная total сначала равна нулю, затем в неё по очереди прибавляются числа от 1 до 5.",
            "Нужно вычислить сумму 1 + 2 + 3 + 4 + 5."
        ],
        explanation: "Цикл последовательно прибавляет к total числа 1, 2, 3, 4 и 5. Итоговая сумма равна 15.",
        logic: true,
        code: true
    },
    {
        id: "task7",
        title: "Список и индексы",
        prompt: "Какое число выведет программа? Элементы списка нумеруются с нуля: numbers[0] — первый элемент, numbers[2] — третий.",
        codeBlock: `numbers = [5, 12, 7, 4]
numbers[2] = numbers[0] + numbers[3]
print(numbers[1] + numbers[2])`,
        answerType: "input",
        inputMode: "number",
        placeholder: "Введите результат программы",
        correctAnswer: "21",
        maxScore: 2,
        hints: [
            "Сначала измени третий элемент списка.",
            "После второй строки список имеет вид [5, 12, 9, 4]."
        ],
        explanation: "Третий элемент становится равен 5 + 4 = 9. Затем программа складывает 12 и 9, поэтому выводит 21.",
        logic: true,
        attention: true,
        code: true
    },
    {
        id: "task8",
        title: "Поиск ошибки в цикле",
        prompt: "Программа должна вычислять сумму чисел от 1 до 5 включительно, но получает неверный результат. Что нужно исправить?",
        codeBlock: `total = 0

for i in range(1, 5):
    total = total + i

print(total)`,
        answerType: "choice",
        options: [
            {
                id: "a",
                label: "Заменить total = 0 на total = 1"
            },
            {
                id: "b",
                label: "Заменить range(1, 5) на range(1, 6)"
            },
            {
                id: "c",
                label: "Заменить знак + на знак *"
            },
            {
                id: "d",
                label: "Убрать строку print(total)"
            }
        ],
        correctOptionId: "b",
        maxScore: 2,
        hints: [
            "Верхняя граница range не входит в перебор.",
            "range(1, 5) даёт числа 1, 2, 3 и 4, но не даёт число 5."
        ],
        explanation: "Чтобы цикл перебрал также число 5, верхняя граница должна быть равна 6: range(1, 6).",
        logic: true,
        attention: true,
        code: true
    },
    {
        id: "task9",
        title: "Цикл с условием",
        prompt: "Какое число выведет программа?",
        codeBlock: `result = 0

for number in range(2, 8):
    if number % 2 == 0:
        result = result + number
    else:
        result = result - 1

print(result)`,
        answerType: "input",
        inputMode: "number",
        placeholder: "Введите результат программы",
        correctAnswer: "9",
        maxScore: 2,
        hints: [
            "range(2, 8) перебирает числа 2, 3, 4, 5, 6 и 7.",
            "Для чётного числа прибавляется само число, для нечётного вычитается единица."
        ],
        explanation: "Значение result меняется так: 0 → 2 → 1 → 5 → 4 → 10 → 9. Поэтому программа выводит 9.",
        logic: true,
        attention: true,
        code: true
    },
    {
        id: "task10",
        title: "Составной алгоритм",
        prompt: "Программа пять раз изменяет число x. Какое число будет выведено? Оператор // выполняет целочисленное деление.",
        codeBlock: `x = 5

for step in range(5):
    if x % 2 == 0:
        x = x // 2
    else:
        x = x + 3

print(x)`,
        answerType: "input",
        inputMode: "number",
        placeholder: "Введите итоговое значение x",
        correctAnswer: "4",
        maxScore: 3,
        hints: [
            "Сделай пять отдельных шагов и после каждого записывай новое значение x.",
            "Первые три шага: 5 → 8 → 4 → 2."
        ],
        explanation: "Пять изменений дают цепочку 5 → 8 → 4 → 2 → 1 → 4. После завершения цикла x равно 4.",
        logic: true,
        code: true
    }
];
const scaleLabels = [
    "Совсем не про меня",
    "Скорее не про меня",
    "По-разному / не уверен",
    "Скорее про меня",
    "Точно про меня"
];
}),
"[project]/lib/scoring.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateScores",
    ()=>calculateScores,
    "chooseProfile",
    ()=>chooseProfile,
    "egeRecommendation",
    ()=>egeRecommendation,
    "levelLabel",
    ()=>levelLabel,
    "ogeRecommendation",
    ()=>ogeRecommendation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/questions.ts [app-ssr] (ecmascript)");
;
const round = (value)=>Math.round(Math.max(0, Math.min(100, value)));
function normalizedSurvey(answers, scale) {
    const questions = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["surveyQuestions"].filter((question)=>question.scale === scale);
    const values = questions.map((question)=>{
        const raw = answers[question.id] ?? 3;
        return question.reverse ? 6 - raw : raw;
    });
    const sum = values.reduce((acc, value)=>acc + value, 0);
    const min = questions.length;
    const max = questions.length * 5;
    return round((sum - min) / (max - min) * 100);
}
function taskScore(states, predicate) {
    let earned = 0;
    let maximum = 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practicalTasks"].forEach((task)=>{
        if (!predicate(task.id)) return;
        earned += states[task.id]?.score ?? 0;
        maximum += task.maxScore;
    });
    return maximum === 0 ? 0 : round(earned / maximum * 100);
}
function behaviorScore(states, reflection) {
    const task = states.task10;
    if (!task || !task.completed || task.correct && task.hintLevel === 0) return null;
    if (task.correct && task.hintLevel > 0) {
        return reflection.understandFailures >= 4 || reflection.wantMore >= 4 ? 100 : 80;
    }
    if (task.revealed) {
        return reflection.understandFailures >= 4 ? 60 : 40;
    }
    return 20;
}
function calculateScores(surveyAnswers, taskStates, reflection) {
    const interestSurvey = normalizedSurvey(surveyAnswers, "interest");
    const study = normalizedSurvey(surveyAnswers, "study");
    const resilienceSurvey = normalizedSurvey(surveyAnswers, "resilience");
    const attentionSurvey = normalizedSurvey(surveyAnswers, "attention");
    const tasksById = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practicalTasks"].map((task)=>[
            task.id,
            task
        ]));
    const logic = taskScore(taskStates, (id)=>tasksById.get(id)?.logic === true);
    const attentionPractical = taskScore(taskStates, (id)=>tasksById.get(id)?.attention === true);
    const code = taskScore(taskStates, (id)=>tasksById.get(id)?.code === true);
    const practiceInterest = round((reflection.practiceInterest + reflection.understandFailures + reflection.wantMore - 3) / 12 * 100);
    const comfort = round((reflection.calmness + reflection.errorReaction - 2) / 8 * 100);
    const interest = round(0.7 * interestSurvey + 0.3 * practiceInterest);
    const attention = round(0.4 * attentionSurvey + 0.6 * attentionPractical);
    const observedBehavior = behaviorScore(taskStates, reflection);
    const resilience = observedBehavior === null ? resilienceSurvey : round(0.7 * resilienceSurvey + 0.3 * observedBehavior);
    const ogeIndex = round(0.2 * interest + 0.25 * logic + 0.2 * attention + 0.15 * resilience + 0.2 * study);
    const egeIndex = round(0.25 * interest + 0.2 * logic + 0.15 * attention + 0.15 * resilience + 0.15 * study + 0.1 * comfort);
    return {
        interestSurvey,
        interest,
        study,
        resilienceSurvey,
        resilience,
        attentionSurvey,
        attentionPractical,
        attention,
        logic,
        comfort,
        code,
        ogeIndex,
        egeIndex
    };
}
function chooseProfile(scores, reflection) {
    const { interest, logic, resilience, study, ogeIndex } = scores;
    if (reflection.workStyle === "guess") return "insufficient";
    if (logic >= 65 && interest < 45) return "skills_low_interest";
    if (interest >= 65 && resilience < 45) return "fear_of_errors";
    if (interest >= 70 && study >= 60 && logic < 60) return "potential";
    if (ogeIndex >= 70 && interest >= 55 && study >= 50) return "suitable";
    if (ogeIndex >= 40 && study >= 45) return "systematic";
    return "compare";
}
function levelLabel(value) {
    if (value >= 80) return "выраженная сильная сторона";
    if (value >= 60) return "хороший базовый уровень";
    if (value >= 40) return "показатель зависит от ситуации";
    return "навык пока формируется";
}
function ogeRecommendation(scores) {
    if (scores.ogeIndex >= 70 && scores.interest >= 55 && scores.study >= 50) {
        return "ОГЭ по информатике выглядит обоснованным выбором.";
    }
    if (scores.ogeIndex >= 55) {
        return "ОГЭ можно рассматривать, но перед окончательным выбором стоит пройти несколько занятий и попробовать задания экзамена.";
    }
    if (scores.ogeIndex >= 40) {
        return "Выбор ОГЭ возможен при ранней и последовательной подготовке.";
    }
    return "Сейчас стоит сравнить информатику с другими предметами и получить дополнительный практический опыт.";
}
function egeRecommendation(scores) {
    if (scores.egeIndex >= 70 && scores.interest >= 60 && scores.logic >= 55) {
        return "В будущем имеет смысл рассматривать ЕГЭ по информатике и познакомиться с программированием глубже.";
    }
    if (scores.egeIndex >= 55) {
        return "Возможность выбора ЕГЭ стоит сохранить. Следующий шаг — попробовать Python и более продолжительное обучение.";
    }
    if (scores.egeIndex >= 40) {
        return "Решение о ЕГЭ лучше принимать после опыта обучения в 9–10 классе.";
    }
    return "Сейчас информатика не выглядит очевидным профильным направлением, но результат не является окончательным.";
}
}),
"[project]/lib/profiles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "profiles",
    ()=>profiles
]);
const profiles = {
    suitable: {
        title: "Информатика выглядит подходящим выбором",
        lead: "Интерес, учебная готовность и практические результаты образуют достаточно устойчивое сочетание.",
        student: "Тебе удаётся последовательно рассуждать, работать с условиями и прослеживать выполнение алгоритмов. Даже если некоторые задания потребовали времени, ты сохранял интерес и стремился понять решение.",
        parent: "Ребёнок проявил устойчивый интерес к информатике и показал хороший базовый уровень логического и алгоритмического мышления. Выбор ОГЭ выглядит обоснованным; перспективу ЕГЭ стоит оценить после знакомства с программированием.",
        nextStep: "Пройти вводный блок по Python и решить несколько настоящих заданий ОГЭ."
    },
    potential: {
        title: "Высокий интерес, но пока мало практического опыта",
        lead: "Это перспективная ситуация: навыки можно развить, если интерес и регулярность сохранятся.",
        student: "Информатика вызывает у тебя заметный интерес, однако часть практических заданий пока оказалась непростой. Скорее всего, дело в небольшом опыте, а не в отсутствии способностей.",
        parent: "Интерес к предмету выражен, но практический опыт ограничен. Выбор ОГЭ возможен при раннем начале подготовки; текущий результат не следует трактовать как отсутствие способностей.",
        nextStep: "Пройти несколько вводных занятий по Python и базовым алгоритмам."
    },
    skills_low_interest: {
        title: "Навыки есть, но интерес пока не сформирован",
        lead: "Хороший результат ещё не означает, что информатика обязательно должна стать профильным предметом.",
        student: "Ты уверенно справляешься с логическими и алгоритмическими заданиями, но сам процесс пока не вызывает выраженного интереса. Важно проверить не только «смогу ли я», но и «хочу ли я заниматься этим регулярно».",
        parent: "Практические навыки хорошие, однако интерес выражен умеренно. Не стоит выбирать информатику только из-за предполагаемой лёгкости экзамена; полезна проба в формате небольшого проекта.",
        nextStep: "Создать маленький проект: игру, программу, сайт или Telegram-бота."
    },
    fear_of_errors: {
        title: "Информатика интересна, но ошибки снижают уверенность",
        lead: "Основная зона развития — спокойная повторная попытка и поиск причины ошибки.",
        student: "Информатика вызывает интерес, но сложные задания могут быстро снижать уверенность. В программировании ошибки встречаются постоянно; важен не идеальный первый ответ, а умение разобраться.",
        parent: "Интерес к предмету есть, но ошибки заметно влияют на уверенность. Рекомендуется спокойный формат подготовки с постепенным повышением сложности и регулярной обратной связью.",
        nextStep: "Решить несколько задач с постепенными подсказками и фиксировать причину каждой ошибки."
    },
    systematic: {
        title: "Выбор возможен при системной подготовке",
        lead: "Результат будет во многом зависеть от регулярности и своевременного начала занятий.",
        student: "Часть заданий получилась уверенно, а часть потребовала подсказок или повторных попыток. Информатика не является недоступным предметом, но подготовка должна быть последовательной.",
        parent: "Выраженных препятствий для выбора информатики нет, однако успешность будет зависеть от регулярности занятий. Перед решением рекомендуется практическая проба и несколько заданий формата ОГЭ.",
        nextStep: "Пройти диагностическое занятие и решить базовый вариант ОГЭ без ограничения по времени."
    },
    compare: {
        title: "Стоит сравнить информатику с другими предметами",
        lead: "Сейчас информатика не выглядит очевидным выбором, но это не вывод о способностях.",
        student: "Задания не вызвали выраженного интереса или оказались менее комфортными, чем ожидалось. Возможно, тебе больше подходят другие предметы или другой формат знакомства с IT.",
        parent: "По текущим данным информатика не выглядит очевидным выбором. Рекомендуется сравнить её с другими предметами и при необходимости попробовать IT через небольшой практический проект.",
        nextStep: "Сравнить информатику ещё с двумя предметами и попробовать несколько реальных заданий каждого."
    },
    insufficient: {
        title: "Пока недостаточно данных для уверенного вывода",
        lead: "Лучше получить честный неопределённый результат, чем случайную рекомендацию.",
        student: "Часть ответов выполнялась наугад или не отражает твой обычный способ работы. Результат стоит перепроверить в спокойной обстановке.",
        parent: "Полученных данных недостаточно для обоснованной рекомендации. Не стоит принимать решение о выборе экзамена только на основании этого прохождения.",
        nextStep: "Повторить тест без спешки или пройти короткое диагностическое занятие."
    }
};
}),
"[project]/components/ResultView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scoring$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/scoring.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profiles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/profiles.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const scoreItems = [
    {
        key: "interest",
        label: "Интерес к информатике"
    },
    {
        key: "logic",
        label: "Логика и алгоритмы"
    },
    {
        key: "attention",
        label: "Внимательность"
    },
    {
        key: "resilience",
        label: "Устойчивость к трудностям"
    },
    {
        key: "study",
        label: "Учебная готовность"
    },
    {
        key: "comfort",
        label: "Комфорт во время практики"
    }
];
function strongestAndGrowth(payload) {
    const ranked = scoreItems.map((item)=>({
            ...item,
            value: Number(payload.scores[item.key])
        })).sort((a, b)=>b.value - a.value);
    return {
        strengths: ranked.slice(0, 2),
        growth: ranked.slice(-2).reverse()
    };
}
function ResultView({ payload, shared = false, shareId }) {
    const [showParent, setShowParent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(shared);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const profile = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profiles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profiles"][payload.profileId];
    const ranked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>strongestAndGrowth(payload), [
        payload
    ]);
    const nickname = payload.participant.nickname.trim();
    const resultUrl = shareId ? `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/result/${shareId}` : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "";
    async function copyLink() {
        if (!resultUrl) return;
        await navigator.clipboard.writeText(resultUrl);
        setCopied(true);
        window.setTimeout(()=>setCopied(false), 1800);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "site-shell result-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar print-hide",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "it"
                            }, void 0, false, {
                                fileName: "[project]/components/ResultView.tsx",
                                lineNumber: 55,
                                columnNumber: 32
                            }, this),
                            "py ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "результат"
                            }, void 0, false, {
                                fileName: "[project]/components/ResultView.tsx",
                                lineNumber: 55,
                                columnNumber: 50
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ResultView.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-button",
                        onClick: ()=>window.print(),
                        children: "Сохранить как PDF"
                    }, void 0, false, {
                        fileName: "[project]/components/ResultView.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ResultView.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "result-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eyebrow",
                        children: nickname ? `${nickname}, твой профиль` : "Твой профиль"
                    }, void 0, false, {
                        fileName: "[project]/components/ResultView.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: profile.title
                    }, void 0, false, {
                        fileName: "[project]/components/ResultView.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: profile.lead
                    }, void 0, false, {
                        fileName: "[project]/components/ResultView.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "index-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Индекс ОГЭ"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 64,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: payload.scores.ogeIndex
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 64,
                                        columnNumber: 39
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "из 100"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 64,
                                        columnNumber: 81
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ResultView.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Перспектива ЕГЭ"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 65,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: payload.scores.egeIndex
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 65,
                                        columnNumber: 44
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "из 100"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 65,
                                        columnNumber: 86
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ResultView.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ResultView.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ResultView.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "result-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "result-main",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "result-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Что означает результат"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: showParent ? profile.parent : profile.student
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ResultView.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "recommendation-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "result-card accent-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "card-kicker",
                                                children: "ОГЭ"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultView.tsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Рекомендация"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultView.tsx",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scoring$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ogeRecommendation"])(payload.scores)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultView.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "result-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "card-kicker",
                                                children: "ЕГЭ"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultView.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Перспектива"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultView.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scoring$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["egeRecommendation"])(payload.scores)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultView.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ResultView.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "result-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Твои показатели"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "score-list",
                                        children: scoreItems.map((item)=>{
                                            const value = Number(payload.scores[item.key]);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "score-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "score-head",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ResultView.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: value
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ResultView.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 74
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ResultView.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "score-track",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: `${value}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ResultView.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 50
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ResultView.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scoring$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levelLabel"])(value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ResultView.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item.key, true, {
                                                fileName: "[project]/components/ResultView.tsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ResultView.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "result-card two-column-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Сильные стороны"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultView.tsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                children: ranked.strengths.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            item.label,
                                                            ": ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scoring$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levelLabel"])(item.value)
                                                        ]
                                                    }, item.key, true, {
                                                        fileName: "[project]/components/ResultView.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 49
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultView.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Что развивать"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultView.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                children: ranked.growth.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            item.label,
                                                            ": ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scoring$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levelLabel"])(item.value)
                                                        ]
                                                    }, item.key, true, {
                                                        fileName: "[project]/components/ResultView.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 46
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultView.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ResultView.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "result-card next-step-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "card-kicker",
                                        children: "Следующий шаг"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: profile.nextStep
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    payload.participant.interests.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Тебя особенно заинтересовали: ",
                                            payload.participant.interests.join(", "),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ResultView.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ResultView.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "result-side print-hide",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "side-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Версия заключения"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `mode-button ${!showParent ? "active" : ""}`,
                                        onClick: ()=>setShowParent(false),
                                        children: "Для ученика"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `mode-button ${showParent ? "active" : ""}`,
                                        onClick: ()=>setShowParent(true),
                                        children: "Для родителя"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ResultView.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "side-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Поделиться"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    resultUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Ссылка открывает только итоговое заключение."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultView.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "button button-secondary full",
                                                onClick: copyLink,
                                                children: copied ? "Ссылка скопирована" : "Скопировать ссылку"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ResultView.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Подключите Supabase, чтобы создавать постоянные ссылки для родителей."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ResultView.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ResultView.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ResultView.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ResultView.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "result-disclaimer",
                children: "Результат не определяет способности или будущую профессию. Он отражает текущее прохождение, интерес и учебные привычки. Итоговые пороги должны быть уточнены после пилотирования."
            }, void 0, false, {
                fileName: "[project]/components/ResultView.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ResultView.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/TestApp.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ResultView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ResultView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/questions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scoring$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/scoring.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const interests = [
    "программирование",
    "разработка игр",
    "сайты и приложения",
    "искусственный интеллект",
    "информационная безопасность",
    "робототехника",
    "дизайн интерфейсов",
    "компьютерная техника"
];
const defaultParticipant = {
    nickname: "",
    grade: "9",
    experience: "Никогда не программировал",
    interests: []
};
const defaultReflection = {
    practiceInterest: 0,
    understandFailures: 0,
    wantMore: 0,
    calmness: 0,
    errorReaction: 0,
    workStyle: "mixed"
};
function emptyTaskState() {
    return {
        attempts: 0,
        hintLevel: 0,
        completed: false,
        correct: false,
        revealed: false,
        score: 0
    };
}
function TestApp() {
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("profile");
    const [participant, setParticipant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultParticipant);
    const [surveyIndex, setSurveyIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [surveyAnswers, setSurveyAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [taskIndex, setTaskIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [taskStates, setTaskStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [reflection, setReflection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultReflection);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [shareId, setShareId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [restored, setRestored] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const raw = localStorage.getItem("itpy-proftest-progress-v0.2");
            if (raw) {
                const saved = JSON.parse(raw);
                setStage(saved.stage ?? "profile");
                setParticipant(saved.participant ?? defaultParticipant);
                setSurveyIndex(saved.surveyIndex ?? 0);
                setSurveyAnswers(saved.surveyAnswers ?? {});
                setTaskIndex(saved.taskIndex ?? 0);
                setTaskStates(saved.taskStates ?? {});
                setReflection(saved.reflection ?? defaultReflection);
                setResult(saved.result ?? null);
            }
        } catch  {
            localStorage.removeItem("itpy-proftest-progress-v0.2");
        } finally{
            setRestored(true);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!restored) return;
        localStorage.setItem("itpy-proftest-progress-v0.2", JSON.stringify({
            stage,
            participant,
            surveyIndex,
            surveyAnswers,
            taskIndex,
            taskStates,
            reflection,
            result
        }));
    }, [
        restored,
        stage,
        participant,
        surveyIndex,
        surveyAnswers,
        taskIndex,
        taskStates,
        reflection,
        result
    ]);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (stage === "profile") return 2;
        if (stage === "survey") return Math.round(5 + (surveyIndex + 1) / __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["surveyQuestions"].length * 40);
        if (stage === "tasks") return Math.round(45 + (taskIndex + 1) / __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practicalTasks"].length * 40);
        if (stage === "reflection") return 90;
        return 100;
    }, [
        stage,
        surveyIndex,
        taskIndex
    ]);
    function toggleInterest(value) {
        setParticipant((current)=>({
                ...current,
                interests: current.interests.includes(value) ? current.interests.filter((item)=>item !== value) : [
                    ...current.interests,
                    value
                ]
            }));
    }
    function answerSurvey(value) {
        const question = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["surveyQuestions"][surveyIndex];
        setSurveyAnswers((current)=>({
                ...current,
                [question.id]: value
            }));
        window.setTimeout(()=>{
            if (surveyIndex < __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["surveyQuestions"].length - 1) setSurveyIndex((index)=>index + 1);
            else setStage("tasks");
        }, 180);
    }
    function updateTaskState(taskId, patch) {
        setTaskStates((current)=>({
                ...current,
                [taskId]: {
                    ...current[taskId] ?? emptyTaskState(),
                    ...patch
                }
            }));
    }
    function setTaskAnswer(answer) {
        const task = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practicalTasks"][taskIndex];
        const state = taskStates[task.id] ?? emptyTaskState();
        if (state.completed) return;
        updateTaskState(task.id, {
            answer
        });
    }
    function normalizeAnswer(value, inputMode = "text") {
        const trimmed = value.trim();
        if (inputMode === "number") {
            const number = Number(trimmed.replace(",", "."));
            return Number.isFinite(number) ? String(number) : trimmed;
        }
        return trimmed.toLocaleLowerCase("ru-RU").replace(/\s+/g, " ");
    }
    function submitTask() {
        const task = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practicalTasks"][taskIndex];
        const state = taskStates[task.id] ?? emptyTaskState();
        if (!state.answer?.trim()) return;
        const correct = task.answerType === "choice" ? state.answer === task.correctOptionId : [
            task.correctAnswer,
            ...task.acceptedAnswers ?? []
        ].map((answer)=>normalizeAnswer(answer, task.inputMode)).includes(normalizeAnswer(state.answer, task.inputMode));
        const attemptsBefore = state.attempts;
        const penalty = Math.max(state.hintLevel, attemptsBefore > 0 ? 1 : 0);
        const score = correct ? Math.max(0, task.maxScore - penalty) : 0;
        if (correct) {
            updateTaskState(task.id, {
                attempts: attemptsBefore + 1,
                completed: true,
                correct: true,
                score
            });
            return;
        }
        updateTaskState(task.id, {
            attempts: attemptsBefore + 1,
            answer: "",
            correct: false
        });
    }
    function revealHint() {
        const task = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practicalTasks"][taskIndex];
        const state = taskStates[task.id] ?? emptyTaskState();
        if (!task.hints || state.hintLevel >= task.hints.length) return;
        updateTaskState(task.id, {
            hintLevel: state.hintLevel + 1,
            answer: ""
        });
    }
    function revealExplanation() {
        const task = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practicalTasks"][taskIndex];
        updateTaskState(task.id, {
            completed: true,
            correct: false,
            revealed: true,
            score: 0,
            answer: task.answerType === "choice" ? task.correctOptionId : task.correctAnswer
        });
    }
    function nextTask() {
        if (taskIndex < __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practicalTasks"].length - 1) setTaskIndex((index)=>index + 1);
        else setStage("reflection");
    }
    const reflectionComplete = reflection.practiceInterest > 0 && reflection.understandFailures > 0 && reflection.wantMore > 0 && reflection.calmness > 0 && reflection.errorReaction > 0;
    async function finishTest() {
        if (!reflectionComplete) return;
        const scores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scoring$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateScores"])(surveyAnswers, taskStates, reflection);
        const profileId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scoring$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chooseProfile"])(scores, reflection);
        const payload = {
            version: "0.2",
            completedAt: new Date().toISOString(),
            participant,
            surveyAnswers,
            taskStates,
            reflection,
            scores,
            profileId
        };
        setResult(payload);
        setStage("result");
        setSaving(true);
        try {
            const response = await fetch("/api/results", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (data.stored && data.id) setShareId(data.id);
        } catch  {
        // Сайт продолжает работать локально, даже если хранилище недоступно.
        } finally{
            setSaving(false);
        }
    }
    function resetTest() {
        if (!window.confirm("Начать заново? Текущий прогресс будет удалён.")) return;
        localStorage.removeItem("itpy-proftest-progress-v0.2");
        setStage("profile");
        setParticipant(defaultParticipant);
        setSurveyIndex(0);
        setSurveyAnswers({});
        setTaskIndex(0);
        setTaskStates({});
        setReflection(defaultReflection);
        setResult(null);
        setShareId(null);
    }
    if (!restored) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "site-shell test-shell",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "loading-card",
            children: "Загружаем тест…"
        }, void 0, false, {
            fileName: "[project]/components/TestApp.tsx",
            lineNumber: 255,
            columnNumber: 65
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/TestApp.tsx",
        lineNumber: 255,
        columnNumber: 25
    }, this);
    if (stage === "result" && result) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ResultView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        payload: result,
        shareId: shareId
    }, void 0, false, {
        fileName: "[project]/components/TestApp.tsx",
        lineNumber: 256,
        columnNumber: 44
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "site-shell test-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "brand",
                        href: "/",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "it"
                            }, void 0, false, {
                                fileName: "[project]/components/TestApp.tsx",
                                lineNumber: 261,
                                columnNumber: 42
                            }, this),
                            "py ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "профориентация"
                            }, void 0, false, {
                                fileName: "[project]/components/TestApp.tsx",
                                lineNumber: 261,
                                columnNumber: 60
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-button",
                        onClick: resetTest,
                        children: "Начать заново"
                    }, void 0, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TestApp.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "progress-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "progress-head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Прогресс"
                            }, void 0, false, {
                                fileName: "[project]/components/TestApp.tsx",
                                lineNumber: 266,
                                columnNumber: 40
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: [
                                    progress,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TestApp.tsx",
                                lineNumber: 266,
                                columnNumber: 61
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "progress-track",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                width: `${progress}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 267,
                            columnNumber: 41
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TestApp.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            stage === "profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "question-card profile-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eyebrow",
                        children: "Перед началом"
                    }, void 0, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Расскажи немного о себе"
                    }, void 0, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 273,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "question-lead",
                        children: "Имя можно не указывать. Телефон, email и школу мы не спрашиваем."
                    }, void 0, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "field-label",
                        children: [
                            "Имя или псевдоним ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "необязательно"
                            }, void 0, false, {
                                fileName: "[project]/components/TestApp.tsx",
                                lineNumber: 277,
                                columnNumber: 31
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: participant.nickname,
                                onChange: (event)=>setParticipant({
                                        ...participant,
                                        nickname: event.target.value.slice(0, 40)
                                    }),
                                placeholder: "Например, Саша"
                            }, void 0, false, {
                                fileName: "[project]/components/TestApp.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 276,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "field-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field-label",
                                children: [
                                    "Класс",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: participant.grade,
                                        onChange: (event)=>setParticipant({
                                                ...participant,
                                                grade: event.target.value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "8",
                                                children: "8 класс"
                                            }, void 0, false, {
                                                fileName: "[project]/components/TestApp.tsx",
                                                lineNumber: 288,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "9",
                                                children: "9 класс"
                                            }, void 0, false, {
                                                fileName: "[project]/components/TestApp.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "10",
                                                children: "10 класс"
                                            }, void 0, false, {
                                                fileName: "[project]/components/TestApp.tsx",
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "other",
                                                children: "Другой"
                                            }, void 0, false, {
                                                fileName: "[project]/components/TestApp.tsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/TestApp.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TestApp.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field-label",
                                children: [
                                    "Опыт программирования",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: participant.experience,
                                        onChange: (event)=>setParticipant({
                                                ...participant,
                                                experience: event.target.value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Никогда не программировал"
                                            }, void 0, false, {
                                                fileName: "[project]/components/TestApp.tsx",
                                                lineNumber: 296,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Видел программирование на уроках"
                                            }, void 0, false, {
                                                fileName: "[project]/components/TestApp.tsx",
                                                lineNumber: 297,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Пробовал Scratch или Кумир"
                                            }, void 0, false, {
                                                fileName: "[project]/components/TestApp.tsx",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Писал простые программы на Python"
                                            }, void 0, false, {
                                                fileName: "[project]/components/TestApp.tsx",
                                                lineNumber: 299,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Делал собственный небольшой проект"
                                            }, void 0, false, {
                                                fileName: "[project]/components/TestApp.tsx",
                                                lineNumber: 300,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/TestApp.tsx",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TestApp.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                        className: "interest-fieldset",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                children: [
                                    "Что внутри IT кажется интересным? ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "можно несколько"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TestApp.tsx",
                                        lineNumber: 306,
                                        columnNumber: 55
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TestApp.tsx",
                                lineNumber: 306,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chip-grid",
                                children: interests.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: `chip ${participant.interests.includes(item) ? "selected" : ""}`,
                                        onClick: ()=>toggleInterest(item),
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/components/TestApp.tsx",
                                        lineNumber: 309,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/TestApp.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button button-primary",
                        onClick: ()=>setStage("survey"),
                        children: "Перейти к анкете"
                    }, void 0, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TestApp.tsx",
                lineNumber: 271,
                columnNumber: 9
            }, this),
            stage === "survey" && (()=>{
                const question = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["surveyQuestions"][surveyIndex];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "question-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "question-meta",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Анкета"
                                }, void 0, false, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 327,
                                    columnNumber: 44
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: [
                                        surveyIndex + 1,
                                        " / ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["surveyQuestions"].length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 327,
                                    columnNumber: 63
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 327,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: question.text
                        }, void 0, false, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 328,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "question-lead",
                            children: "Выбери ответ, который лучше описывает тебя в обычной ситуации."
                        }, void 0, false, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 329,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "scale-options",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleLabels"].map((label, index)=>{
                                const value = index + 1;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `scale-button ${surveyAnswers[question.id] === value ? "selected" : ""}`,
                                    onClick: ()=>answerSurvey(value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: value
                                        }, void 0, false, {
                                            fileName: "[project]/components/TestApp.tsx",
                                            lineNumber: 339,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/components/TestApp.tsx",
                                            lineNumber: 339,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, label, true, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 334,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 330,
                            columnNumber: 13
                        }, this),
                        surveyIndex > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-button back-button",
                            onClick: ()=>setSurveyIndex((index)=>index - 1),
                            children: "← Назад"
                        }, void 0, false, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 344,
                            columnNumber: 33
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TestApp.tsx",
                    lineNumber: 326,
                    columnNumber: 11
                }, this);
            })(),
            stage === "tasks" && (()=>{
                const task = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practicalTasks"][taskIndex];
                const state = taskStates[task.id] ?? emptyTaskState();
                const wrong = state.attempts > 0 && !state.completed && !state.correct;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "question-card task-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "question-meta",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Практика"
                                }, void 0, false, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 355,
                                    columnNumber: 44
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: [
                                        taskIndex + 1,
                                        " / ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practicalTasks"].length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 355,
                                    columnNumber: 65
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 355,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "task-badge",
                            children: [
                                "Задание ",
                                taskIndex + 1
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 356,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: task.title
                        }, void 0, false, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "task-prompt",
                            children: task.prompt
                        }, void 0, false, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 358,
                            columnNumber: 13
                        }, this),
                        task.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "data-list",
                            children: task.details.map((detail)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: detail
                                }, detail, false, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 362,
                                    columnNumber: 47
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 361,
                            columnNumber: 15
                        }, this),
                        task.codeBlock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "code-block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: task.codeBlock
                            }, void 0, false, {
                                fileName: "[project]/components/TestApp.tsx",
                                lineNumber: 367,
                                columnNumber: 43
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 367,
                            columnNumber: 15
                        }, this),
                        task.answerType === "choice" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "task-options",
                            children: task.options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `task-option ${state.answer === option.id ? "selected" : ""}`,
                                    onClick: ()=>setTaskAnswer(option.id),
                                    disabled: state.completed,
                                    children: option.label
                                }, option.id, false, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 373,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 371,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "answer-field",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Твой ответ"
                                }, void 0, false, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 383,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "answer-input",
                                    type: task.inputMode === "number" ? "text" : "text",
                                    inputMode: task.inputMode === "number" ? "numeric" : "text",
                                    value: state.answer ?? "",
                                    onChange: (event)=>setTaskAnswer(event.target.value),
                                    onKeyDown: (event)=>{
                                        if (event.key === "Enter" && state.answer?.trim()) submitTask();
                                    },
                                    placeholder: task.placeholder ?? "Введите ответ",
                                    disabled: state.completed,
                                    autoComplete: "off"
                                }, void 0, false, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 384,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 382,
                            columnNumber: 15
                        }, this),
                        wrong && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "feedback feedback-wrong",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Ответ пока не совпал."
                                }, void 0, false, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 400,
                                    columnNumber: 64
                                }, this),
                                " Попробуй ещё раз или воспользуйся подсказкой."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 400,
                            columnNumber: 23
                        }, this),
                        state.hintLevel > 0 && task.hints && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "feedback feedback-hint",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: [
                                        "Подсказка ",
                                        state.hintLevel
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 404,
                                    columnNumber: 17
                                }, this),
                                task.hints[state.hintLevel - 1]
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 403,
                            columnNumber: 15
                        }, this),
                        state.completed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `feedback ${state.correct ? "feedback-correct" : "feedback-explanation"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: state.correct ? "Верно." : "Разбор"
                                }, void 0, false, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 411,
                                    columnNumber: 17
                                }, this),
                                task.explanation,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: [
                                        "Баллы за задание: ",
                                        state.score,
                                        " из ",
                                        task.maxScore
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 413,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 410,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "task-actions",
                            children: [
                                !state.completed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "button button-primary",
                                    disabled: !state.answer?.trim(),
                                    onClick: submitTask,
                                    children: "Проверить ответ"
                                }, void 0, false, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 419,
                                    columnNumber: 17
                                }, this),
                                !state.completed && wrong && task.hints && state.hintLevel < task.hints.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "button button-secondary",
                                    onClick: revealHint,
                                    children: "Открыть подсказку"
                                }, void 0, false, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 422,
                                    columnNumber: 17
                                }, this),
                                !state.completed && wrong && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-button",
                                    onClick: revealExplanation,
                                    children: "Показать полный разбор"
                                }, void 0, false, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 425,
                                    columnNumber: 17
                                }, this),
                                state.completed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "button button-primary",
                                    onClick: nextTask,
                                    children: taskIndex === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["practicalTasks"].length - 1 ? "Перейти к итоговым вопросам" : "Следующее задание"
                                }, void 0, false, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 428,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TestApp.tsx",
                            lineNumber: 417,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TestApp.tsx",
                    lineNumber: 354,
                    columnNumber: 11
                }, this);
            })(),
            stage === "reflection" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "question-card reflection-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eyebrow",
                        children: "Последний блок"
                    }, void 0, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 439,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Как прошла практическая часть?"
                    }, void 0, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 440,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "question-lead",
                        children: "Эти ответы не оцениваются как правильные или неправильные."
                    }, void 0, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 441,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReflectionScale, {
                        label: "Насколько тебе было интересно выполнять задания?",
                        value: reflection.practiceInterest,
                        onChange: (value)=>setReflection({
                                ...reflection,
                                practiceInterest: value
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 443,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReflectionScale, {
                        label: "Хотелось ли понять задания, которые не получились сразу?",
                        value: reflection.understandFailures,
                        onChange: (value)=>setReflection({
                                ...reflection,
                                understandFailures: value
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 444,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReflectionScale, {
                        label: "Хотелось бы попробовать ещё похожие задачи или написать программу?",
                        value: reflection.wantMore,
                        onChange: (value)=>setReflection({
                                ...reflection,
                                wantMore: value
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 445,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReflectionScale, {
                        label: "Насколько спокойно ты чувствовал себя во время заданий?",
                        value: reflection.calmness,
                        onChange: (value)=>setReflection({
                                ...reflection,
                                calmness: value
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 446,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReflectionScale, {
                        label: "После ошибки хотелось попробовать снова?",
                        value: reflection.errorReaction,
                        onChange: (value)=>setReflection({
                                ...reflection,
                                errorReaction: value
                            })
                    }, void 0, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 447,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                        className: "work-style",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                children: "Как ты в основном выполнял задания?"
                            }, void 0, false, {
                                fileName: "[project]/components/TestApp.tsx",
                                lineNumber: 450,
                                columnNumber: 13
                            }, this),
                            [
                                [
                                    "check",
                                    "Последовательно проверял варианты и старался понять решение"
                                ],
                                [
                                    "mixed",
                                    "В разных заданиях действовал по-разному"
                                ],
                                [
                                    "guess",
                                    "Часто отвечал наугад или почти не читал условия"
                                ]
                            ].map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "radio-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: "workStyle",
                                            value: value,
                                            checked: reflection.workStyle === value,
                                            onChange: ()=>setReflection({
                                                    ...reflection,
                                                    workStyle: value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/components/TestApp.tsx",
                                            lineNumber: 457,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/components/TestApp.tsx",
                                            lineNumber: 464,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, value, true, {
                                    fileName: "[project]/components/TestApp.tsx",
                                    lineNumber: 456,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 449,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button button-primary",
                        disabled: !reflectionComplete || saving,
                        onClick: finishTest,
                        children: saving ? "Сохраняем…" : "Получить результат"
                    }, void 0, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 469,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TestApp.tsx",
                lineNumber: 438,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TestApp.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, this);
}
function ReflectionScale({ label, value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "reflection-question",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: label
            }, void 0, false, {
                fileName: "[project]/components/TestApp.tsx",
                lineNumber: 481,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reflection-numbers",
                children: [
                    1,
                    2,
                    3,
                    4,
                    5
                ].map((number)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: value === number ? "selected" : "",
                        onClick: ()=>onChange(number),
                        children: number
                    }, number, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 484,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/TestApp.tsx",
                lineNumber: 482,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reflection-caption",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "совсем нет"
                    }, void 0, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 492,
                        columnNumber: 43
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "точно да"
                    }, void 0, false, {
                        fileName: "[project]/components/TestApp.tsx",
                        lineNumber: 492,
                        columnNumber: 66
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TestApp.tsx",
                lineNumber: 492,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TestApp.tsx",
        lineNumber: 480,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_1y5q0a-._.js.map