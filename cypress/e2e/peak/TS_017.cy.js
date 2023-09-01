import { Qu, poMenu, LoginWithPageSession,addDate,getMonth } from './storge/revenue_identifier.cy';


const openQuotationSubMenu = () => {
    cy.get("#mainNavBarBottom ul li").eq(1).trigger("mouseover", { force: true });
    poMenu.forEach(element => cy.contains(element));
};
const openPoMenu = index => {
    cy.contains(poMenu[index]).click({ force: true });
};


describe("Quotation Tests", () => {
    beforeEach(() => {
        const username = "qakornkorn1111@engine.com";
        const password = "Baby159951";
        LoginWithPageSession(username, password);
    });

    it("row 7-9", () => {
        cy.visit("/");
        cy.get('#SelectListBox > div > div[class="lists"] > div').eq(0).click();
        openQuotationSubMenu();
        Qu.forEach(element => cy.contains(element));
        cy.contains("ใบเสนอราคา").eq(0).trigger("mouseover", { force: true });
        openPoMenu(3);
    });

    it("row10-24", () => {
        cy.visit("/");
        cy.get('#SelectListBox > div > div[class="lists"] > div').eq(0).click();
        cy.wait(1000);
        cy.contains("ใบเสนอราคา").eq(0).trigger("mouseover", { force: true });
        openQuotationSubMenu();
        openPoMenu(0);
        cy.get('h2').eq(0).contains("สร้างใบเสนอราคา")
        cy.get('[placeholder="ระบุเลขที่เอกสาร"]').should('have.value', `QO-2023${getMonth()}00001`);
        cy.get('[name="วันที่ออก"]').should('have.value', addDate());
        cy.get('[name="วันที่ใช้ได้ถึง"]').should('have.value', addDate(7));
        cy.get('#inputDropdownPricingType .multiselect__tags .multiselect__single >div > p').contains("แยกภาษี");
        cy.get('.input .selectInputDropdown  .singleLabel p').contains("THB");
        cy.get('.product.first .quantity .input.blue.hidelabel.textRight [name="text"]').should('be.visible');
        cy.get('#inputPrice ').should('be.visible');
        cy.get('#inputDiscount').should('be.visible');
        cy.get('#dropdownTax').contains("7%");
        cy.get('.netValue').contains("0.00");
        cy.get('[placeholder="ยังไม่ระบุ"]').should('have.value',"ยังไม่ระบุ");
        //  contact #QO-20230800001
        cy.get('.col-6.pr-3 #inputDropdownDataList').then(ele => {
            cy.wrap(ele).click()
            cy.wrap(ele).find('.multiselect__content-wrapper .multiselect__option div div p:eq(0)').click()
        })
        cy.get('.custommerLocation').should('have.text', '999 ถนนรัชดาภิเษก, ดินแดง, ดินแดง, กรุงเทพมหานคร, 10400');
        cy.get('.selectContact p').should('have.attr', 'title', 'ลูกค้าตัวอย่าง');
        //  product #QO-20230800001
        cy.get('[id="inputDropdownV2"] [class="selectInputDropdown noLabel"]:eq(0)').then(ele =>{
            cy.wrap(ele).click()
            cy.wrap(ele).find('[class="multiselect__option"] div div p:eq(0)').click()
        })
        cy.get('.selectProduct p').should('have.attr', 'title', 'P00000 - สินค้าตัวอย่าง');
        cy.get('td #dropdownAccoutId .textSelectedDropdown p').eq(0).should('have.attr', 'title', '410101 ');
        cy.get('#inputDescription textarea').should('have.value','สินค้าตัวอย่าง : สามารถแก้ไขข้อมูลสินค้าได้ที่เมนูสินค้า');
        cy.get('#inputPrice ').should('be.visible');
        cy.get('#inputDiscount').should('be.visible');
        cy.get('#dropdownTax').contains("7%");
        cy.get('.netValue').contains("1,000");
        cy.get('#buttonDropdown .button.purple .buttonDefault > div > p').eq(0).click()
        cy.get('.box.success .text-break').contains("สร้างเอกสาร #QO-20230900001 สำเร็จ ")
        // Edit #QO-20230800001 check
        cy.get('h2').eq(0).contains("แก้ไขใบเสนอราคา")
        cy.get('#headPage > div > div.col-5.draft > div > p').eq(0).contains("ร่าง")
        cy.get('[placeholder="ระบุเลขที่เอกสาร"]').should('have.value',"QO-20230900001");
        cy.get('#buttonDropdown .button.purple .buttonDropdown').eq(0).click()
        cy.get('.dropdown.bottom.right .optionBox .option p').contains("บันทึกร่าง และสร้างใหม่").click({ force: true })
        cy.get('.box.success .text-break').contains("แก้ไขเอกสาร #QO-20230900001 สำเร็จ")

        
         // Save draft and create new
        cy.get('h2').eq(0).contains("สร้างใบเสนอราคา")
        cy.get('[placeholder="ระบุเลขที่เอกสาร"]').should('have.value', `QO-2023${getMonth()}00002`);
        cy.get('[name="วันที่ออก"]').should('have.value', addDate());
        cy.get('[name="วันที่ใช้ได้ถึง"]').should('have.value', addDate(7));
        cy.get('#inputDropdownPricingType .multiselect__tags .multiselect__single >div > p').contains("แยกภาษี");
        cy.get('.input .selectInputDropdown  .singleLabel p').contains("THB");
        cy.get('.product.first .quantity .input.blue.hidelabel.textRight [name="text"]').should('be.visible');
        cy.get('#inputPrice ').should('be.visible');
        cy.get('#inputDiscount').should('be.visible');
        cy.get('#dropdownTax').contains("7%");
        cy.get('.netValue').contains("0.00");
        cy.get('[placeholder="ยังไม่ระบุ"]').should('have.value',"ยังไม่ระบุ");
        //  contact #QO-20230800002
        cy.get('.col-6.pr-3 #inputDropdownDataList').then(ele => {
            cy.wrap(ele).click()
            cy.wrap(ele).find('.multiselect__content-wrapper .multiselect__option div div p:eq(0)').click()
        })
        cy.get('.custommerLocation').should('have.text', '999 ถนนรัชดาภิเษก, ดินแดง, ดินแดง, กรุงเทพมหานคร, 10400');
        cy.get('.selectContact p').should('have.attr', 'title', 'ลูกค้าตัวอย่าง');
        //  product #QO-20230800002
        cy.get('[id="inputDropdownV2"] [class="selectInputDropdown noLabel"]:eq(0)').then(ele =>{
            cy.wrap(ele).click()
            cy.wrap(ele).find('[class="multiselect__option"] div div p:eq(0)').click()
        })
        cy.get('.selectProduct p').should('have.attr', 'title', 'P00000 - สินค้าตัวอย่าง');
        cy.get('td #dropdownAccoutId .textSelectedDropdown p').eq(0).should('have.attr', 'title', '410101 ');
        cy.get('#inputDescription textarea').should('have.value','สินค้าตัวอย่าง : สามารถแก้ไขข้อมูลสินค้าได้ที่เมนูสินค้า');
        cy.get('#inputPrice ').should('be.visible');
        cy.get('#inputDiscount').should('be.visible');
        cy.get('#dropdownTax').contains("7%");
        cy.get('.netValue').contains("1,000");
        cy.get('[class="buttonDefault"]:eq(1)').click()
        cy.get('.box.success .text-break').contains("สร้างเอกสาร #QO-20230900002 สำเร็จ ")
        // #QO-20230800001 check
        cy.get('#HeaderDocumentDetail > div.title > div:nth-child(1) > div.d-flex > h2').contains("ใบเสนอราคา เลขที่")
        cy.get('#HeaderDocumentDetail > div.title > div:nth-child(1) > div.d-flex > h2 > span').contains("#QO-20230900002")
        cy.get('#HeaderDocumentDetail > div.subTitle > div > div.col-2 > div > h3').eq(0).contains("รอตอบรับ")

    });
});



