import { AOSAnimations } from "./aos-animations.enum";
import { ExperienceCardModelPosition } from "./experience-card-model-position.enum";

export class ExperienceCardModel {
  CardAnimation: AOSAnimations = AOSAnimations.fadeUp;
  ContentAnimation: AOSAnimations = AOSAnimations.fadeUp;
  HeaderAnimation: AOSAnimations = AOSAnimations.fadeDown;
  LogoAnimation: AOSAnimations = AOSAnimations.flipDown;
  Position: ExperienceCardModelPosition = ExperienceCardModelPosition.Right;
}
