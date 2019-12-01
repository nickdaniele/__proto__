import { LitElement, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

class Modal extends LitElement {
  static get properties() {
    return {
      modalStatus: { type: String },
      modalClasses: { type: Object }
    };
  }

  constructor() {
    super();

    this.modalClasses = {
      block: false,
      hidden: true,
      fixed: true,
      'z-10': true,
      'left-0': true,
      'top-0': true,
      'w-full': true,
      'h-full': true,
      'overflow-scroll': true,
      'bg-white': true
    };
  }

  // Events Handlers //////////////////
  close() {
    this.dispatchEvent(new CustomEvent('close'));
  }

  updatedClasses() {
    if (this.modalStatus === 'open') {
      this.modalClasses = {
        ...this.modalClasses,
        ...{ block: true, hidden: false }
      };
    } else {
      this.modalClasses = {
        ...this.modalClasses,
        ...{ block: false, hidden: true }
      };
    }
  }
  /////////////////////////////////////

  createRenderRoot() {
    return this;
  }

  render() {
    this.updatedClasses();

    return html`
      <div class="${classMap(this.modalClasses)}">
        <div class="mx-2">
          <div
            class="w-custom fixed text-right text-3xl bg-white cursor-pointer"
            @click="${() => {
              this.close();
            }}"
          >
            X
          </div>
          <div class="pt-12 overflow-scroll">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
            malesuada nibh. Aliquam molestie, diam at malesuada fermentum, arcu
            justo suscipit arcu, quis sodales quam velit et mi. Donec nisi
            lectus, vehicula nec aliquet ut, pharetra non ligula. Aenean
            facilisis suscipit odio, ac sodales enim molestie at. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. In id enim egestas justo tristique pharetra vel nec
            ligula. Curabitur ut faucibus dui, id commodo eros. Mauris imperdiet
            eget enim sed varius. Curabitur dictum vestibulum odio, a vestibulum
            metus laoreet ornare. Vivamus tempor est eleifend magna sodales, eu
            mattis enim congue. Curabitur mi enim, posuere id pulvinar eget,
            posuere quis justo. Cras rhoncus euismod felis, a eleifend leo
            posuere at. Phasellus sit amet dictum sem. Cras sed rhoncus lorem.
            Donec malesuada mi ut faucibus accumsan. Praesent porttitor nibh ac
            facilisis commodo. Cras sodales ante non mauris viverra tristique.
            Aenean sit amet leo a tellus molestie tempor quis et ex.
            Pellentesque finibus lectus in tristique convallis. Mauris vulputate
            libero vitae dignissim scelerisque. Integer accumsan felis non diam
            tempor finibus. In commodo eleifend commodo. Quisque nec lectus
            felis. Cras sit amet lectus luctus, efficitur enim varius, molestie
            est. Duis pharetra vestibulum elementum. Aenean ullamcorper dapibus
            metus, lobortis dapibus tortor lobortis ut. Integer egestas sed
            libero ac malesuada. Praesent vel dolor vitae ex congue lobortis.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Phasellus sed sem ac erat facilisis rhoncus
            a ac nibh. Morbi lobortis nibh tellus, in semper eros luctus eu.
            Vestibulum viverra porta iaculis. Nunc consequat efficitur luctus.
            Ut placerat dapibus rutrum. Duis velit orci, iaculis non finibus et,
            pharetra vitae lectus. Nulla venenatis bibendum finibus. In non nunc
            quis neque volutpat ultrices. Integer sed tortor sollicitudin,
            ornare nisl vel, interdum felis. Aliquam augue nulla, porttitor at
            consectetur quis, feugiat ut magna. Donec efficitur velit
            vestibulum, pretium augue vitae, finibus urna. Mauris vitae felis
            eget orci ultrices mattis in at ipsum. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Quisque porta venenatis mauris, at pharetra tellus ultricies vel.
            Suspendisse tristique quam ac egestas pharetra. Cras bibendum
            gravida metus ac tempus. Mauris mattis odio nec interdum blandit.
            Cras sagittis maximus ligula in ultricies. Phasellus hendrerit elit
            vel elit suscipit tempor. Nam purus arcu, consequat et ligula et,
            ornare viverra magna. Fusce scelerisque maximus est et pulvinar.
            Suspendisse fermentum pulvinar nulla id consequat. Curabitur velit
            felis, scelerisque euismod felis quis, auctor aliquet augue. Quisque
            et orci lobortis, maximus sapien nec, dignissim metus. Nam ut
            euismod tortor, id vulputate sem. Nulla consequat leo ac dapibus
            ultricies. Phasellus porttitor ligula id facilisis faucibus. Sed
            rutrum orci vitae tristique dictum. Etiam quis facilisis ligula,
            pulvinar pharetra felis. Sed sit amet mauris in erat auctor gravida
            vitae sed sapien. Aenean eget dui vitae quam blandit aliquam. Fusce
            sit amet tristique velit, et ultrices nisi. Cras luctus nulla nec
            orci finibus, sit amet placerat sapien eleifend. Aliquam in libero a
            eros varius consectetur. Fusce bibendum sem quam, sed tristique ante
            faucibus at. Curabitur tristique tortor est, vitae lacinia enim
            tincidunt non. Morbi pellentesque justo sed arcu blandit molestie.
            Morbi a sapien semper, malesuada neque quis, tincidunt dui. Sed
            metus orci, tincidunt et tristique aliquam, faucibus quis mi.
            Phasellus ornare, velit sed cursus gravida, ex mauris congue nulla,
            ac posuere odio massa eget metus. Maecenas sodales quam id elit
            faucibus, suscipit placerat lorem dignissim. Suspendisse at ante
            aliquet, suscipit tellus id, ullamcorper mauris. Vestibulum dolor
            dolor, cursus ut tellus dictum, convallis eleifend sapien. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
            malesuada nibh. Aliquam molestie, diam at malesuada fermentum, arcu
            justo suscipit arcu, quis sodales quam velit et mi. Donec nisi
            lectus, vehicula nec aliquet ut, pharetra non ligula. Aenean
            facilisis suscipit odio, ac sodales enim molestie at. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. In id enim egestas justo tristique pharetra vel nec
            ligula. Curabitur ut faucibus dui, id commodo eros. Mauris imperdiet
            eget enim sed varius. Curabitur dictum vestibulum odio, a vestibulum
            metus laoreet ornare. Vivamus tempor est eleifend magna sodales, eu
            mattis enim congue. Curabitur mi enim, posuere id pulvinar eget,
            posuere quis justo. Cras rhoncus euismod felis, a eleifend leo
            posuere at. Phasellus sit amet dictum sem. Cras sed rhoncus lorem.
            Donec malesuada mi ut faucibus accumsan. Praesent porttitor nibh ac
            facilisis commodo. Cras sodales ante non mauris viverra tristique.
            Aenean sit amet leo a tellus molestie tempor quis et ex.
            Pellentesque finibus lectus in tristique convallis. Mauris vulputate
            libero vitae dignissim scelerisque. Integer accumsan felis non diam
            tempor finibus. In commodo eleifend commodo. Quisque nec lectus
            felis. Cras sit amet lectus luctus, efficitur enim varius, molestie
            est. Duis pharetra vestibulum elementum. Aenean ullamcorper dapibus
            metus, lobortis dapibus tortor lobortis ut. Integer egestas sed
            libero ac malesuada. Praesent vel dolor vitae ex congue lobortis.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Phasellus sed sem ac erat facilisis rhoncus
            a ac nibh. Morbi lobortis nibh tellus, in semper eros luctus eu.
            Vestibulum viverra porta iaculis. Nunc consequat efficitur luctus.
            Ut placerat dapibus rutrum. Duis velit orci, iaculis non finibus et,
            pharetra vitae lectus. Nulla venenatis bibendum finibus. In non nunc
            quis neque volutpat ultrices. Integer sed tortor sollicitudin,
            ornare nisl vel, interdum felis. Aliquam augue nulla, porttitor at
            consectetur quis, feugiat ut magna. Donec efficitur velit
            vestibulum, pretium augue vitae, finibus urna. Mauris vitae felis
            eget orci ultrices mattis in at ipsum. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Quisque porta venenatis mauris, at pharetra tellus ultricies vel.
            Suspendisse tristique quam ac egestas pharetra. Cras bibendum
            gravida metus ac tempus. Mauris mattis odio nec interdum blandit.
            Cras sagittis maximus ligula in ultricies. Phasellus hendrerit elit
            vel elit suscipit tempor. Nam purus arcu, consequat et ligula et,
            ornare viverra magna. Fusce scelerisque maximus est et pulvinar.
            Suspendisse fermentum pulvinar nulla id consequat. Curabitur velit
            felis, scelerisque euismod felis quis, auctor aliquet augue. Quisque
            et orci lobortis, maximus sapien nec, dignissim metus. Nam ut
            euismod tortor, id vulputate sem. Nulla consequat leo ac dapibus
            ultricies. Phasellus porttitor ligula id facilisis faucibus. Sed
            rutrum orci vitae tristique dictum. Etiam quis facilisis ligula,
            pulvinar pharetra felis. Sed sit amet mauris in erat auctor gravida
            vitae sed sapien. Aenean eget dui vitae quam blandit aliquam. Fusce
            sit amet tristique velit, et ultrices nisi. Cras luctus nulla nec
            orci finibus, sit amet placerat sapien eleifend. Aliquam in libero a
            eros varius consectetur. Fusce bibendum sem quam, sed tristique ante
            faucibus at. Curabitur tristique tortor est, vitae lacinia enim
            tincidunt non. Morbi pellentesque justo sed arcu blandit molestie.
            Morbi a sapien semper, malesuada neque quis, tincidunt dui. Sed
            metus orci, tincidunt et tristique aliquam, faucibus quis mi.
            Phasellus ornare, velit sed cursus gravida, ex mauris congue nulla,
            ac posuere odio massa eget metus. Maecenas sodales quam id elit
            faucibus, suscipit placerat lorem dignissim. Suspendisse at ante
            aliquet, suscipit tellus id, ullamcorper mauris. Vestibulum dolor
            dolor, cursus ut tellus dictum, convallis eleifend sapien.
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('app-modal', Modal);
