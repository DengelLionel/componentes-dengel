# BIENVENIDOS A LOS COMPONENTES DE DENGEL
===
**PARA UTILIZAR ESTE PAQUETE ES NECESARIO QUE PARA EMPEZAR CREE UN SU PROYECTO RAIZ LA CARPETA types y en dentro crear el archivo componentes-dengel.d.ts y añada el nombre de sus componentes**
```tsx
declare module 'componentes-dengel' {
  export const HeaderMobileTypeOne: any;
  export const NavMobileTypeOne: any;

}
```
===

## COMPONENTES NAV
1. **NavMobileTypeOne**
    - **openMenu:** Es para abrir el menú del responsive y mejorar la accesesibilidad de el responsive **mobile**
    - **children:** Puedes agregar cualquier elemento como por ejemplo en next js Link

    ```tsx
    <NavMobileTypeOne openMenu={openMenu}>
    
    </NavMobileTypeOne>
    
    ```

## COMPONENTES HEADER
1. **HeaderMobileTypeOne**

    - **openMenu:** Es para abrir el menú del responsive **mobile**
    - **setOpenMenu:** Obtiene el estado si es **false** o **true** de la constante **openMenu**
    - **children:** Puedes agregar cualquier elemento
    - **colorHeader:** No es obligatorio añadir color de fondo de tu elemento header.
    - **logo:** Añada elemento img o en caso de next js Image. 

    
    ```tsx
    <HeaderMobileTypeOne logo={<img alt="img" src="#" className='text-white'/>} colorHeader='bg-sky-800' openMenu={openMenu} setOpenMenu={()=>setOpenMenu(!openMenu)}>
    </HeaderMobileTypeOne>
    ```
2. **HeaderTwo (header principal responsive)**
 - **openMenu:** Es para abrir el menú del responsive **mobile**
 - **logo:** Añada elemento img o en caso de next js Image. 
 - **colorHeader:** No es obligatorio añadir color de fondo de tu elemento header.
  - **setOpenMenu:** Obtiene el estado si es **false** o **true** de la constante **openMenu**
- **children:** Puedes agregar cualquier elemento
- **openMenuDesktop:** Es para abrir el menú pequeño de desktop **desktop 1024px, 1280px en general**
- **setOpenMenuDesktop:** Obtiene el estado si es **false** o **true** de la constante **openMenuDesktop**
-**navDesktopLittle:** El menú pequeño  de desktop
-**LinksNavDesktop** La lista del menú pequeño.

    ***EJEMPLO GENERAL***

    ```tsx
    <HeaderTwo logo={<h2>Dengel</h2>} LinksNavDesktop={<section><h2>mundial</h2></section>} colorHeader='bg-blue-800' openMenuDesktop={openMenuDesktop}  openMenu={openMenu} navDesktopLittle={<NavDesktopTypeTwo colorNavLittleDesktop={"bg-sky-500"}  openMenuDesktop={openMenuDesktop}>
    <h2 className='text-white'>contactos</h2>
    <h2 className='text-white'>profile</h2>
    <h2 className='text-white'>contactos</h2>
    <h2 className='text-white'>profile</h2>
  </NavDesktopTypeTwo>} setOpenMenu={()=>{setOpenMenu(!openMenu)}} setOpenMenuDesktop={()=>{setOpenMenuDesktop(!openMenuDesktop)}}>
    
    <NavMobileTypeTwo colorNavMobile={"bg-red-500"} openMenu={openMenu}>
      <h2 className='text-white'>contactos</h2>
      <h2 className='text-white'>profile</h2>
      <h2 className='text-white'>contactos</h2>
      <h2 className='text-white'>profile</h2>
    </NavMobileTypeTwo>

    
    </HeaderTwo>
    ```
    ***IMPORTANTE: openMenu,setOpenMenu,setOpenMenuDesktop,openMenuDesktop deben ser creados por usted mismo ya sea con useState o context o como a usted le guste.***