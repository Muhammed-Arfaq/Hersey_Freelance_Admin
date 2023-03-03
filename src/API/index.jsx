import axios from "../axios";

export const allCat = (token) => axios.get("/admin/categories", { headers: { Authorization: `Bearer ${token}` } })

export const dltCat = (id, token) => axios.post("/admin/deleteCategory", {id}, { headers: { Authorization: `Bearer ${token}` } })

export const addCat = (name, token) => axios.post("/admin/addCategory", {name}, { headers: { Authorization: `Bearer ${token}` } })

export const allUser = (token) => axios.get("/admin/userManagement", { headers: { Authorization: `Bearer ${token}` } })

export const blckUser = (id, token) => axios.post("/admin/blockUser", {id}, { headers: { Authorization: `Bearer ${token}` } })

export const unblckUser = (id, token) => axios.post("/admin/unBlockUser", {id}, { headers: { Authorization: `Bearer ${token}` } })

export const allVndr = (token) => axios.get("/admin/vendorManagement", { headers: { Authorization: `Bearer ${token}` } })

export const approveVndr = (id, token) => axios.post("/admin/approveVendor", {id}, { headers: { Authorization: `Bearer ${token}` } })

export const blockVndr = (id, token) => axios.post("/admin/blockVendor", {id}, { headers: { Authorization: `Bearer ${token}` } })

export const dashboardCount = (token) => axios.get("/admin/dashboardCount", { headers: { Authorization: `Bearer ${token}` } })

export const recentUsers = (token) => axios.get('/admin/newUsers', { headers: { Authorization: `Bearer ${token}` } })