#!/usr/bin/env node
import { approveDevicePairing, listDevicePairing } from './dist/infra/device-pairing.js';

const list = await listDevicePairing();
for (const p of list.pending) {
  const r = await approveDevicePairing(p.requestId);
  console.log(p.requestId, r ? 'approved' : 'skip');
}
