import { Request } from '@/common/request';
import { PageParams } from '@/common/models';
import { SystemItem } from '@/models/system';

/** 获取规则列表 GET /api/system/list */
export async function getSystemList(params?: {}, options?: { [key: string]: any }) {
  return Request.getPage<SystemItem>('/api/iam/system/list', <PageParams>params, options);
}

/** 获取规则列表 GET /api/system/label */
export async function getSystemSelect(params?: {}, options?: { [key: string]: any }) {
  return await Request.getConvertTree<SystemItem>(
    '/api/iam/system/select',
    <PageParams>params,
    (value) => {
      return { label: value.name, key: value.id };
    },
    options,
  );
}

/** 获取规则列表 GET /api/system/details */
export async function getSystemDetails(
  params: { id: number | undefined },
  options?: { [key: string]: any },
) {
  if (params.id === undefined) {
    return undefined;
  }
  return Request.get<SystemItem>('/api/iam/system/details', params, options);
}

/** 保存（新增和更新）系统 POST /api/system/save */
export async function saveSystem(data: SystemItem) {
  return Request.post('/api/iam/system/save', data);
}

/** 删除系统 DELETE /api/system/delete */
export async function deleteSystem(id: number, options?: { [key: string]: any }) {
  if (id === undefined) {
    return undefined;
  }
  return Request.delete(`/api/iam/system/delete/${id}`, options);
}
