import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-our-customers',
  standalone: false,
  templateUrl: './our-customers.component.html',
  styleUrl: './our-customers.component.scss',
})
export class OurCustomersComponent implements OnInit, OnDestroy {
  customers = [
    'GOBERNACIÓN DEL DEPARTAMENTO DEL ATLÁNTICO',
    'ALCALDÍA DE BARRANQUILLA',
    'ALCALDÍA DE POLO NUEVO',
    'CONSEJO MUNICIPAL DE PUERTO COLOMBIA',
    'ESE HOSPITAL NIÑO JESÚS DE BARRANQUILLA (EN LIQUIDACIÓN)',
    'CORPORACION REGIONAL AUTONOMA DEL ATLANTICO “CRA”',
    'ESE HOSPITAL DEPARTAMENTAL DE SABANALARGA (EN LIQUIDACIÓN)',
    'SERVICIO NACIONAL DE APRENDIZAJE – SENA REGIONAL ATLANTICO',
    'ALCALDIA DE SOLEDAD – SECRETARIA DE EDUCACION',
    'INSTITUTO MUNICIPAL TRANSPORTE Y TRANSITO DE SOLEDAD',
    'SECRETARIA DE MOVILIDAD DE BARRANQUILLA',
    'ESE HOSPITAL UNIVERSITARIO CARI (EN LIQUIDACIÓN)',
    'HOSPITAL MATERNO INFANTIL DE SOLEDAD: CENTROS DE SALUD HMI: MANUELA BELTRAN Y METROPOLITANO',
    'ALCALDIA MUNICIPAL DEL LURUACO',
    'SECRETARIA DE SALUD DEL LURUACO',
    'METODOS Y SISTEMAS',
    'ELECTRICARIBE SA ESP',
    'CONCEJO DISTRITAL DE SANTA MARTA',
    'PERSONERIA DISTRITAL DE SANTA MARTA',
    'ALCALDIA DE ZAPAYAN (MAGDALENA)',
    'GOBERNACION DEL MAGDALENA',
    'HOSPITAL LOCAL DEL PIÑON (MAGDALENA)',
    'Hospital Universitario Julio Méndez Barreneche',
    'SECRETARIA DE TRANSPORTES Y TRANSITO DE VALLEDUPAR',
    'SECRETARIA MUNICIPAL DE TRANSPORTES Y TRANSITO DE CODAZZI (CESAR)',
    'ALCALDIA DE RIOHACHA (EMPRESA PIONERA EN EL PROCESO DE INTERNACION DE LOS VEHICULOS)',
    'DEPARTAMENTO ADMINISTRATIVO DE TRANSPORTE Y TRANSITO DE LA GUAJIRA',
    'INSTITUTO MUNICIPAL DE TRANSPORTE Y TRANSITO DE RIOHACHA',
    'ALCALDIA DE EL MOLINO',
    'ALCALDIA DE SAN ESTANISLAO DE KOSTKA – ARENAL (BOLIVAR)',
    'ALCALDIA DE MAGANGUE',
    'FONDO MUNICIPAL DE TRANSPORTES Y TRANSITO DE MAGANGUE (BOLIVAR)',
    'INSPECCION DE TRANSITO Y TRANSPORTES DE MOMPOX (BOLIVAR)',
    'SECRETARIA MUNICIPAL DE COROZAL (SUCRE)',
    'CAJACOPI EPS',
    'CAJA DE PREVISION SOCIAL DEL ATLANTICO',
    'IPS SANTA MARIA DE JESÚS',
    'FUNDACIÓN “FUNDESOL” – SUCURSAL ATLÁNTICO',
    'SISCO S.A.S.',
    'QUIMIOSALUD LTDA',
    'ELECTRICARIBE SA ESP (AHORA AIRE)',
    'CAJA DE COMPENSACION FAMILIAR DEL MAGDALENA “CAJAMAG”',
    'FUNDACIÓN “FUNDESOL” – SUCURSAL MAGDALENA',
    'CAJA DE PREVISION SOCIAL DE LA UNIVERSIDAD DE CARTAGENA “UNICARTAGENA”',
    'CAJA DE COMPENSACION FAMILIAR CAMPESINA “COMCAJA”',
    'ALDESARROLLO (ANTES EDURED)',
    'CAJA DE COMPENSACION FAMILIAR DEL CESAR “COMFACESAR”',
    'CAFABA EPS-S',
    'CAJA DE COMPENSACION FAMILIAR DE BARRANCABERMEJA',
  ];

  isPaused = false;
  isDark: boolean = false;
  private observer!: any;
  @ViewChildren('elementsParallax') elementsParallax!: QueryList<ElementRef>;

  constructor(
    private themeService: ThemeService,
    private utilsService: UtilsService
  ) {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDark = isDark;
    });
  }

  ngOnInit(): void {
    // this.observer = this.utilsService.parallaxEffect(
    //   this.elementsParallax,
    //   0.05
    // );
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnected();
    }
  }

  pauseSlider(): void {
    this.isPaused = true;
  }

  resumeSlider(): void {
    this.isPaused = false;
  }
}
