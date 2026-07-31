ОБНОВЛЕНИЕ itpy-proftest

Что изменится:
1. На странице результата появится кнопка «Пройти тест заново».
2. Кнопка полностью очищает сохранённый прогресс и возвращает на начало теста.
3. Переключатель «Для ученика / Для родителя» удалён.
4. Блок «Поделиться» удалён со страницы результата.
5. Остаётся только заключение для человека, который прошёл тест.

КАК ПРИМЕНИТЬ ЧЕРЕЗ КОМАНДНУЮ СТРОКУ

1. Скопируйте файл itpy-proftest_restart_student-only.patch в корень проекта,
   где находятся package.json и папки app, components, lib.

2. Откройте командную строку в папке проекта.

3. Проверьте патч:
   git apply --check itpy-proftest_restart_student-only.patch

4. Примените патч:
   git apply itpy-proftest_restart_student-only.patch

5. Проверьте сборку:
   npm run build

6. Запустите сайт:
   npm run dev

7. После проверки отправьте изменения на GitHub:
   git add components/ResultView.tsx components/TestApp.tsx app/globals.css README.md
   git commit -m "Add test restart and remove parent result view"
   git push

ОТМЕНА ДО КОММИТА

git restore components/ResultView.tsx components/TestApp.tsx app/globals.css README.md
