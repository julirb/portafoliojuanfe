import'./Experiencia'

export function Experiencia(){
    return(
        <>

<section className="container my-4">
                <div className="row">
                    <div className="col-4 card p-3">
                    <img src="../../../../src/assets/img/logica de programación.jpeg" alt="" className='img-fluid'/> 
                    <br />
                    <div class="progress" role="progressbar">
                        <div class="progress-bar barra">65%</div> 
                    </div>
                    
                    </div>
                    <div className="col-8 card p-3">
                        <h2>Logica de Programacion</h2>
                        <ul>
                            <li>Variables y Constante</li>
                            <li>Tipos de Datos</li>
                            <li>Operadores</li>
                            <li>Condicionales</li>
                            <li>Ciclos y Bucles</li>
                        </ul>
                    </div>
                </div>
            </section>

        </>    
    )