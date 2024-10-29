// install bcrypt
import bcrypt from 'bcryptjs'

export const encryptPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10)
    return hash
}

export const comparePassword = async (password, hash) => {
    const result = await bcrypt.compare(password, hash)
    return result
}