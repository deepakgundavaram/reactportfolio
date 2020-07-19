import React, {Component} from 'react';
import './About.css';

class AboutContainer extends Component {
    state = {
        info: this.props.personalInfo || []
    };
    render() {
        return (
            <div className="card border-primary mb-3 profile-card" id="profile-link">
                <div className="card-header">
                    <h3>Profile
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </h3>
                </div>
                <div className="card-body">
                    <div className="card-block">
                        <div className="row">
                            <div className="col-lg-4">
                                <img
                                    className="img-responsive img-circle"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAABOFBMVEX///8REiT7tGZMp/B6RDiQUUL7oUBcNCwAAADa2ttXrPD9tmf7qVFRIxi+s677my/84cdTLCm2fkz2/P7lol5wOjVIpPDw7OtzNieIST76pkv++vSzo5z6sFz/oDeNSjkAABcAABq5lo+Xcmr+7+L95tHB3vgAABNWLypNJyZIISV5eYGUlJovMD0fIC9RUVxWKyHbnFt4TDZHGBNoPjDbxriucz7RklbsqGH81rH9z6X7woX7uHGcy/VzufQ0n++BvvPn8/yYyfaNjZVBQUxtbnZdXWanp6yhgnuEUkdxMSDOwLybdW2ZaF3Gq6eXgHyCZV/RycVMFQSGa2aHPino3NpsSULCo5yYXlCOXT6dakRuRDGrdEmCVTo8FB+UY0DUoXSBpMW6o46SpbbDxcglJzO1trc3OELNTHk1AAAIZ0lEQVR4nO2aC1vaVhiACSgEosMAw1UaJZ01iQlEHRvUa7tc6Oa6zq3dVotzFyn//x/sJAQNIYmBSs859Ht90JATfL7X7zuXnJhKAQAAAAAAAAAAAAAAAAAAAAAAAAAAAJ8NtfUguCP6eGpvf3756oelr8b48WvcYX0s5z85SksT0C22/iTMiXqx9ZeRWlSLPV6K1qJY7O0PcVr0ip3Ha1Er9seP93gt/YQ7xJl4eV++lr56iTvGWYjzeuTx6onHz7ijTcLF49e/ICK9ln1seZBfkxevV1dX9/b2WlG5Wg6DeLGLX37dy7lMo4XEnuCOPJ7fVj2tCK8ILdLF8rmRVi68ECO9lrfOcQcfw8VtusITFlWGrthb3NFHk1+91cp9OV2+lpf/xB19NOs5H9N6kdzFftuLT1ic1/Ibcivx/Nf4hMV1sOXlV7jDj+Z3X8LChsT4hF3gDj+Si3sSFutF8rLj9d7HiJHbw1L+ITFELL4QCV7Zv/XNYWFdLDZfBA/1aNExcyVuEX2veR4vFjPWvyHaK/VFvFhMvv7AHXo8M4pt/UnuBDZkJrGtN4SnKzWbGNGj4YiRmKwoCv/lBI/GcKweLbVWv8AddQI8MeVdu3Iv7WvevZgiMb7NhZP2w3Ftni4x+XLcIBLuUqZKjN9PKrbPUyUmV5KKVejKGIiBGH5ADMQIwRNL5pVOUyaWS54xupZUBwm9kNkBTWJK0oQ5ayqFFrFvlFY7sRcya7eUb2gQ+/a7dnoKL2SWbn/3Le6oE7AmTKXlqglruKNOwJpwG+/knWU6vI0qMY7rtBGVEDXOa9tPe40UiXHpXk7hEYp82QmocelSa9imHAyHGdLFatuIZ44Y187xoy04ni+NmXH7LWXUJitXjrbwzPlkDXf8URxubCI2XK9d3sduz2eG2hRfmyJ30En3k9lD3AbhHBazDitO9KUAvgmAC7Y51bjifrRIpFlt6DUUi9t1C2sbimWLJFbjml9sWkZiT3FbhPAgYiSOjp+TWNKFB3VivVbuOjg7D73a71ot/8RNl9gBmof5XIgZ19uVnSns7u6GJjGu7a4v+MnHE6hFbvUuZflOmiox9zlKyC4Bxx3I79H3fZnvUSnWc1eL8tVExjo5d/XIXfFXVIpVXDGlNNnHWrvOUyau9Nc1jWIocLQS3g15Ash1vL2e/TSVYkigVAp9AMgFftImFjNBB6FMLDkghoF4MeGWBRPzIr+nmUKxUejxrUSKbd/Tx4SNbHYjvBDvxLZxW4RxVIwVi8XbzDnC7RDO0WYRsTGL2IbzyU1CvVKp2lPEYVS5xSAcOp8kcYvKx9osYiQOGkHGxGKWVP4m+sTSMf8Ft0+xGHeFbltC1bjOwe7dnRqFYjz/vhP2hKydk2kTezpWiu8UWekF1Diugk77Hy4JJG5tB9keE+NKvMznLivDDVLOvUXbv5Zlfuw/CwQiVxxBgp3pncLz8vvLdgV5dfZL1y3nsVhv/D8LcMeciKOAGcpQDlUer+wqivvMT2kFi5PYJccYz4IzNMd1UJ6U4WNnHuUuOL1RMXaghVXI0oNzqrBdKrUrnZBJWyB8MTUidLXIpX0PMANeRD6hDaEW4hULJQkL6WWxCM9wx5ucoynMBDqGxCG14+Rix9QUokPteDxnQnZlxdl7W1nJBhro8kpNDI3CaPstcJqWAdHH2vHY5qizSRXYphKEYzpm5iBPj8b3fYPvjmhY00dQCywc7ziirW8F2I4Y+Om4UYkjfDeOxkEjQMT6ivJCRNTC9uuFjUUQm9zNX8kuhljgQYXzAGJRxBwVD+/d4oiNA2Lkslhi5TuixHyX4I42EeWdk9NCoZC5pRAu5r+iUDg92SFar7xzelbNZKroa0Q1sxImJvgvcQ6rZ6fEupVPMmeZCap/b056bf5dnbzyLHNCpNpOISRYxD/FSbHiP6HXVgs7uC0mKD8PydYwEf9OmBX/jbz4OWFJexGRLjcP3Wxx00cx2425uPACt4ufF5noUJ1g/3vs47+YP4IzlBBk9qIaF6obrZ/7riXGrFyID3VaCqT0s+f35GBaqs9xGw3ZiRriZuaMiFG//NBaDiQU48kDF6JD9QS31ZwSRkLKHr6HORDQy07nUImoFk9xe5XnkjCUMty1uDOXhKGU4a7F7+cl9j1msfl0MQI62QMvE+8oYBabl1cmg1lsTpWIahHEQAzEQAzEQAzEQCxAuTA3cN+QAQAAAAAAAAAAAAAAAAAAAAAAAAAAAFOTX1BS7IKSYhYUEKONWDFRHHvnvejAExugV785PG6M2uq2LjUGt5fqItO3GwwlDMVEyxbrRl2qM3WJNZqiJImixHYRlsZKLMuILNvIs+zAMDHHmxgvY01DaqqqprLopWoNTVNNTc/rLGut21o+3zfzef3GRD8H8b9unoihZ+vMsMu4rehgdJUnJmmMZVl19GJZQzQY1lJtybzJq5bWv2Ht7s2A7a/nx/vc/BFVRq0zYr/fZ1A3MdRGs4neOd0BHQy/7G5f021V71oGyoylMaou+sVE2zZszbZUU5QMRpPqlqGjYhTzqqZ/YAcfbiQJiTU/tZilq1rXslRLNSwUtqEbKnqnNfuGaaDa0gxTVwcqCpg1dNVULVZrBMQYsas2DbHR15imbVs2o9m6qFkGKr9G3rpRtQ+qiY6lTyvGSDeihv7itmWo6sDWVNswVFvVTFMzu2q3b1kGMrK1ZtfWddW2NU3Xu2pAzGqKfUN1XpLNorw2GqKuqXXJNtHvliRUkhZrffKhoy82B3UTDdSo/PoD9IfvS2bTedtoNlAlNgeiORg0G+gcY0omY+p90fvk7TzmnKiL7gt91d1TaJR0+qMkOseMSO4sJk4cfKYrD5oBMdr4H5wrjLP66RvnAAAAAElFTkSuQmCC"
                                    alt="Deepak Gundavaram"/>
                                <p className="card-text">{this.props.personalInfo.about}</p>
                            </div>

                            <div className="col-lg-8">
                                <ul>
                                    <li className="about-self">Senior IT Manager Genworth Financial</li>
                                    <li className="about-self">Experienced Data Architect  Web Developer</li>
                                    <li className="about-self">Excellent communication and inter personal skills</li>
                                    <li className="about-self" id="hobbies">Hobbies
                                        <span>
                                            <i className="fa fa-code fa-2x" aria-hidden="true"></i>
                                        </span>
                                        <span>
                                            <i className="fa fa-music fa-2x" aria-hidden="true"></i>
                                        </span>
                                        <span>
                                            <i className="fa fa-camera fa-2x" aria-hidden="true"></i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AboutContainer;