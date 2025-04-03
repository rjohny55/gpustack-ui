export default {
  'resources.title': '资源',
  'resources.button.create': '添加 Worker',
  'resources.button.edit': '编辑 Worker',
  'resources.button.edittags': '编辑标签',
  'resources.button.update': '更新标签',
  'resources.nodes': '节点',
  'resources.table.hostname': '主机名',
  'resources.table.key.tips': '存在相同的 key.',
  'resources.form.label': '标签',
  'resources.table.labels': '标签',
  'resources.form.advanced': '高级',
  'resources.form.enablePartialOffload': '允许 CPU 卸载',
  'resources.form.placementStrategy': '放置策略',
  'resources.form.workerSelector': 'Worker 选择器',
  'resources.form.enableDistributedInferenceAcrossWorkers':
    '允许跨 worker 分布式推理',
  'resources.form.spread.tips':
    '使得集群整体的资源在所有 Worker 之间分配得相对均匀。可能会在单个 Worker 上产生较多资源碎片。',
  'resources.form.binpack.tips':
    '优先考虑整体集群的资源最大化利用，减少 Worker/GPU 上的资源碎片。',
  'resources.form.workerSelector.description':
    '系统在部署模型实例时，会根据预定义的标签来选择最符合要求的 GPU 或 Worker。',
  'resources.table.ip': 'IP',
  'resources.table.cpu': 'CPU',
  'resources.table.memory': '内存',
  'resources.table.gpu': 'GPU',
  'resources.table.disk': '磁盘',
  'resources.table.vram': '显存',
  'resources.table.index': '序号',
  'resources.table.workername': '节点名称',
  'resources.table.vender': '厂商',
  'resources.table.temperature': '温度',
  'resources.table.core': '核数',
  'resources.table.gpuutilization': 'GPU 利用率',
  'resources.table.vramutilization': '显存利用率',
  'resources.table.utilization': '利用率',
  'resources.table.total': '总量',
  'resources.table.used': '已用',
  'resources.table.allocated': '已分配',
  'resources.table.wokers': 'workers',
  'resources.table.unified': '统一内存',
  'resources.worker.linuxormaxos': 'Linux 或 MacOS',
  'resources.worker.add.step1':
    '获取 Token <span class="note-text">(在 server 上运行)</span>',
  'resources.worker.add.step2': '注册 Worker',
  'resources.worker.add.step2.tips':
    '注意：在需要添加的 worker 上运行，<span style="color: #000;font-weight: 600">mytoken</span> 为第一步获取到的 Token',
  'resources.worker.add.step3': '成功后，刷新 worker 列表即可看到新的 worker',
  'resources.worker.container.supported': '不支持 MacOS 和 Windows',
  'resources.worker.current.version': '当前版本为 {version}',
  'resources.worker.select.command': '选择一个标签生成命令并使用复制按钮复制',
  'resources.worker.driver.install':
    '在安装 GPUStack 之前，确保系统上安装了所有必需的驱动程序和库',
  'resources.worker.script.install': '脚本安装',
  'resources.worker.container.install': '容器安装(仅支持 Linux)',
  'resources.worker.cann.tips':
    '按需要挂载的 GPU index 设置 <span style="color: #000;font-weight: 600">ASCEND_VISIBLE_DEVICES</span>，如需挂载 GPU0 - GPU3，则设为 <span style="color: #000;font-weight: 600">ASCEND_VISIBLE_DEVICES=0,1,2,3</span> 或 <span style="color: #000;font-weight: 600">ASCEND_VISIBLE_DEVICES=0-3</span>',
  'resources.modelfiles.form.path': '存储路径',
  'resources.modelfiles.modelfile': '模型文件',
  'resources.modelfiles.download': '添加模型文件',
  'resources.modelfiles.size': '文件大小',
  'resources.modelfiles.selecttarget': '选择目标位置',
  'resources.modelfiles.form.localdir': '本地目录',
  'resources.modelfiles.form.localdir.tips':
    '默认存储目录为 <span class="desc-block">/var/lib/gpustack/cache</span>，或使用 <span class="desc-block">--cache-dir</span> 指定的目录',
  'resources.modelfiles.retry.download': '重新下载',
  'resources.modelfiles.storagePath.holder': '等待下载完成...',
  'resources.filter.worker': '按 worker 筛选',
  'resources.filter.source': '按来源筛选',
  'resources.modelfiles.delete.tips': '同时从磁盘删除文件！',
  'resources.modelfiles.copy.tips': '复制完整路径',
  'resources.filter.path': '路径查询'
};
