
export const Qu = [
    "ดูภาพรวม",
    "ใบเสนอราคา",
    "ใบแจ้งหนี้",
    "ใบเสร็จรับเงิน",
    "ใบกำกับภาษีขาย",
    "ใบลดหนี้",
    "ใบเพิ่มหนี้",
    "ใบวางบิล",
    "นำเข้าเอกสาร"
];

export const poMenu = [
    "สร้าง",
    "อนุมัติแล้ว",
    "รออนุมัติ",
    "ดูทั้งหมด"
];

export function LoginWithPageSession(username, password) {
    cy.session([username, password], () => {
        cy.visit("/")
        cy.get('[name="email"]').type(username)
        cy.get('[name="password"]').type(password)
        cy.get('div[id="checkbox"]> input').should("be.checked")
        cy.get('[class="primary"]').click()
        cy.get('#SelectListBox> div > div[class="lists"] > div').eq(0).click()
    })
}

export function getMonth() {
    const date = new Date
    let month = date.getMonth()
    if (month < 10) {
        return `0${month + 1}`
    }
}

export function addDate(day = 0) {
    const date = new Date()
    date.setDate(date.getDate() + day)
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })
}