import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { PostsComponent } from './components/posts/posts.component';
import { FormComponentsComponent } from './form-components/form-components.component';
import { TextBoxCompComponent } from './components/text-box-comp/text-box-comp.component';
import { CustomTextboxComponent } from './components/custom-textbox/custom-textbox.component';
import { CustomCheckboxComponent } from './components/custom-checkbox/custom-checkbox.component';
import { CustomFormComponentsComponent } from './components/custom-form-components/custom-form-components.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    PostsComponent,
    FormComponentsComponent,
    TextBoxCompComponent,
    CustomTextboxComponent,
    CustomCheckboxComponent,
    CustomFormComponentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
