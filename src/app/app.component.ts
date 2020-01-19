import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "BootstrapAngular";
  isCollapsed = false;

  constructor(private titleService: Title, private meta: Meta) {
    titleService.setTitle("Title Goes here");
    meta.updateTag({
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    });
    meta.addTag(
      { name: "description", content: "My company description" },
      true
    );
    meta.addTag({ name: "keywords", content: "" }, true);
    meta.addTag({ name: "author", content: "Vinay K" }, true);
  }
}
