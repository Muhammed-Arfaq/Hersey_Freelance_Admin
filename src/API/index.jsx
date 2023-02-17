import axios from "../axios";

export const allCat = (token) => axios.get("http://localhost:3500/admin/categories", { headers: { Authorization: `Bearer ${token}` } })

export const dltCat = (id, token) => axios.post(`http://localhost:3500/admin/deleteCategory/${id}`, { headers: { Authorization: `Bearer ${token}` } })

export const addCat = (name, token) => axios.post("http://localhost:3500/admin/addCategory", {name}, { headers: { Authorization: `Bearer ${token}` } })

export const allUser = (token) => axios.get("http://localhost:3500/admin/userManagement", { headers: { Authorization: `Bearer ${token}` } })

export const blckUser = (id, token) => axios.post(`http://localhost:3500/admin/blockUser/${id}`, { headers: { Authorization: `Bearer ${token}` } })

export const unblckUser = (id, token) => axios.post(`http://localhost:3500/admin/unBlockUser/${id}`, { headers: { Authorization: `Bearer ${token}` } })

export const allVndr = (token) => axios.get("http://localhost:3500/admin/vendorManagement", { headers: { Authorization: `Bearer ${token}` } })

export const approveVndr = (id, token) => axios.post(`http://localhost:3500/admin/approveVendor/${id}`, { headers: { Authorization: `Bearer ${token}` } })

export const blockVndr = (id, token) => axios.post(`http://localhost:3500/admin/blockVendor/${id}`, { headers: { Authorization: `Bearer ${token}` } })