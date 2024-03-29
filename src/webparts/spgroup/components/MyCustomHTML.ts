import { escape } from '@microsoft/sp-lodash-subset';

export default class sample {

    public static templateHTML: string =
    `
    <div class="container">
        <h2>Custom Form</h2>
        <p>Custom Form in SPFX using Bootstrap 4</p>
        <form>
        <div class="form-group">
            <label for="inputdefault">Name</label>
            <input class="form-control" id="inputdefault" type="text">
        </div>
        <div class="form-group">
            <label for="sel1">Country</label>
            <select class="form-control" id="sel1">
                <option>-Select-</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-default">Submit</button>
        </div>
        </form>
    </div>
    `
    }
