export default {
  'resources.title': 'リソース',
  'resources.nodes': 'ノード',
  'resources.button.create': 'ワーカーを追加',
  'resources.button.edit': 'ワーカーを編集',
  'resources.button.edittags': 'ラベルを編集',
  'resources.button.update': 'ラベルを更新',
  'resources.table.labels': 'ラベル',
  'resources.table.hostname': 'ホスト名',
  'resources.table.key.tips': '同じキーが存在します。',
  'resources.form.label': 'ラベル',
  'resources.form.advanced': '詳細設定',
  'resources.form.enablePartialOffload': 'CPUオフロードを許可',
  'resources.form.placementStrategy': '配置戦略',
  'resources.form.workerSelector': 'ワーカーセレクター',
  'resources.form.enableDistributedInferenceAcrossWorkers':
    'ワーカー間の分散推論を許可',
  'resources.form.spread.tips':
    'クラスター全体のリソースをすべてのワーカー間で比較的均等に分配します。これにより、単一のワーカーでリソースの断片化が発生する可能性があります。',
  'resources.form.binpack.tips':
    'クラスターリソースの全体的な利用率を優先し、ワーカー/GPU上のリソース断片化を減らします。',
  'resources.form.workerSelector.description':
    'システムは、事前定義されたラベルに基づいて、モデルインスタンスをデプロイするために最適なGPUまたはワーカーを選択します。',
  'resources.table.ip': 'IP',
  'resources.table.cpu': 'CPU',
  'resources.table.memory': 'メモリ',
  'resources.table.gpu': 'GPU',
  'resources.table.disk': 'ストレージ',
  'resources.table.vram': 'VRAM',
  'resources.table.index': 'インデックス',
  'resources.table.workername': 'ワーカー名',
  'resources.table.vender': 'ベンダー',
  'resources.table.temperature': '温度',
  'resources.table.core': 'コア数',
  'resources.table.utilization': '利用率',
  'resources.table.gpuutilization': 'GPU利用率',
  'resources.table.vramutilization': 'VRAM利用率',
  'resources.table.total': '合計',
  'resources.table.used': '使用済み',
  'resources.table.allocated': '割り当て済み',
  'resources.table.wokers': 'ワーカー',
  'resources.worker.linuxormaxos': 'LinuxまたはMacOS',
  'resources.table.unified': '統合メモリ',
  'resources.worker.add.step1':
    'Get Token <span class="note-text">(Run on the server)</span>',
  'resources.worker.add.step2': 'ワーカーを登録',
  'resources.worker.add.step2.tips':
    'Note: run on the worker to be added, <span style="color: #000;font-weight: 600">mytoken</span> is the token obtained in the first step.',
  'resources.worker.add.step3':
    '成功後、ワーカーリストを更新して新しいワーカーを確認してください。',
  'resources.worker.container.supported':
    'MacOSまたはWindowsはサポートされていません。',
  'resources.worker.current.version': '現在のバージョンは {version} です。',
  'resources.worker.driver.install':
    'GPUStackをインストールする前に、必要なすべてのドライバーとライブラリがシステムにインストールされていることを確認してください。',
  'resources.worker.select.command':
    'ラベルを選択してコマンドを生成し、コピーを使用してコマンドをコピーします。',
  'resources.worker.script.install': 'スクリプトインストール',
  'resources.worker.container.install': 'コンテナインストール（Linuxのみ）',
  'resources.worker.cann.tips': `<span style='color: #000;font-weight: 600'>ASCEND_VISIBLE_DEVICES</span> を必要なGPUインデックスに設定します。GPU0からGPU3の場合、<span style='color: #000;font-weight: 600'>ASCEND_VISIBLE_DEVICES=0,1,2,3</span> または <span style='color: #000;font-weight: 600'>ASCEND_VISIBLE_DEVICES=0-3</span> を使用します。`,
  'resources.modelfiles.form.path': 'Storage path',
  'resources.modelfiles.modelfile': 'Model Files',
  'resources.modelfiles.download': 'Add Model File',
  'resources.modelfiles.size': 'Size',
  'resources.modelfiles.selecttarget': 'Select Target',
  'resources.modelfiles.form.localdir': 'Local Directory',
  'resources.modelfiles.form.localdir.tips':
    'The default storage directory is <span class="desc-block">/var/lib/gpustack/cache</span> or the directory specified with <span class="desc-block">--data-dir</span>.',
  'resources.modelfiles.retry.download': 'Retry Download',
  'resources.modelfiles.storagePath.holder':
    'Waiting for download to complete...',
  'resources.filter.worker': 'Filter by Worker',
  'resources.filter.source': 'Filter by Source',
  'resources.modelfiles.delete.tips': 'Also delete the file from disk!',
  'resources.modelfiles.copy.tips': 'Copy Full Path'
};

// ========== To-Do: Translate Keys (Remove After Translation) ==========
// 1. 'resources.modelfiles.form.path',
// 2. 'resources.modelfiles.modelfile',
// 3. 'resources.modelfiles.download',
// 4. 'resources.modelfiles.size',
// 5. 'resources.modelfiles.selecttarget',
// 6. 'resources.modelfiles.form.localdir',
// 7. 'resources.modelfiles.form.localdir.tips',
// 8. 'resources.modelfiles.retry.download',
// 9. 'resources.modelfiles.storagePath.holder',
// 10. 'resources.filter.worker',
// 11. 'resources.filter.source',
// 12. 'resources.modelfiles.delete.tips',
// 13. 'resources.worker.add.step1',
// 14. 'resources.worker.add.step2.tips',
// 15. 'resources.modelfiles.copy.tips',
// ========== End of To-Do List ==========
