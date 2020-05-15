import { expect } from 'chai'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ShowEstablishment from '@/components/ShowEstablishment.vue'

describe('ShowEstablishment.vue', () => {
  it("shows a business and it's attibutes", () => {
    
    let establishment = {
      name: 'Beth Israel Deaconess Medical Center',
      address: '330 Brookline Ave, Boston, MA',
      slug: 'Beth-Israel-Deaconess-Medical-Center"',
      description: 'Beth Israel Deaconess Medical Center in Boston, Massachusetts is a teaching hospital of Harvard Medical School.'

    }
    const wrapper = shallowMount(ShowEstablishment, {
      propsData: { establishment },
      stubs: {
       RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.text()).to.include(establishment.name)
  })
})
