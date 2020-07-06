import request from "@/utils/axios";

export function getLoginImgCode() {
  return request({
    url: "/auth/captcha",
    method: "get",
  });
}

export function getMenu(params) {
  return request({
    url: "/resource/menu",
    method: "post",
    data: params,
  });
}
//登陆
export function login(params) {
  return request({
    url: "/auth/login",
    method: "post",
    data: params,
  });
}
//物品录入
export function inputArticle(params) {
  return request({
    url: "/article/input-article",
    method: "post",
    data: params,
  });
}
//供应商录入
export function inputCustomerOne(params) {
  return request({
    url: "/input-customer",
    method: "post",
    data: params,
  });
}
//客户录入
export function inputCustomerZero(params) {
  return request({
    url: "/input-customer",
    method: "post",
    data: params,
  });
}

//商品名称Id查询
export function articleOfSelect(params) {
  return request({
    url: "/article/article-of-select",
    method: "get",
    data: params,
  });
}
//入库商品数量登记
export function inputEnterArticle(params) {
  return request({
    url: "/article/input-enter-article",
    method: "post",
    data: params,
  });
}
//出库商品数量登记
export function inputOutArticle(params) {
  return request({
    url: "/article/input-out-article",
    method: "post",
    data: params,
  });
}
//分页查询入库商品数量
export function queryEnter(params) {
  return request({
    url: "/article/query-enter",
    method: "post",
    data: params,
  });
}
//分页查询出库商品数量
export function queryOut(params) {
  return request({
    url: "/article/query-out",
    method: "post",
    data: params,
  });
}
//物品库存清单列表
export function queryStock(params) {
  return request({
    url: "/article/query-stock",
    method: "post",
    data: params,
  });
}

export function logout(params) {
  return request({
    url: "/user/logout",
    method: "get",
    data: params,
  });
}
export function getUserInfo(params) {
  return request({
    url: "/user/info/get",
    method: "get",
    data: params,
  });
}

export function getUserList(reqData) {
  return request({
    url: "/user/list/get",
    method: "get",
    data: reqData,
  });
}
