export default {
  'models.button.deploy': '部署模型',
  'models.title': '模型',
  'models.title.edit': '编辑模型',
  'models.table.models': '模型',
  'models.table.name': '模型名称',
  'models.form.source': '来源',
  'models.form.repoid': '仓库 ID',
  'models.form.repoid.desc': '只支持 .gguf 格式',
  'models.form.filename': '文件名',
  'models.form.replicas': '副本数',
  'models.form.selector': '选择器',
  'models.form.env': '环境变量',
  'models.form.configurations': '配置',
  'models.form.s3address': 'S3 地址',
  'models.form.partialoffload.tips':
    '启用 CPU 卸载时，如果 GPU 资源不足，则模型的一部分层将被卸载到 CPU 上，在没有 GPU 可用时，会使用纯 CPU 推理。',
  'models.form.distribution.tips':
    '允许在单个 Worker 资源不足时，将部分计算卸载到一个或多个远程 Worker。',
  'models.openinplayground': '在 Playground 中打开',
  'models.instances': '实例',
  'models.table.replicas.edit': '调整副本数',
  'model.form.ollama.model': 'Ollama 模型',
  'model.form.ollamaholder': '请选择或输入模型名称',
  'model.deploy.sort': '排序',
  'model.deploy.search.placeholder': '按 <kbd>/</kbd> 开始从 {source} 搜索模型',
  'model.form.ollamatips':
    '提示：以下为 GPUStack 预设的 Ollama 模型，请选择你想要的模型或者直接在右侧表单 【{name}】 输入框中输入你要部署的模型。',
  'models.sort.name': '名称',
  'models.sort.size': '大小',
  'models.sort.likes': '点赞量',
  'models.sort.trending': '趋势',
  'models.sort.downloads': '下载量',
  'models.sort.updated': '更新时间',
  'models.search.result': '{count} 个结果',
  'models.data.card': '模型简介',
  'models.available.files': '可用文件',
  'models.viewin.hf': '在 Hugging Face 中查看',
  'models.viewin.modelscope': '在 ModelScope 中查看',
  'models.architecture': '架构',
  'models.search.noresult': '未找到相关模型',
  'models.search.nofiles': '无可用文件',
  'models.search.networkerror': '网络连接异常!',
  'models.search.hfvisit': '请确保您可以访问',
  'models.search.unsupport': '暂不支持该模型，部署后可能无法使用',
  'models.form.categories': '模型类别',
  'models.form.scheduletype': '调度方式',
  'models.form.scheduletype.auto': '自动',
  'models.form.scheduletype.manual': '手动',
  'models.form.scheduletype.auto.tips':
    '自动根据当前资源情况部署模型实例到合适的 GPU/Worker。',
  'models.form.scheduletype.manual.tips':
    '手动调度可指定模型实例部署的 GPU/Worker。',
  'models.form.manual.schedule': '手动调度',
  'models.table.gpuindex': 'GPU 序号',
  'models.table.backend': '后端',
  'models.table.acrossworker': '跨 Worker 推理',
  'models.table.cpuoffload': 'CPU 卸载',
  'models.table.layers': '层',
  'models.form.backend': '后端',
  'models.form.backend_parameters': '后端参数',
  'models.search.gguf.tips':
    'GGUF 模型用 llama-box(支持 Linux, macOS 和 Windows)。',
  'models.search.vllm.tips':
    ' 非 GGUF 的语音模型用 vox-box，其它非 GGUF 的模型用 vLLM(仅支持 x86 Linux)。',
  'models.search.voxbox.tips': '若需部语音模型取消勾选 GGUF 复选框。',
  'models.form.ollamalink': '在 Ollama Library 中查找',
  'models.form.backend_parameters.llamabox.placeholder':
    '例如，--ctx-size=8192',
  'models.form.backend_parameters.vllm.placeholder':
    '例如，--max-model-len=8192',
  'models.form.backend_parameters.vllm.tips': '更多 {backend} 参数说明查看',
  'models.logs.pagination.prev': '上一 {lines} 行',
  'models.logs.pagination.next': '下一 {lines} 行',
  'models.logs.pagination.last': '最后一页',
  'models.logs.pagination.first': '第一页',
  'models.form.localPath': '本地路径',
  'models.form.filePath': '模型路径',
  'models.form.backendVersion': '后端版本',
  'models.form.backendVersion.tips':
    '固定以使用期望的 {backend} 版本，在线环境会自动创建虚拟环境安装对应版本的 {backend}。在 GPUStack 升级后也将保持固定的后端版本。{link}',
  'models.form.gpuselector': 'GPU 选择器',
  'models.form.backend.llamabox':
    '用于 GGUF 格式模型，支持 Linux, macOS 和 Windows',
  'models.form.backend.vllm': '用于非 GGUF 格式模型，仅支持 x86 Linux',
  'models.form.backend.voxbox': '用于非 GGUF 格式的语音模型',
  'models.form.search.gguftips':
    '当 macOS 或 Windows 作 Worker 时勾选 GGUF（搜索语音模型时取消勾选）',
  'models.form.button.addlabel': '添加标签',
  'models.filter.category': '按类别筛选',
  'models.list.more.logs': '查看更多',
  'models.catalog.release.date': '发布日期',
  'models.localpath.gguf.tips.title': 'GGUF 格式模型',
  'models.localpat.safe.tips.title': 'safetensors 格式模型',
  'models.localpath.shared.tips.title': '分片的 GGUF 格式模型',
  'models.localpath.gguf.tips': '指向模型文件，例如 /data/models/model.gguf',
  'models.localpath.safe.tips':
    '指向包含 .safetensors, config.json 文件的模型目录，例如 /data/models/model/',
  'models.localpath.chunks.tips':
    '指向模型第一个分片文件，例如 /data/models/model-00001-of-00004.gguf',
  'models.form.replicas.tips': '多副本数实现 { api } 接口推理请求的负载均衡',
  'models.table.list.empty': '暂无已部署模型',
  'models.table.list.getStart':
    '<span style="margin-right: 5px;font-size: 13px;">一键部署</span><span style="font-size: 14px;font-weight: 700">DeepSeek-R1-Distill-Qwen-1.5B</span><span style="margin-left: 5px;font-size: 13px;">立即使用！</span>',
  'models.table.llamaAcrossworker': 'Llama-box 跨节点',
  'models.table.vllmAcrossworker': 'vLLM 跨节点',
  'models.form.releases': '版本',
  'models.form.moreparameters': '参数说明',
  'models.table.vram.allocated': '分配显存',
  'models.form.backend.warning': 'GGUF 格式模型后端用 llama-box。',
  'models.form.ollama.warning': '部署 Ollama 模型后端使用 llama-box。',
  'models.form.backend.warning.llamabox':
    '要使用 llama-box 后端，请指定模型文件的完整路径（例如：<span style="font-weight: 700">/data/models/model.gguf</span>）。对于分片模型，请提供第一个分片的路径（例如：<span style="font-weight: 700">/data/models/model-00001-of-00004.gguf</span>）。',
  'models.form.keyvalue.paste':
    '粘贴多行文本，每行包含一个键值对，键和值之间用 = 号分隔，不同的键值对之间用换行符分隔。',
  'models.form.files': '文件',
  'models.table.status': '状态',
  'models.form.submit.anyway': '仍然提交',
  'models.form.evaluating': '评估模型兼容性中...',
  'models.form.incompatible': '检测到不兼容',
  'models.form.restart.onerror': '错误时重启',
  'models.form.restart.onerror.tips': '当发生错误时，将自动尝试恢复',
  'models.form.check.params': '正在校验配置...',
  'models.form.check.passed': '兼容性检查通过',
  'models.form.check.claims': '该模型大约需要 {vram} 显存和 {ram} 内存。',
  'models.form.update.tips': '更改仅在删除并重新创建实例后生效。'
};
