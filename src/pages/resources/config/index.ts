import { StatusMaps } from '@/config';

export const WorkerStatusMap = {
  ready: 'ready',
  not_ready: 'not_ready'
};

export const WorkerStatusMapValue = {
  [WorkerStatusMap.ready]: 'Ready',
  [WorkerStatusMap.not_ready]: 'Not Ready'
};

export const status: any = {
  [WorkerStatusMap.ready]: StatusMaps.success,
  [WorkerStatusMap.not_ready]: StatusMaps.error
};

export const addWorkerGuide: Record<string, any> = {
  mac: {
    getToken: 'cat /var/lib/gpustack/token',
    registerWorker(params: { server: string; token: string }) {
      return `curl -sfL https://get.gpustack.ai | sh -s - --server-url ${params.server} --token ${params.token}`;
    }
  },
  win: {
    getToken:
      'Get-Content -Path (Join-Path -Path $env:APPDATA -ChildPath "gpustack\\token") -Raw',
    registerWorker(params: { server: string; token: string }) {
      return `Invoke-Expression "& { $((Invoke-WebRequest -Uri "https://get.gpustack.ai" -UseBasicParsing).Content) } --server-url ${params.server} --token ${params.token}"`;
    }
  },
  cuda: {
    getToken:
      'Get-Content -Path (Join-Path -Path $env:APPDATA -ChildPath "gpustack\\token") -Raw',
    registerWorker(params: {
      server: string;
      tag: string;
      token: string;
      workerip: string;
    }) {
      return `docker run -d --name gpustack-worker --restart=unless-stopped --gpus all -p 10150:10150 -p 40000-41024:40000-41024 -p 50000-51024:50000-51024 --ipc=host -v gpustack-worker-data:/var/lib/gpustack gpustack/gpustack:${params.tag} --server-url ${params.server} --token ${params.token} --worker-ip ${params.workerip}`;
    }
  },
  npu: {
    getToken:
      'Get-Content -Path (Join-Path -Path $env:APPDATA -ChildPath "gpustack\\token") -Raw',
    registerWorker(params: {
      server: string;
      tag: string;
      token: string;
      workerip: string;
    }) {
      return `docker run -d --name gpustack-worker --restart=unless-stopped -e ASCEND_VISIBLE_DEVICES=0 -p 10150:10150 -p 40000-41024:40000-41024 -p 50000-51024:50000-51024 --ipc=host -v gpustack-worker-data:/var/lib/gpustack gpustack/gpustack:${params.tag} --server-url ${params.server} --token ${params.token} --worker-ip ${params.workerip}`;
    }
  },
  musa: {
    getToken:
      'Get-Content -Path (Join-Path -Path $env:APPDATA -ChildPath "gpustack\\token") -Raw',
    registerWorker(params: {
      server: string;
      tag: string;
      token: string;
      workerip: string;
    }) {
      return `docker run -d --name gpustack-worker --restart=unless-stopped -p 10150:10150 -p 40000-41024:40000-41024 -p 50000-51024:50000-51024 --ipc=host -v gpustack-worker-data:/var/lib/gpustack gpustack/gpustack:${params.tag} --server-url ${params.server} --token ${params.token} --worker-ip ${params.workerip}`;
    }
  },
  cpu: {
    getToken:
      'Get-Content -Path (Join-Path -Path $env:APPDATA -ChildPath "gpustack\\token") -Raw',
    registerWorker(params: {
      server: string;
      tag: string;
      token: string;
      workerip: string;
    }) {
      return `docker run -d --name gpustack-worker --restart=unless-stopped -p 10150:10150 -p 40000-41024:40000-41024 -p 50000-51024:50000-51024 --ipc=host -v gpustack-worker-data:/var/lib/gpustack gpustack/gpustack:${params.tag} --server-url ${params.server} --token ${params.token} --worker-ip ${params.workerip}`;
    }
  },
  rocm: {
    registerWorker(params: {
      server: string;
      tag: string;
      token: string;
      workerip: string;
    }) {
      return `docker run -d --name gpustack-worker --restart=unless-stopped -p 10150:10150 -p 40000-41024:40000-41024 -p 50000-51024:50000-51024 --ipc=host --group-add=video --security-opt seccomp=unconfined --device /dev/kfd --device /dev/dri -v gpustack-worker-data:/var/lib/gpustack gpustack/gpustack:${params.tag} --server-url ${params.server} --token ${params.token} --worker-ip ${params.workerip}`;
    }
  },
  container: {
    getToken:
      'docker run -it ${gpustack_container_id} cat /var/lib/gpustack/token'
  }
};

export const containerInstallOptions = [
  { label: 'CUDA', value: 'cuda' },
  { label: 'AMD', value: 'rocm' },
  { label: 'CANN', value: 'npu' },
  { label: 'MUSA', value: 'musa' },
  { label: 'CPU', value: 'cpu' }
];
