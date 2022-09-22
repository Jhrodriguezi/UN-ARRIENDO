import styles from "../css/titleStudentRegister.module.css"

export function TitleStudent(props){
    return(
        <div className="panel-heading">
            <div class="panel-title text-center">
              <h1 className={styles.title}> {props.title} </h1>
            </div>
          </div>
    );
}