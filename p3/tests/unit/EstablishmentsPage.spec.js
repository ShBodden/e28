import { expect } from 'chai'
import { mount, RouterLinkStub } from '@vue/test-utils'
import EstablishmentsPage from '@/components/pages/EstablishmentsPage.vue'

describe('EstablishmentsPage.vue', () => {
   

        let establishment = {
            name: 'Beth Israel Deaconess Medical Center',
            address: '330 Brookline Ave, Boston, MA',
            slug: 'Beth-Israel-Deaconess-Medical-Center"',
            description: 'Beth Israel Deaconess Medical Center in Boston, Massachusetts is a teaching hospital of Harvard Medical School.'

        }

        it("shows a business and it's attibutes", () => {
        const wrapper = mount(EstablishmentsPage, {

            computed: {
                establishments: function () {
                    return [establishment]
                }
            },


            stubs: {
                RouterLink: RouterLinkStub
            }
        })

        expect(wrapper.text()).to.include('Establishments');
        expect(wrapper.text()).to.include('Beth Israel Deaconess Medical Center');
    })
})
