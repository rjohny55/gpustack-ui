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
  'resources.worker.add.step1': '获取 Token',
  'resources.worker.add.step2': '注册 Worker',
  'resources.worker.add.step2.tips':
    '注意：<span style="color: #000;font-weight: 600">mytoken</span> 为第一步获取到的 Token',
  'resources.worker.add.step3': '成功后，刷新 worker 列表即可看到新的 worker',
  'resources.worker.container.supported': '不支持 Windows',
  'resources.worker.current.version': '当前版本为 {version}',
  'resources.worker.select.command': '选择一个标签生成命令并使用复制按钮复制',
  'resources.worker.script.install': '脚本安装',
  'resources.worker.container.install': '容器安装'
};
