export default {
  'models.button.deploy': 'Развернуть модель',
  'models.title': 'Модели',
  'models.title.edit': 'Редактировать модель',
  'models.table.models': 'модели',
  'models.table.name': 'Название модели',
  'models.form.source': 'Источник',
  'models.form.repoid': 'ID репозитория',
  'models.form.repoid.desc': 'Поддерживается только формат .gguf',
  'models.form.filename': 'Имя файла',
  'models.form.replicas': 'Реплики',
  'models.form.selector': 'Селектор',
  'models.form.env': 'Переменные окружения',
  'models.form.configurations': 'Конфигурации',
  'models.form.s3address': 'S3-адрес',
  'models.form.partialoffload.tips':
    'При включении CPU оффлоудинга GPUStack загружает максимум слоев на GPU для производительности. При нехватке ресурсов GPU часть слоев переносится на CPU. Полная CPU-инференция используется только при отсутствии GPU.',
  'models.form.distribution.tips':
    'Позволяет распределить вычисления между одним или несколькими удаленными воркерами при нехватке ресурсов одного GPU/воркера.',
  'models.openinplayground': 'Открыть в Песочнице',
  'models.instances': 'инстансы',
  'models.table.replicas.edit': 'Редактировать реплики',
  'model.form.ollama.model': 'Модель Ollama',
  'model.form.ollamaholder': 'Выберите или введите название модели',
  'model.deploy.sort': 'Сортировка',
  'model.deploy.search.placeholder': 'Поиск моделей в {source}',
  'model.form.ollamatips':
    'Подсказка: ниже представлены предустановленные модели Ollama в GPUStack. Выберите нужную или введите модель для развертывания в поле 【{name}】 справа.',
  'models.sort.name': 'По имени',
  'models.sort.size': 'По размеру',
  'models.sort.likes': 'По лайкам',
  'models.sort.trending': 'Популярные',
  'models.sort.downloads': 'По загрузкам',
  'models.sort.updated': 'По обновлению',
  'models.search.result': '{count} результатов',
  'models.data.card': 'Карточка модели',
  'models.available.files': 'Доступные файлы',
  'models.viewin.hf': 'Посмотреть в Hugging Face',
  'models.viewin.modelscope': 'Посмотреть в ModelScope',
  'models.architecture': 'Архитектура',
  'models.search.noresult': 'Связанные модели не найдены',
  'models.search.nofiles': 'Нет доступных файлов',
  'models.search.networkerror': 'Ошибка сетевого подключения!',
  'models.search.hfvisit': 'Убедитесь, что доступен',
  'models.search.unsupport':
    'Модель не поддерживается и может быть нефункциональна после развертывания.',
  'models.form.scheduletype': 'Тип планирования',
  'models.form.categories': 'Категория модели',
  'models.form.scheduletype.auto': 'Авто',
  'models.form.scheduletype.manual': 'Вручную',
  'models.form.scheduletype.auto.tips':
    'Автоматическое развертывание инстансов модели на подходящие GPU/воркеры в зависимости от текущих ресурсов.',
  'models.form.scheduletype.manual.tips':
    'Позволяет вручную указать GPU/воркеры для развертывания инстансов модели.',
  'models.form.manual.schedule': 'Ручное распределение',
  'models.table.gpuindex': 'Индекс GPU',
  'models.table.backend': 'Бэкенды',
  'models.table.acrossworker': 'Распределение по воркерам',
  'models.table.cpuoffload': 'CPU оффлоуд',
  'models.table.layers': 'Слои',
  'models.form.backend': 'Бэкенд',
  'models.form.backend_parameters': 'Параметры бэкенда',
  'models.search.gguf.tips':
    'GGUF-модели используют llama-box (поддерживает Linux, macOS и Windows).',
  'models.search.vllm.tips':
    'Не-GGUF модели используют vox-box для аудио и vLLM (только x86 Linux) для остальных.',
  'models.search.voxbox.tips':
    'Для развертывания аудиомодели снимите отметку GGUF.',
  'models.form.ollamalink': 'Больше моделей в библиотеке Ollama',
  'models.form.backend_parameters.llamabox.placeholder':
    'например: --ctx-size=8192',
  'models.form.backend_parameters.vllm.placeholder':
    'например: --max-model-len=8192',
  'models.form.backend_parameters.vllm.tips':
    'Подробнее о параметрах {backend}',
  'models.logs.pagination.prev': 'Предыдущие {lines} строк',
  'models.logs.pagination.next': 'Следующие {lines} строк',
  'models.logs.pagination.last': 'Последняя страница',
  'models.logs.pagination.first': 'Первая страница',
  'models.form.localPath': 'Локальный путь',
  'models.form.filePath': 'Путь к модели',
  'models.form.backendVersion': 'Версия бэкенда',
  'models.form.backendVersion.tips':
    'Чтобы использовать желаемую версию {backend}, система автоматически создаст виртуальную среду в онлайн-окружении для установки соответствующей версии. После обновления GPUStack версия бэкенда останется зафиксированной. {link}',
  'models.form.gpuselector': 'Селектор GPU',
  'models.form.backend.llamabox':
    'Для моделей формата GGUF. Поддержка Linux, macOS и Windows.',
  'models.form.backend.vllm': 'Для моделей не-GGUF формата. Только x86 Linux.',
  'models.form.backend.voxbox': 'Для аудиомоделей не-GGUF формата.',
  'models.form.search.gguftips':
    'Для воркеров на macOS/Windows отметьте GGUF (для аудиомоделей снимите).',
  'models.form.button.addlabel': 'Добавить метку',
  'models.filter.category': 'Фильтр по категориям',
  'models.list.more.logs': 'Показать больше',
  'models.catalog.release.date': 'Дата выпуска',
  'models.localpath.gguf.tips.title': 'Модель формата GGUF',
  'models.localpat.safe.tips.title': 'Модель формата Safetensors',
  'models.localpath.shared.tips.title': 'Шардированная GGUF-модель',
  'models.localpath.gguf.tips':
    'Укажите файл модели, например: /data/models/model.gguf.',
  'models.localpath.safe.tips':
    'Укажите директорию модели с файлами .safetensors и config.json.',
  'models.localpath.chunks.tips':
    'Укажите первый шард модели, например: /data/models/model-00001-of-00004.gguf.',
  'models.form.replicas.tips':
    'Несколько реплик обеспечивают балансировку нагрузки для { api } запросов.',
  'models.table.list.empty': 'Модели отсутствуют!',
  'models.table.list.getStart':
    '<span style="margin-right: 5px;font-size: 13px;">Начните работу с</span> <span style="font-size: 14px;font-weight: 700">DeepSeek-R1-Distill-Qwen-1.5B</span>',
  'models.table.llamaAcrossworker': 'Llama-box между воркерами',
  'models.table.vllmAcrossworker': 'vLLM между воркерами',
  'models.form.releases': 'Релизы',
  'models.form.moreparameters': 'Описание параметров',
  'models.table.vram.allocated': 'Выделенная VRAM',
  'models.form.backend.warning':
    'Бэкенд для моделей формата GGUF использует llama-box.',
  'models.form.ollama.warning':
    'Чтобы развернуть бэкенд для моделей Ollama с использованием llama-box , выполните следующие шаги.',
  'models.form.backend.warning.llamabox':
    'Чтобы использовать бэкенд llama-box , укажите полный путь к файлу модели (например,<span style="font-weight: 700">/data/models/model.gguf</span>). Для шардированных моделей укажите путь к первому шарду (например,<span style="font-weight: 700">/data/models/model-00001-of-00004.gguf</span>).',
  'models.form.keyvalue.paste':
    'Вставьте несколько строк текста, где каждая строка содержит пару ключ-значение. Ключ и значение разделяются знаком равенства (=), а разные пары — символами новой строки.',
  'models.form.files': 'файлы',
  'models.table.status': 'Status',
  'models.form.submit.anyway': 'Submit Anyway',
  'models.form.evaluating': 'Evaluating Model Compatibliity',
  'models.form.incompatible': 'Incompatibility Detected',
  'models.form.restart.onerror': 'Auto-Restart On Error',
  'models.form.restart.onerror.tips':
    'When an error occurs, it will automatically attempt to restart.',
  'models.form.check.params': 'Checking configuration...'
};

// ========== To-Do: Translate Keys (Remove After Translation) ==========
// 1. models.table.status,
// 2. 'models.form.submit.anyway',
// 3. 'models.form.evaluating',
// 4. 'models.form.incompatible',
// 5. 'models.form.restart.onerror',
// 6. 'models.form.restart.onerror.tips',
// 7. 'models.form.check.params',
// ========== End of To-Do List ==========
