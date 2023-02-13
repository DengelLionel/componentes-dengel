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
-**navMobileContent** Nav mobile.
    ***EJEMPLO GENERAL***

    ```tsx
   <HeaderTwo 
    navMobileContent={ <NavMobileTypeTwo colorNavMobile={"bg-red-500"} openMenu={openMenu}>
    <h2 className='text-white'>contactos</h2>
    <h2 className='text-white'>profile</h2>
    <h2 className='text-white'>contactos</h2>
    <h2 className='text-white'>profile</h2>
  </NavMobileTypeTwo>}
   posicion="lg:justify-center"
    logo={<h2>Dengel</h2>} 
    LinksNavDesktop={<section><h2>mundial</h2></section>} 
    colorHeader='bg-blue-800' 
    openMenuDesktop={openMenuDesktop}
      openMenu={openMenu} 
      navDesktopLittle={<NavDesktopTypeTwo 
      colorNavLittleDesktop={"bg-sky-500"}
       openMenuDesktop={openMenuDesktop}>
    <h2 className='text-white'>contactos</h2>
    <h2 className='text-white'>profile</h2>
    <h2 className='text-white'>contactos</h2>
    <h2 className='text-white'>profile</h2>
  </NavDesktopTypeTwo>} 
  setOpenMenu={()=>{setOpenMenu(!openMenu)}} 
  setOpenMenuDesktop={()=>{setOpenMenuDesktop(!openMenuDesktop)}}/>
    ```
    ***IMPORTANTE: openMenu,setOpenMenu,setOpenMenuDesktop,openMenuDesktop deben ser creados por usted mismo ya sea con useState o context o como a usted le guste.***

  ## Componente questions

  - **colorIconActive :** Solo acepta colores en hexadecimal
  - **colorIconDefault :** Solo acepta colores en hexadecimal
  - **colorTextoActive :** Solo acepta colores configurados en tailwindcss
  - **colorTextoDefault :** Solo acepta colores configurados en tailwindcss
  - **questions :** Poner array como el siguiente ejemplo:
     ```js
      const questions=[
      {
      id:1,
      question:"¿Qué caracteriza a Elon Musk?",
      state:false,
      answer:"Elon Musk es cofundador y líder de Tesla, SpaceX, Neuralink y The Boring Company. Como cofundador y director general de Tesla, Elon lidera el diseño de productos, ingeniería y fabricación de los vehículos eléctricos, productos de batería y productos"
      },
      {
      id:2,
      question:"¿Quién es Elon Musk y cuáles inventos?",
      state:false,
      answer:"En 2002, Musk fundó SpaceX, fabricante aeroespacial y empresa de servicios de transporte espacial, de la que es CEO e ingeniero jefe."
      },
      {
      id:3,
      question:"¿Cuántos idiomas habla Elon Musk?",
      state:false,
      answer:"Según sus datos, Musk genera ¡más de 22.500 dólares en un minuto! Unos 375 dólares en un segundo. En euros, gana casi 330 "
      }
      ] 
      ```
  - **idd y setIdd:**
  ```tsx
  const [idd,setIdd]=useState<any|undefined>({id:0,state:false});
  ``` 

  ```tsx
  <Question colorTextAnswer="text-black" colorIconActive="#FE9800" colorIconDefault="#A599EF" colorTextoActive="text-orange-500" colorTextoDefault="tex-black" questions={questions} idd={idd} setIdd={setIdd} />
  ```