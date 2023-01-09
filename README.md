# BIENVENIDOS A LOS COMPONENTES DE DENGEL
===

## COMPONENTES NAV
1. **NavMobileTypeOne**
    - **openMenu:** Es para abrir el menú del responsive y mejorar la accesesibilidad de el responsive **mobile**
    - **children:** Puedes agregar cualquier elemento como por ejemplo en next js Link

    `
    <NavMobileTypeOne openMenu={openMenu}>
    
    </NavMobileTypeOne>
    
    `

## COMPONENTES HEADER
1. **HeaderMobileTypeOne**

    - **openMenu:** Es para abrir el menú del responsive **mobile**
    - **setOpenMenu:** Es una función para obtener el estado si es **falso** o **true** de la constante **openMenu**
    - **children:** Puedes agregar cualquier elemento
    - **colorHeader:** No es obligatorio añadir color de fondo de tu elemento header.
    - **logo:** Añada elemento img o en caso de next js Image. 

    
    `
    <HeaderMobileTypeOne logo={<img alt="img" src="#" className='text-white'/>} colorHeader='bg-sky-800' openMenu={openMenu} setOpenMenu={()=>setOpenMenu(!openMenu)}>
    </HeaderMobileTypeOne>
    `
    ***IMPORTANTE: openMenu y setOpenMenu deben ser creados por usted mismo ya sea con useState o context o como a usted le guste.***