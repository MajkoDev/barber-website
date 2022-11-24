const Contact = () => {
  return (
    <div>
      <section class="section-padding-2x background-gray-1">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <form class="zform" method="post">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="hidden"
                        name="to"
                        value="username@domain.extension"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="exampleInputName1">First Name</label>
                      <input
                        class="form-control"
                        type="text"
                        name="firstname"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="exampleInputName2">Last Name</label>
                      <input
                        class="form-control"
                        type="text"
                        name="lastname"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="exampleInputCompany">Company</label>
                      <input
                        class="form-control"
                        type="text"
                        name="company"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email</label>
                      <input
                        class="form-control"
                        type="email"
                        name="from"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="exampleInputPassword1">Message</label>
                      <textarea
                        class="form-control"
                        rows="8"
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-12 text-center">
                    <input
                      class="btn btn-primary"
                      type="submit"
                      name="submit"
                      value="Send!"
                    />
                  </div>
                </div>
                <div class="zform-feedback mt-3"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
