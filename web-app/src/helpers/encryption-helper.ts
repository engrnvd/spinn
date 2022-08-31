export const encrypt = (text: string, salt: string) => {
  const textToChars = (text: string) => text.split('').map((c) => c.charCodeAt(0))
  const byteHex = (n: any) => ('000' + Number(n).toString(16)).substr(-4)
  const applySaltToChar = (code: any) => textToChars(salt).reduce((a, b) => a ^ b, code)

  if (!text || typeof text !== 'string') return text

  return text
    .split('')
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join('')
}

export const decrypt = (encodedString: any, salt: string) => {
  try {
    if (!encodedString) return encodedString

    const textToChars = (text: string) => text.split('').map((c) => c.charCodeAt(0))
    const applySaltToChar = (code: any) => textToChars(salt).reduce((a, b) => a ^ b, code)
    return encodedString
      .match(/.{1,4}/g)
      .map((hex: any) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode: any) => String.fromCharCode(charCode))
      .join('')
  } catch (e) {
    console.log(`Exception while decrypting (${encodedString}): `, e)
    return ''
  }
}
